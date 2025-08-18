# Pharmacy Management System

A comprehensive pharmacy management system built with React, Node.js, and Express. This system provides role-based access control for administrators, managers, and supervisors to manage pharmaceutical products, orders, and customers.

## Features

### 🔐 Role-Based Access Control
- **Administrator**: Full system control and management
- **Manager**: Operational oversight and management  
- **Supervisor**: Monitoring and oversight activities

### 📊 Dashboard Features
- Real-time statistics and metrics
- Quick action buttons for common tasks
- Recent orders and activity tracking
- Low stock alerts and inventory monitoring
- Performance metrics and analytics

### 🛍️ Core Functionality
- Product inventory management
- Order processing and tracking
- Customer database management
- Stock level monitoring
- Sales analytics and reporting

## Technology Stack

### Frontend
- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe backend
- **MongoDB** - Database (planned)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jeslamusa/pharmacy-system.git
   cd pharmacy-system
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Start the development servers**

   **Frontend:**
   ```bash
   cd frontend
   npm start
   ```

   **Backend:**
   ```bash
   cd backend
   npm run dev
   ```

### Default Login Credentials

| Role | Username | Password |
|------|----------|----------|
| Administrator | admin | admin123 |
| Manager | manager | manager123 |
| Supervisor | supervisor | supervisor123 |

## Project Structure

```
pharmacy-system/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── data/           # Mock data and types
│   │   └── App.tsx         # Main application component
│   ├── public/             # Static assets
│   └── package.json
├── backend/                 # Node.js backend API
│   ├── src/
│   ├── package.json
│   └── README.md
└── README.md               # This file
```

## Features by Role

### 👨‍💼 Administrator
- Full product management (add, edit, delete)
- Complete order oversight
- Customer database management
- System-wide analytics and reports
- User management and permissions

### 👨‍💻 Manager
- Product inventory monitoring
- Order status management
- Customer information access
- Performance metrics tracking
- Operational reports

### 👁️ Supervisor
- Product stock monitoring
- Order tracking and status updates
- Customer activity monitoring
- Basic reporting access
- System activity overview

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Jeslamusa - [@jeslamusa](https://github.com/jeslamusa)

Project Link: [https://github.com/jeslamusa/pharmacy-system](https://github.com/jeslamusa/pharmacy-system)


