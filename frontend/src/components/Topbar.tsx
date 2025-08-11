import { motion } from 'framer-motion'
import { Menu, Bell, User, Search, ShieldCheck } from 'lucide-react'

interface TopbarProps {
  onMenuClick: () => void
  onLogout: () => void
}

export default function Topbar({ onMenuClick, onLogout }: TopbarProps) {
  const role = localStorage.getItem('userRole') || 'admin'
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <Menu size={20} />
          </button>
          
          {/* Search bar */}
          <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2 flex-1 max-w-md">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search products, orders, customers..."
              className="bg-transparent border-none outline-none text-sm text-gray-600 placeholder-gray-400 flex-1"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-danger-500 rounded-full"></span>
          </motion.button>

          {/* User menu */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-gray-900">
                {role === 'admin' ? 'Administrator' : 
                 role === 'manager' ? 'Manager' : 
                 role === 'supervisor' ? 'Supervisor' : 'User'}
              </p>
              <p className="text-xs text-gray-500 flex items-center gap-1 justify-end">
                <ShieldCheck size={12} /> 
                {role === 'admin' ? 'Administrator' : 
                 role === 'manager' ? 'Manager' : 
                 role === 'supervisor' ? 'Supervisor' : 'User'}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white"
            >
              <User size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  )
}

