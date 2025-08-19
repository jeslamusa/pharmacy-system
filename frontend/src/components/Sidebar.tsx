import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react'

interface SidebarProps {
  onClose?: () => void
  onLogout?: () => void
}

const navItems = [
  { label: 'Products', icon: Package, to: '/products' },
  { label: 'Orders', icon: ShoppingCart, to: '/orders' },
  { label: 'Customers', icon: Users, to: '/customers' },
  { label: 'Reports', icon: BarChart3, to: '/reports' },
  { label: 'Settings', icon: Settings, to: '/settings' },
]

export default function Sidebar({ onClose, onLogout }: SidebarProps) {
  const location = useLocation()

  const isActive = (path: string) => location.pathname.startsWith(path)

  return (
    <aside className="h-full flex flex-col">
      <div className="h-16 flex items-center px-4 border-b">
        <div className="w-9 h-9 rounded-lg bg-primary-600 text-white flex items-center justify-center font-bold mr-2">
          S
        </div>
        <div>
          <p className="font-semibold text-gray-900 leading-tight">Pharmaceutical Management System</p>
          <p className="text-xs text-gray-500">Pharma Admin</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="px-2 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.to)
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? 'bg-primary-50 text-primary-700 border border-primary-200'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon size={18} className={active ? 'text-primary-700' : 'text-gray-400'} />
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-3 border-t">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-danger-700 bg-danger-50 hover:bg-danger-100"
        >
          <LogOut size={18} />
          Sign out
        </motion.button>
      </div>
    </aside>
  )
}


