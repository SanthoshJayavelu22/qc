import { Request, Response } from "express";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AdminUser, AdminRole } from "../models/AdminUser";
import { sendPasswordResetEmail } from "../services/emailService";

const JWT_SECRET = process.env.JWT_SECRET || "qc_legal_admin_secret_key_2026";

// Admin Login
export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, error: "Email and password are required" });
    }

    const user = await AdminUser.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ success: false, error: "Invalid credentials" });
    }

    if (!user.isActive) {
      return res.status(403).json({ success: false, error: "Your account has been deactivated" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: "Invalid credentials" });
    }

    user.lastLogin = new Date();
    await user.save();

    const token = jwt.sign(
      { id: user._id, role: user.role, name: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
      },
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Super Admin creates a new admin user
export const createAdminUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role, phone } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        error: "Name, email, password, and role are required",
      });
    }

    const existing = await AdminUser.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({
        success: false,
        error: "An admin with this email address already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await AdminUser.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role,
      phone: phone || "",
      isActive: true,
    });

    res.status(201).json({
      success: true,
      message: "Admin account created successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        phone: newUser.phone,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// List all admin users (for Super Admin dashboard)
export const getAdminUsers = async (_req: Request, res: Response) => {
  try {
    const users = await AdminUser.find().select("-password").sort({ createdAt: -1 });
    res.json({ success: true, count: users.length, users });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update an admin user (role, name, active status)
export const updateAdminUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, role, phone, isActive, password } = req.body;

    const user = await AdminUser.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, error: "Admin user not found" });
    }

    if (name) user.name = name;
    if (role) user.role = role as AdminRole;
    if (phone !== undefined) user.phone = phone;
    if (isActive !== undefined) user.isActive = isActive;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();

    res.json({
      success: true,
      message: "Admin profile updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
      },
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete admin user
export const deleteAdminUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await AdminUser.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    if (user.role === "Super Admin") {
      const superAdminCount = await AdminUser.countDocuments({ role: "Super Admin" });
      if (superAdminCount <= 1) {
        return res.status(400).json({
          success: false,
          error: "Cannot delete the primary Super Admin account",
        });
      }
    }

    await AdminUser.findByIdAndDelete(id);
    res.json({ success: true, message: "Admin account deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Request Password Reset
export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, error: "Please provide your email address" });
    }

    const user = await AdminUser.findOne({ email: email.toLowerCase() });
    if (!user) {
      // Return success even if not found for security, or friendly notice
      return res.json({
        success: true,
        message: "If that email is registered, a password reset link has been dispatched.",
      });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    user.resetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour
    await user.save();

    const host = req.get("host") || "localhost:3000";
    await sendPasswordResetEmail(user.email, resetToken, host);

    res.json({
      success: true,
      message: "A password reset link has been dispatched to your email address.",
      resetTokenInDev: resetToken, // Provided for convenience in local development
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Reset Password with Token
export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token, newPassword } = req.body;
    if (!token || !newPassword) {
      return res.status(400).json({ success: false, error: "Token and new password are required" });
    }

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await AdminUser.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: new Date() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        error: "Password reset token is invalid or has expired",
      });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ success: true, message: "Password updated successfully. You can now log in." });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
