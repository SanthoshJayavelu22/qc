import { Router, Request, Response, NextFunction } from "express";
import multer from "multer";
import {
  getBlogs,
  getBlogBySlugOrId,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController";
import { upload } from "../middleware/upload";

const router = Router();

// Image upload route with clean error handling for multer
router.post(
  "/upload",
  (req: Request, res: Response, next: NextFunction) => {
    upload.single("image")(req, res, (err: any) => {
      if (err) {
        if (err instanceof multer.MulterError) {
          if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({
              success: false,
              error: "The image is too large. Maximum allowed size is 25MB.",
            });
          }
          return res.status(400).json({
            success: false,
            error: `Upload error: ${err.message}`,
          });
        }
        return res.status(400).json({
          success: false,
          error: err.message || "Invalid file uploaded. Only images are allowed.",
        });
      }
      next();
    });
  },
  (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ success: false, error: "No image file provided" });
    }
    const protocol = req.protocol;
    const host = req.get("host");
    const fileUrl = `${protocol}://${host}/uploads/${req.file.filename}`;
    res.json({ success: true, url: fileUrl });
  }
);

router.get("/", getBlogs);
router.get("/:identifier", getBlogBySlugOrId);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
