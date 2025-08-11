import React from 'react'
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
  LogOut
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { mockProducts, mockOrders, mockCustomers } from '../data/mockData'

export default function AdminDashboard() {
  const navigate = useNavigate()
  
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

  const quickActions = [
    {
      title: 'Add New Product',
      description: 'Add pharmaceutical products to inventory',
      icon: Package,
      color: 'bg-blue-500',
      link: '/dashboard/products'
    },
    {
      title: 'Create Order',
      description: 'Process new customer orders',
      icon: ShoppingCart,
      color: 'bg-green-500',
      link: '/orders'
    },
    {
      title: 'Add Customer',
      description: 'Register new customers',
      icon: Users,
      color: 'bg-purple-500',
      link: '/customers'
    },
    {
      title: 'View Reports',
      description: 'Access analytics and reports',
      icon: BarChart3,
      color: 'bg-orange-500',
      link: '/reports'
    }
  ]

  const stats = [
    {
      title: 'Total Products',
      value: totalProducts,
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Total Orders',
      value: totalOrders,
      icon: ShoppingCart,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Total Customers',
      value: totalCustomers,
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Low Stock Alerts',
      value: lowStockProducts,
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ]

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Content */}
      <div className="relative z-10 min-h-screen w-full pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between p-6"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Administrator Dashboard</h1>
            <p className="text-gray-600 mt-2">Full system control and management</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
              <Activity size={20} className="text-blue-600" />
              <span className="text-blue-800 font-medium">Administrator Access</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className={`${stat.bgColor} p-6 rounded-lg border border-gray-200 shadow-lg`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <Icon size={24} className={stat.color} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg border border-gray-200 p-6 shadow-lg mx-6 mt-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <motion.div
                  key={action.title}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={action.link}
                    className={`${action.color} p-4 rounded-lg text-white hover:opacity-90 transition-opacity block shadow-md`}
                  >
                    <Icon size={24} className="mb-2" />
                    <h3 className="font-semibold mb-1">{action.title}</h3>
                    <p className="text-sm opacity-90">{action.description}</p>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 mt-6"
        >
          {/* Recent Orders */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Orders</h2>
            <div className="space-y-3">
              {mockOrders.slice(0, 5).map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">#{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customerName}</p>
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
                </div>
              ))}
            </div>
          </div>

          {/* Low Stock Alerts */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Low Stock Alerts</h2>
            <div className="space-y-3">
              {mockProducts.filter(p => p.stock < 10).slice(0, 5).map((product) => (
                <div key={product.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-600">{product.stock} units</p>
                    <p className="text-xs text-gray-600">Low stock</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}