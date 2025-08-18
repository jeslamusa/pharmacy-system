import React from 'react'
import { motion } from 'framer-motion'
import { 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Activity,
  Eye,
  Clock,
  LogOut
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { mockProducts, mockOrders, mockCustomers } from '../data/mockData'

export default function ManagerDashboard() {
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
  const processingOrders = mockOrders.filter(o => o.status === 'processing').length

  const quickActions = [
    {
      title: 'View Products',
      description: 'Monitor inventory and stock levels',
      icon: Package,
      color: 'bg-blue-500',
      link: '/dashboard/products'
    },
    {
      title: 'Manage Orders',
      description: 'Track and update order status',
      icon: ShoppingCart,
      color: 'bg-green-500',
      link: '/orders'
    },
    {
      title: 'Customer Database',
      description: 'View customer information and activity',
      icon: Users,
      color: 'bg-purple-500',
      link: '/customers'
    },
    {
      title: 'Analytics',
      description: 'Access performance reports',
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
      title: 'Pending Orders',
      value: pendingOrders,
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Processing Orders',
      value: processingOrders,
      icon: ShoppingCart,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Low Stock Items',
      value: lowStockProducts,
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50">
      <div className="space-y-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mx-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Manager Dashboard</h1>
              <p className="text-gray-600">Operational oversight and management</p>
            </div>
            <div className="mt-4 lg:mt-0 flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg">
                <Activity size={20} className="text-green-600" />
                <span className="text-green-800 font-medium">Manager Access</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className={`${stat.bgColor} border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <Icon size={24} className={stat.color} />
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
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mx-6"
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
                    className={`${action.color} p-4 rounded-2xl text-white hover:shadow-xl transition-all duration-300 block shadow-md`}
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

        {/* Operational Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-6"
        >
          {/* Order Status Overview */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Status Overview</h2>
            <div className="space-y-4">
              {[
                { status: 'Pending', count: pendingOrders, color: 'bg-yellow-100 text-yellow-800' },
                { status: 'Processing', count: processingOrders, color: 'bg-blue-100 text-blue-800' },
                { status: 'Shipped', count: mockOrders.filter(o => o.status === 'shipped').length, color: 'bg-purple-100 text-purple-800' },
                { status: 'Delivered', count: mockOrders.filter(o => o.status === 'delivered').length, color: 'bg-green-100 text-green-800' }
              ].map((item) => (
                <div key={item.status} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${item.color.replace('bg-', 'bg-').replace(' text-', '')}`}></div>
                    <span className="font-medium text-gray-900">{item.status}</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory Alerts */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Inventory Alerts</h2>
            <div className="space-y-3">
              {mockProducts.filter(p => p.stock < 15).slice(0, 5).map((product) => (
                <div key={product.id} className={`flex items-center justify-between p-3 rounded-xl ${
                  product.stock < 5 ? 'bg-red-50 border border-red-200' : 'bg-yellow-50 border border-yellow-200'
                }`}>
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${product.stock < 5 ? 'text-red-600' : 'text-yellow-600'}`}>
                      {product.stock} units
                    </p>
                    <p className="text-xs text-gray-600">
                      {product.stock < 5 ? 'Critical' : 'Low'} stock
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mx-6 mb-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <TrendingUp size={32} className="text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{totalOrders}</p>
              <p className="text-sm text-gray-600">Total Orders</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <DollarSign size={32} className="text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">
                UGX {mockOrders.reduce((sum, order) => sum + order.totalAmount, 0).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Total Revenue</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <Users size={32} className="text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{totalCustomers}</p>
              <p className="text-sm text-gray-600">Active Customers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
