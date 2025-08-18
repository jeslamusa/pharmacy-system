# Samiclyn Pharmaceutical Dashboard

A modern, responsive admin dashboard for pharmaceutical inventory management built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Core Functionality
- **Authentication System** - Secure login with session management
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Animated Transitions** - Smooth page transitions and hover effects
- **Real-time Data** - Mock data with realistic pharmaceutical information

### Dashboard Pages
- **Dashboard** - Overview with statistics, recent orders, and low stock alerts
- **Products** - Complete inventory management with search and filtering
- **Orders** - Order tracking and management system
- **Customers** - Customer database with detailed profiles
- **Reports** - Analytics with Chart.js integration
- **Settings** - User profile and system configuration

### UI/UX Features
- **Modern Design** - Clean, professional pharmaceutical theme
- **Interactive Elements** - Hover effects, animations, and smooth transitions
- **Data Tables** - Sortable, searchable tables with pagination
- **Status Indicators** - Color-coded status badges for products and orders
- **Charts & Analytics** - Visual data representation with Chart.js

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Chart.js** - Data visualization
- **Vite** - Fast build tool

## 📦 Installation

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🔐 Login Credentials

For demo purposes, you can use any email/password combination. The system will automatically log you in.

**Demo Credentials:**
- Email: `admin@samiclyn.co.ug`
- Password: `password123`

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- **Desktop** (1024px+) - Full sidebar navigation
- **Tablet** (768px - 1023px) - Collapsible sidebar
- **Mobile** (320px - 767px) - Mobile-first design

## 🎨 Design System

### Color Palette
- **Primary Blue** - `#0ea5e9` (Brand color)
- **Success Green** - `#22c55e` (Positive actions)
- **Warning Orange** - `#f59e0b` (Warnings)
- **Danger Red** - `#ef4444` (Errors/Delete)

### Typography
- **Headings** - Inter font family
- **Body Text** - System font stack
- **Monospace** - For data and code

## 📊 Data Structure

### Products
- Name, category, description
- Price, stock levels, supplier
- Expiry dates, status tracking

### Orders
- Customer information
- Product details and quantities
- Order status and payment tracking

### Customers
- Contact information
- Customer type (Hospital, Clinic, Pharmacy, Individual)
- Order history and spending

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update the navigation in `src/components/Sidebar.tsx`

### Styling
- All styles use Tailwind CSS classes
- Custom colors defined in `tailwind.config.js`
- Component-specific styles in `src/index.css`

### Animations
- Page transitions handled by Framer Motion
- Hover effects and micro-interactions
- Loading states and feedback

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── Topbar.tsx      # Top navigation bar
│   └── StatCard.tsx    # Dashboard statistics cards
├── pages/              # Page components
│   ├── Login.tsx       # Authentication page
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Products.tsx    # Product management
│   ├── Orders.tsx      # Order management
│   ├── Customers.tsx   # Customer management
│   ├── Reports.tsx     # Analytics and charts
│   └── Settings.tsx    # User settings
├── data/               # Mock data
│   └── mockData.ts     # Sample data for demo
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── utils/              # Utility functions
│   └── cn.ts           # Class name utility
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎯 Key Features

### Dashboard
- Animated statistics cards
- Recent orders overview
- Low stock alerts
- Quick action buttons

### Products Management
- Search and filter functionality
- Category-based filtering
- Stock level indicators
- Status tracking

### Orders Management
- Order status tracking
- Payment status indicators
- Customer information display
- Order history

### Customer Management
- Customer type categorization
- Contact information
- Order history
- Spending analytics

### Reports & Analytics
- Sales trend charts
- Top products analysis
- Customer distribution
- Revenue analytics

### Settings
- Profile management
- Security settings
- Notification preferences
- Theme customization

## 🔄 State Management

Currently using React's built-in state management:
- `useState` for local component state
- `useEffect` for side effects
- Local storage for authentication

For larger applications, consider adding:
- Redux Toolkit
- React Query
- Zustand

## 🧪 Testing

To add testing to the project:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

## 📈 Performance

- **Code Splitting** - Automatic with React Router
- **Lazy Loading** - Images and heavy components
- **Optimized Builds** - Vite for fast development and builds
- **Tree Shaking** - Unused code elimination

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for Samiclyn Pharmaceutical Distributors (U) Ltd**





