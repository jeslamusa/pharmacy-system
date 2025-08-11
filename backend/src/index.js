const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
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

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Pharmacy Management System API is running',
    timestamp: new Date().toISOString()
  });
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
      description: 'Effective pain relief medication'
    },
    {
      id: 2,
      name: 'Amoxicillin 250mg',
      category: 'Antibiotics',
      price: 8000,
      stock: 75,
      description: 'Broad-spectrum antibiotic'
    },
    {
      id: 3,
      name: 'Ibuprofen 400mg',
      category: 'Pain Relief',
      price: 6000,
      stock: 200,
      description: 'Anti-inflammatory pain reliever'
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
