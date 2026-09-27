import { Router } from "express";
import {
  loginAdmin,
  createAdminUser,
  getAdminUsers,
  updateAdminUser,
  deleteAdminUser,
  forgotPassword,
  resetPassword,
} from "../controllers/authController";

const router = Router();

router.post("/login", loginAdmin);
router.post("/users", createAdminUser);
router.get("/users", getAdminUsers);
router.put("/users/:id", updateAdminUser);
router.delete("/users/:id", deleteAdminUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
