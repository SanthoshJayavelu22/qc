import { Request, Response } from "express";
import { Blog } from "../models/Blog";

// Get all blogs (supports filter by isPublished, category, search)
export const getBlogs = async (req: Request, res: Response) => {
  try {
    const { category, search, all } = req.query;
    const filter: any = {};

    // If 'all' is not requested, return only published blogs
    if (all !== "true") {
      filter.isPublished = true;
    }

    if (category && category !== "All") {
      filter.category = category;
    }

    if (search && typeof search === "string") {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { excerpt: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
      ];
    }

    const blogs = await Blog.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: blogs.length, blogs });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get single blog by slug or ID
export const getBlogBySlugOrId = async (req: Request, res: Response) => {
  try {
    const { identifier } = req.params;
    let blog = await Blog.findOne({ slug: identifier });
    if (!blog && identifier.match(/^[0-9a-fA-F]{24}$/)) {
      blog = await Blog.findById(identifier);
    }

    if (!blog) {
      return res.status(404).json({ success: false, error: "Blog post not found" });
    }

    res.json({ success: true, blog });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create a new blog post
export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, slug, excerpt, content, category, author, readTime, coverImage, tags, isPublished } = req.body;

    if (!title || !excerpt || !content) {
      return res.status(400).json({
        success: false,
        error: "Title, excerpt, and content are required fields.",
      });
    }

    // Auto-generate slug if not explicitly given
    const calculatedSlug =
      slug ||
      title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");

    // Check slug uniqueness
    const existing = await Blog.findOne({ slug: calculatedSlug });
    if (existing) {
      return res.status(400).json({
        success: false,
        error: `A blog with the slug '${calculatedSlug}' already exists. Please choose a different title or slug.`,
      });
    }

    const newBlog = await Blog.create({
      title,
      slug: calculatedSlug,
      excerpt,
      content,
      category: category || "Conveyancing",
      author: author || "Quality Conveyancing Team",
      readTime: readTime || "5 min read",
      coverImage: coverImage || "",
      tags: Array.isArray(tags) ? tags : typeof tags === "string" ? tags.split(",").map((t: string) => t.trim()) : [],
      isPublished: isPublished !== undefined ? isPublished : true,
    });

    res.status(201).json({ success: true, message: "Blog published successfully", blog: newBlog });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update existing blog
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    if (updateData.tags && typeof updateData.tags === "string") {
      updateData.tags = updateData.tags.split(",").map((t: string) => t.trim());
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

    if (!updatedBlog) {
      return res.status(404).json({ success: false, error: "Blog not found" });
    }

    res.json({ success: true, message: "Blog updated successfully", blog: updatedBlog });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete blog
export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Blog.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, error: "Blog not found" });
    }

    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
