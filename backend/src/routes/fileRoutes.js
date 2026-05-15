const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const File = require('../models/File');
const { protect } = require('../middleware/authMiddleware');

router.post('/upload', protect, upload.single('document'), async (req, res) => {
  try {
    const newFile = new File({
      userId: req.user ? req.user._id : null,
      fileName: req.file.originalname,
      fileUrl: req.file.path, // Cloudinary URL
      publicId: req.file.filename,
    });

    await newFile.save();

    res.status(200).json({ success: true, file: newFile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
