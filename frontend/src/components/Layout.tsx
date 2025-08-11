import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  // default to admin role for full access in demo
  if (!localStorage.getItem('userRole')) {
    localStorage.setItem('userRole', 'admin')
  }
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    // Clear login state and redirect to home
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userRole')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        transition={{ type: 'spring', damping: 20 }}
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} onLogout={handleLogout} />
      </motion.div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Topbar */}
        <Topbar onMenuClick={() => setSidebarOpen(true)} onLogout={handleLogout} />

        {/* Page content */}
        <main className={location.pathname.includes('/dashboard/') && !location.pathname.includes('/dashboard/products') ? '' : 'p-6'}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={location.pathname.includes('/dashboard/') && !location.pathname.includes('/dashboard/products') ? '' : 'min-h-[calc(100vh-120px)]'}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

