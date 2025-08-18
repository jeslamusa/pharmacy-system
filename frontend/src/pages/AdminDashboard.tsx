import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings, 
  Plus,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Activity,
  LogOut,
  Eye,
  Calendar,
  Clock,
  Star,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { mockProducts, mockOrders, mockCustomers } from '../data/mockData'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [currentTime, setCurrentTime] = useState(new Date())
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userRole')
    navigate('/')
  }

  const totalProducts = mockProducts.length
  const totalOrders = mockOrders.length
  const totalCustomers = mockCustomers.length
  const lowStockProducts = mockProducts.filter(p => p.stock < 10).length
  const pendingOrders = mockOrders.filter(o => o.status === 'pending').length
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.totalAmount, 0)

  const quickActions = [
    {
      title: 'Add New Product',
      description: 'Add pharmaceutical products to inventory',
      icon: Package,
      color: 'from-blue-500 to-blue-600',
      link: '/products'
    },
    {
      title: 'Create Order',
      description: 'Process new customer orders',
      icon: ShoppingCart,
      color: 'from-green-500 to-green-600',
      link: '/orders'
    },
    {
      title: 'Add Customer',
      description: 'Register new customers',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      link: '/customers'
    },
    {
      title: 'View Reports',
      description: 'Access analytics and reports',
      icon: BarChart3,
      color: 'from-orange-500 to-orange-600',
      link: '/reports'
    }
  ]

  const stats = [
    {
      title: 'Total Products',
      value: totalProducts,
      change: '+12%',
      changeType: 'increase',
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Total Orders',
      value: totalOrders,
      change: '+8%',
      changeType: 'increase',
      icon: ShoppingCart,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Total Customers',
      value: totalCustomers,
      change: '+15%',
      changeType: 'increase',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Total Revenue',
      value: `UGX ${totalRevenue.toLocaleString()}`,
      change: '+23%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    }
  ]

  const alerts = [
    {
      title: 'Low Stock Alerts',
      value: lowStockProducts,
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      title: 'Pending Orders',
      value: pendingOrders,
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="p-6 space-y-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Administrator</h1>
              <p className="text-gray-600">Here's what's happening with your pharmacy system today</p>
            </div>
            <div className="mt-4 lg:mt-0 flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Current Time</p>
                <p className="text-lg font-semibold text-gray-900">
                  {currentTime.toLocaleTimeString()}
                </p>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Date</p>
                <p className="text-lg font-semibold text-gray-900">
                  {currentTime.toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className={`${stat.bgColor} ${stat.borderColor} border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <Icon size={24} className={stat.color} />
                  </div>
                  <div className="flex items-center space-x-1">
                    {stat.changeType === 'increase' ? (
                      <ArrowUpRight size={16} className="text-green-600" />
                    ) : (
                      <ArrowDownRight size={16} className="text-red-600" />
                    )}
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Alerts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {alerts.map((alert, index) => {
            const Icon = alert.icon
            return (
              <motion.div
                key={alert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`${alert.bgColor} ${alert.borderColor} border rounded-2xl p-6 shadow-lg`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${alert.bgColor}`}>
                    <Icon size={24} className={alert.color} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">{alert.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{alert.value}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Star size={16} />
              <span>Frequently Used</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <motion.div
                  key={action.title}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    to={action.link}
                    className={`bg-gradient-to-r ${action.color} p-6 rounded-2xl text-white hover:shadow-xl transition-all duration-300 block h-full`}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon size={24} />
                      <h3 className="font-semibold">{action.title}</h3>
                    </div>
                    <p className="text-sm opacity-90">{action.description}</p>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Recent Activity Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Recent Orders */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
              <Link to="/orders" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {mockOrders.slice(0, 5).map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <ShoppingCart size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">#{order.id}</p>
                      <p className="text-sm text-gray-600">{order.customerName}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">UGX {order.totalAmount.toLocaleString()}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Low Stock Alerts */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Low Stock Alerts</h2>
              <Link to="/products" className="text-red-600 hover:text-red-700 text-sm font-medium">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {mockProducts.filter(p => p.stock < 10).slice(0, 5).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle size={16} className="text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-600">{product.stock} units</p>
                    <p className="text-xs text-gray-600">Low stock</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}