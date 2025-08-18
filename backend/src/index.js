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

    // For now, use local storage only (Cloudinary optional)
    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    
    res.json({
      success: true,
      imageUrl: imageUrl,
      localPath: `/uploads/${req.file.filename}`,
      message: 'Image uploaded successfully'
    });
    
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
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Amoxicillin 250mg',
      category: 'Antibiotics',
      price: 8000,
      stock: 75,
      description: 'Broad-spectrum antibiotic',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Ibuprofen 400mg',
      category: 'Pain Relief',
      price: 6000,
      stock: 200,
      description: 'Anti-inflammatory pain reliever',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop'
    }
  ];
  res.json(mockProducts);
});

// Notification system endpoints
app.get('/api/notifications', (req, res) => {
  const mockNotifications = [
    {
      id: 1,
      type: 'message',
      title: 'New Customer Inquiry',
      message: 'Customer John Doe is asking about product availability',
      sender: 'john.doe@email.com',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      read: false,
      priority: 'medium'
    },
    {
      id: 2,
      type: 'order',
      title: 'New Order Received',
      message: 'Order #ORD-003 has been placed by Kampala Hospital',
      sender: 'system',
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
      read: false,
      priority: 'high'
    },
    {
      id: 3,
      type: 'stock',
      title: 'Low Stock Alert',
      message: 'Paracetamol 500mg is running low (5 units remaining)',
      sender: 'system',
      timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
      read: true,
      priority: 'high'
    },
    {
      id: 4,
      type: 'message',
      title: 'Product Information Request',
      message: 'Dr. Sarah is requesting information about new antibiotics',
      sender: 'dr.sarah@hospital.com',
      timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(), // 15 minutes ago
      read: false,
      priority: 'medium'
    }
  ];
  res.json(mockNotifications);
});

app.post('/api/notifications/:id/read', (req, res) => {
  const { id } = req.params;
  // In a real app, this would update the database
  res.json({ 
    success: true, 
    message: `Notification ${id} marked as read` 
  });
});

app.post('/api/messages', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  // In a real app, this would save to database and send email
  const newMessage = {
    id: Date.now(),
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
    status: 'unread'
  };

  res.json({
    success: true,
    message: 'Message sent successfully',
    data: newMessage
  });
});

app.get('/api/messages', (req, res) => {
  const mockMessages = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      subject: 'Product Availability Inquiry',
      message: 'I would like to know if you have Paracetamol 500mg in stock. We need 1000 tablets for our clinic.',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      status: 'unread'
    },
    {
      id: 2,
      name: 'Dr. Sarah Johnson',
      email: 'dr.sarah@hospital.com',
      subject: 'New Product Information',
      message: 'We are interested in learning more about your new antibiotic line. Can you send us a catalog?',
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
      status: 'unread'
    },
    {
      id: 3,
      name: 'Kampala Medical Center',
      email: 'info@kampalamedical.com',
      subject: 'Bulk Order Request',
      message: 'We need to place a large order for various medications. Please contact us for pricing.',
      timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
      status: 'read'
    }
  ];
  res.json(mockMessages);
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

