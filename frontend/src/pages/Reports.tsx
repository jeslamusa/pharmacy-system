import { motion } from 'framer-motion'
import { 
  BarChart3, 
  TrendingUp, 
  Download,
  Calendar,
  DollarSign,
  Package,
  Users
} from 'lucide-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
} from 'chart.js'
import { Bar, Line, Doughnut } from 'react-chartjs-2'
import { mockOrders, mockProducts, mockCustomers } from '../data/mockData'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
)

export default function Reports() {
  // Sales data for the last 6 months
  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales (UGX)',
        data: [45000, 52000, 48000, 61000, 55000, 68000],
        backgroundColor: 'rgba(14, 165, 233, 0.8)',
        borderColor: 'rgba(14, 165, 233, 1)',
        borderWidth: 2,
      },
    ],
  }

  // Top products data
  const topProductsData = {
    labels: mockProducts.slice(0, 5).map(p => p.name.split(' ')[0] + '...'),
    datasets: [
      {
        label: 'Units Sold',
        data: [120, 95, 88, 76, 65],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(139, 92, 246, 0.8)',
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(139, 92, 246, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  // Customer types distribution
  const customerTypesData = {
    labels: ['Hospitals', 'Clinics', 'Pharmacies', 'Individuals'],
    datasets: [
      {
        data: [35, 25, 30, 10],
        backgroundColor: [
          'rgba(14, 165, 233, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(156, 163, 175, 0.8)',
        ],
        borderColor: [
          'rgba(14, 165, 233, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(156, 163, 175, 1)',
        ],
        borderWidth: 2,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  }

  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.totalAmount, 0)
  const totalOrders = mockOrders.length
  const totalCustomers = mockCustomers.length
  const totalProducts = mockProducts.length

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-2">Comprehensive insights into your pharmaceutical business</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Download size={20} className="mr-2" />
          Export Report
        </motion.button>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          {
            title: 'Total Revenue',
            value: `UGX ${totalRevenue.toLocaleString()}`,
            icon: DollarSign,
            color: 'primary',
            change: '+12.5%',
            changeType: 'increase'
          },
          {
            title: 'Total Orders',
            value: totalOrders,
            icon: ShoppingCart,
            color: 'success',
            change: '+8.2%',
            changeType: 'increase'
          },
          {
            title: 'Active Customers',
            value: totalCustomers,
            icon: Users,
            color: 'warning',
            change: '+5.1%',
            changeType: 'increase'
          },
          {
            title: 'Products',
            value: totalProducts,
            icon: Package,
            color: 'danger',
            change: '+15.3%',
            changeType: 'increase'
          }
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <div className="flex items-center space-x-1">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-success-600' : 'text-danger-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500">from last month</span>
                </div>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${stat.color}-50`}>
                <stat.icon size={24} className={`text-${stat.color}-600`} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trend */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Sales Trend</h3>
            <TrendingUp size={20} className="text-primary-600" />
          </div>
          <div className="h-64">
            <Line data={salesData} options={chartOptions} />
          </div>
        </motion.div>

        {/* Top Products */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
            <Package size={20} className="text-success-600" />
          </div>
          <div className="h-64">
            <Bar data={topProductsData} options={chartOptions} />
          </div>
        </motion.div>
      </div>

      {/* Customer Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Customer Distribution</h3>
          <Users size={20} className="text-warning-600" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-64">
            <Doughnut data={customerTypesData} options={chartOptions} />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
              <span className="text-sm font-medium text-primary-800">Hospitals</span>
              <span className="text-sm font-bold text-primary-900">35%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-success-50 rounded-lg">
              <span className="text-sm font-medium text-success-800">Clinics</span>
              <span className="text-sm font-bold text-success-900">25%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-warning-50 rounded-lg">
              <span className="text-sm font-medium text-warning-800">Pharmacies</span>
              <span className="text-sm font-bold text-warning-900">30%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-800">Individuals</span>
              <span className="text-sm font-bold text-gray-900">10%</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <Calendar size={20} className="text-primary-600" />
        </div>
        <div className="space-y-4">
          {mockOrders.slice(0, 5).map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-900">{order.customerName}</p>
                <p className="text-sm text-gray-500">Order #{order.id}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">UGX {order.totalAmount.toLocaleString()}</p>
                <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                  order.status === 'delivered' ? 'bg-success-100 text-success-800' :
                  order.status === 'processing' ? 'bg-warning-100 text-warning-800' :
                  'bg-primary-100 text-primary-800'
                }`}>
                  {order.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}




