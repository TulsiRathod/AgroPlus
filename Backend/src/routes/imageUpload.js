// File: imageUpload.js

const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dj6564anu',
  api_key: process.env.CLOUDINARY_API_KEY || '228688232979645',
  api_secret: process.env.CLOUDINARY_API_SECRET || '-DKb3iCdJeTW74F7bXazugD1nUI'
});

// Configure Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Folder where images will be stored in Cloudinary
    allowed_formats: ['jpg', 'png'],
  },
});

// Multer middleware to handle file upload
const upload = multer({ storage: storage });

// Image upload handler function
const uploadImage = (req, res) => {
    console.log(req);
  if (req.file) {
    return res.json({
      success: true,
      url: req.file.path, // The URL of the uploaded image
    });
  }
  return res.status(400).json({
    success: false,
    message: 'Image upload failed.',
  });
};

// Exporting the upload middleware and uploadImage function
module.exports = {
  upload,
  uploadImage,
};
