const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const multer = require('multer');
const path = require('path');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Logging middleware
app.use(morgan('combined'));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (images)
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Pharmacy Management System API is running',
    timestamp: new Date().toISOString()
  });
});

// Image upload endpoint
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    // Upload to Cloudinary if configured
    if (process.env.CLOUDINARY_CLOUD_NAME) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'pharmacy-system',
        use_filename: true
      });
      
      res.json({
        success: true,
        imageUrl: result.secure_url,
        publicId: result.public_id,
        localPath: `/uploads/${req.file.filename}`
      });
    } else {
      // Return local file path if Cloudinary not configured
      res.json({
        success: true,
        imageUrl: `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`,
        localPath: `/uploads/${req.file.filename}`
      });
    }
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Error uploading image',
      error: error.message
    });
  }
});

// Get all uploaded images
app.get('/api/images', (req, res) => {
  const fs = require('fs');
  const uploadsDir = path.join(__dirname, '../uploads');
  
  try {
    if (!fs.existsSync(uploadsDir)) {
      return res.json([]);
    }
    
    const files = fs.readdirSync(uploadsDir);
    const images = files
      .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map(file => ({
        filename: file,
        url: `${req.protocol}://${req.get('host')}/uploads/${file}`,
        uploadedAt: fs.statSync(path.join(uploadsDir, file)).mtime
      }));
    
    res.json(images);
  } catch (error) {
    console.error('Error reading images:', error);
    res.status(500).json({
      success: false,
      message: 'Error reading images'
    });
  }
});

// Mock data endpoints
app.get('/api/products', (req, res) => {
  const mockProducts = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      category: 'Pain Relief',
      price: 5000,
      stock: 150,
      description: 'Effective pain relief medication',
      image: '/images/paracetamol.jpg'
    },
    {
      id: 2,
      name: 'Amoxicillin 250mg',
      category: 'Antibiotics',
      price: 8000,
      stock: 75,
      description: 'Broad-spectrum antibiotic',
      image: '/images/amoxicillin.jpg'
    },
    {
      id: 3,
      name: 'Ibuprofen 400mg',
      category: 'Pain Relief',
      price: 6000,
      stock: 200,
      description: 'Anti-inflammatory pain reliever',
      image: '/images/ibuprofen.jpg'
    }
  ];
  res.json(mockProducts);
});

app.get('/api/orders', (req, res) => {
  const mockOrders = [
    {
      id: 'ORD-001',
      customerName: 'Kampala Hospital',
      totalAmount: 25000,
      status: 'pending',
      date: '2024-01-15'
    },
    {
      id: 'ORD-002',
      customerName: 'Mulago Clinic',
      totalAmount: 18000,
      status: 'delivered',
      date: '2024-01-14'
    }
  ];
  res.json(mockOrders);
});

app.get('/api/customers', (req, res) => {
  const mockCustomers = [
    {
      id: 1,
      name: 'Kampala Hospital',
      email: 'info@kampalahospital.com',
      phone: '+256-123-456-789',
      address: 'Kampala, Uganda'
    },
    {
      id: 2,
      name: 'Mulago Clinic',
      email: 'contact@mulagoclinic.com',
      phone: '+256-987-654-321',
      address: 'Mulago, Uganda'
    }
  ];
  res.json(mockCustomers);
});

// Authentication endpoint (mock)
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  
  const validCredentials = {
    admin: 'admin123',
    manager: 'manager123',
    supervisor: 'supervisor123'
  };

  if (validCredentials[username] && validCredentials[username] === password) {
    res.json({
      success: true,
      user: {
        username,
        role: username,
        token: `mock-token-${username}-${Date.now()}`
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Pharmacy Management System API running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;

