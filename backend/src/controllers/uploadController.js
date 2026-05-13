const path = require('path');

const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  res.status(201).json({ filename: req.file.filename, url: fileUrl });
};

module.exports = { uploadFile };
