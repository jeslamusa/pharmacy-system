import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Package, ShoppingCart, Users, DollarSign } from 'lucide-react'
import { StatCard as StatCardType } from '../types'

interface StatCardProps {
  stat: StatCardType
  index: number
}

const iconMap = {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
}

export default function StatCard({ stat, index }: StatCardProps) {
  const Icon = iconMap[stat.icon as keyof typeof iconMap] || Package

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-50 border-primary-200 text-primary-700'
      case 'success':
        return 'bg-success-50 border-success-200 text-success-700'
      case 'warning':
        return 'bg-warning-50 border-warning-200 text-warning-700'
      case 'danger':
        return 'bg-danger-50 border-danger-200 text-danger-700'
      default:
        return 'bg-primary-50 border-primary-200 text-primary-700'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
          <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
          <div className="flex items-center space-x-1">
            {stat.changeType === 'increase' ? (
              <TrendingUp size={16} className="text-success-600" />
            ) : (
              <TrendingDown size={16} className="text-danger-600" />
            )}
            <span
              className={`text-sm font-medium ${
                stat.changeType === 'increase' ? 'text-success-600' : 'text-danger-600'
              }`}
            >
              {stat.change}%
            </span>
            <span className="text-sm text-gray-500">from last month</span>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(stat.color)}`}
        >
          <Icon size={24} />
        </motion.div>
      </div>
    </motion.div>
  )
}




