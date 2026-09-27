import { Router } from "express";
import {
  getBlogs,
  getBlogBySlugOrId,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController";
import { upload } from "../middleware/upload";

const router = Router();

// Image upload route
router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, error: "No image file provided" });
  }
  const protocol = req.protocol;
  const host = req.get("host");
  const fileUrl = `${protocol}://${host}/uploads/${req.file.filename}`;
  res.json({ success: true, url: fileUrl });
});

router.get("/", getBlogs);
router.get("/:identifier", getBlogBySlugOrId);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
