import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen relative bg-secondary-50">
      <div className="relative h-[50vh] min-h-[360px]">
        <img
          src="https://images.unsplash.com/photo-1581594693700-91e3f21b5996?q=80&w=1600&auto=format&fit=crop"
          alt="Pharmacy shelves"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1f2a57]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-6xl font-extrabold tracking-wider">404</h1>
            <p className="mt-4 text-xl opacity-95">The page you’re looking for is missing.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-secondary-700"
        >
          It might have been moved, deleted, or the URL is incorrect.
        </motion.p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link to="/" className="px-6 py-3 rounded-lg bg-[#1f2a57] text-white font-bold hover:bg-[#172046] transition-colors">Go Home</Link>
          <Link to="/contact" className="px-6 py-3 rounded-lg border border-[#1f2a57] text-[#1f2a57] font-bold hover:bg-[#1f2a57] hover:text-white transition-colors">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}








