import multer from "multer";

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // folder where images will be saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Create upload instance
const upload = multer({ storage });

// ✅ Default export
export default upload;
