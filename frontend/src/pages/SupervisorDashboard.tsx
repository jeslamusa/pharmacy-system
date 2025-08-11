import React from 'react'
import { motion } from 'framer-motion'
import { 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Eye,
  AlertTriangle,
  Activity,
  Monitor,
  Clock,
  TrendingUp,
  LogOut
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { mockProducts, mockOrders, mockCustomers } from '../data/mockData'

export default function SupervisorDashboard() {
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
      title: 'Monitor Products',
      description: 'View inventory and stock levels',
      icon: Package,
      color: 'bg-blue-500',
      link: '/dashboard/products'
    },
    {
      title: 'Track Orders',
      description: 'Monitor order status and progress',
      icon: ShoppingCart,
      color: 'bg-green-500',
      link: '/orders'
    },
    {
      title: 'View Customers',
      description: 'Access customer information',
      icon: Users,
      color: 'bg-purple-500',
      link: '/customers'
    },
    {
      title: 'Basic Reports',
      description: 'View system activity reports',
      icon: BarChart3,
      color: 'bg-orange-500',
      link: '/reports'
    }
  ]

  const stats = [
    {
      title: 'Products in Stock',
      value: totalProducts,
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Orders to Monitor',
      value: totalOrders,
      icon: ShoppingCart,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Active Customers',
      value: totalCustomers,
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Stock Alerts',
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
            <h1 className="text-3xl font-bold text-gray-900">Supervisor Dashboard</h1>
            <p className="text-gray-600 mt-2">Monitoring and oversight activities</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-lg">
              <Monitor size={20} className="text-purple-600" />
              <span className="text-purple-800 font-medium">Supervisor Access</span>
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

        {/* Monitoring Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 mt-6"
        >
          {/* System Activity */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">System Activity</h2>
            <div className="space-y-4">
              {[
                { activity: 'Products Available', count: totalProducts, icon: Package, color: 'text-blue-600' },
                { activity: 'Orders in System', count: totalOrders, icon: ShoppingCart, color: 'text-green-600' },
                { activity: 'Registered Customers', count: totalCustomers, icon: Users, color: 'text-purple-600' },
                { activity: 'Pending Actions', count: pendingOrders, icon: Clock, color: 'text-yellow-600' }
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.activity} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon size={20} className={item.color} />
                      <span className="font-medium text-gray-900">{item.activity}</span>
                    </div>
                    <span className="text-lg font-bold text-gray-900">{item.count}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Stock Monitoring */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Stock Monitoring</h2>
            <div className="space-y-3">
              {mockProducts.filter(p => p.stock < 20).slice(0, 5).map((product) => (
                <div key={product.id} className={`flex items-center justify-between p-3 rounded-lg ${
                  product.stock < 5 ? 'bg-red-50 border border-red-200' : 
                  product.stock < 10 ? 'bg-yellow-50 border border-yellow-200' : 
                  'bg-blue-50 border border-blue-200'
                }`}>
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${
                      product.stock < 5 ? 'text-red-600' : 
                      product.stock < 10 ? 'text-yellow-600' : 'text-blue-600'
                    }`}>
                      {product.stock} units
                    </p>
                    <p className="text-xs text-gray-600">
                      {product.stock < 5 ? 'Critical' : 
                       product.stock < 10 ? 'Low' : 'Monitor'} stock
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Activity Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg border border-gray-200 p-6 shadow-lg mx-6 mt-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Activity Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Eye size={32} className="text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{totalProducts}</p>
              <p className="text-sm text-gray-600">Products Monitored</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Activity size={32} className="text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{totalOrders}</p>
              <p className="text-sm text-gray-600">Orders Tracked</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <TrendingUp size={32} className="text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{totalCustomers}</p>
              <p className="text-sm text-gray-600">Customers Monitored</p>
            </div>
          </div>
        </motion.div>

        {/* Recent Activity Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg border border-gray-200 p-6 shadow-lg mx-6 mt-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[
              { action: 'New order received', details: 'Order #ORD-001 from Kampala Hospital', time: '2 hours ago' },
              { action: 'Stock updated', details: 'Paracetamol stock reduced to 15 units', time: '4 hours ago' },
              { action: 'Customer registered', details: 'New customer: Mulago Clinic', time: '6 hours ago' },
              { action: 'Order delivered', details: 'Order #ORD-098 delivered to Nakasero Pharmacy', time: '8 hours ago' },
              { action: 'Low stock alert', details: 'Amoxicillin stock below threshold', time: '10 hours ago' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.details}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
