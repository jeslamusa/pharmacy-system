import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Bell, User, Search, ShieldCheck, LogOut, Settings, ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface TopbarProps {
  onMenuClick: () => void
  onLogout: () => void
}

export default function Topbar({ onMenuClick, onLogout }: TopbarProps) {
  const role = localStorage.getItem('userRole') || 'admin'
  const [searchQuery, setSearchQuery] = useState('')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
  }

  const getUserDisplayName = () => {
    switch (role) {
      case 'admin': return 'Administrator'
      case 'manager': return 'Manager'
      case 'supervisor': return 'Supervisor'
      default: return 'User'
    }
  }

  const getUserInitials = () => {
    switch (role) {
      case 'admin': return 'AD'
      case 'manager': return 'MG'
      case 'supervisor': return 'SP'
      default: return 'US'
    }
  }

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-30">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
          >
            <Menu size={20} />
          </button>
          
          {/* Enhanced Search bar */}
          <div className="hidden md:flex items-center space-x-2 bg-gray-50 rounded-xl px-4 py-2 flex-1 max-w-md border border-gray-200 focus-within:border-blue-500 focus-within:bg-white transition-all duration-200">
            <Search size={16} className="text-gray-400" />
            <form onSubmit={handleSearch} className="flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, orders, customers..."
                className="bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
              />
            </form>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search Toggle */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
          >
            <Search size={20} />
          </button>

          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </motion.button>

          {/* Enhanced User Profile */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                {getUserInitials()}
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-sm font-semibold text-gray-900">{getUserDisplayName()}</p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <ShieldCheck size={12} /> 
                  {role.charAt(0).toUpperCase() + role.slice(1)} Access
                </p>
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </motion.button>

            {/* User Dropdown Menu */}
            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                >
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">{getUserDisplayName()}</p>
                    <p className="text-xs text-gray-500">{role}@samiclyn.co.ug</p>
                  </div>
                  
                  <div className="py-1">
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                      <User size={16} />
                      <span>Profile Settings</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                      <Settings size={16} />
                      <span>System Settings</span>
                    </button>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-1">
                    <button
                      onClick={onLogout}
                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                    >
                      <LogOut size={16} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-6 pb-4"
          >
            <form onSubmit={handleSearch} className="flex items-center space-x-2 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
              <Search size={16} className="text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 flex-1"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ×
                </button>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

