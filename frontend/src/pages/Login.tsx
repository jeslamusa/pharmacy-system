import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  // Default credentials for testing - Special Personnel Only
  const validCredentials = {
    admin: 'admin123',
    manager: 'manager123',
    supervisor: 'supervisor123'
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      // Simulate API call delay
      await new Promise((r) => setTimeout(r, 800))
      
      // Check credentials
      const { username, password } = form
      if (validCredentials[username as keyof typeof validCredentials] === password) {
        // Store login state (in a real app, you'd store a JWT token)
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('userRole', username)
        
        // Redirect to role-specific dashboard
        switch (username) {
          case 'admin':
            navigate('/dashboard/admin')
            break
          case 'manager':
            navigate('/dashboard/manager')
            break
          case 'supervisor':
            navigate('/dashboard/supervisor')
            break
          default:
            navigate('/dashboard/admin')
        }
      } else {
        setError('Invalid username or password')
      }
    } catch (err) {
      setError('Login failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-50 px-4">
      <div className="w-full max-w-md bg-white border rounded-xl shadow-sm p-6">
                 <div className="mb-6 text-center">
           <h1 className="text-2xl font-extrabold text-[#1f2a57]">Special Personnel Login</h1>
           <p className="mt-1 text-sm text-secondary-600">For authorized staff and administrators only</p>
         </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-600 text-sm font-medium">{error}</p>
            </div>
          )}
          
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-secondary-800">Username</label>
            <input
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              autoComplete="username"
              className="mt-1 input h-11 border-2 border-[#1f2a57] w-full rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-secondary-800">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
              className="mt-1 input h-11 border-2 border-[#1f2a57] w-full rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#1f2a57] hover:bg-[#172046] disabled:opacity-70 text-white font-bold py-3 rounded-lg transition-colors"
          >
            {isSubmitting ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <Link to="/" className="text-[#1f2a57] hover:underline">Back to Home</Link>
        </div>
        
                 {/* Test Credentials Info - Remove in production */}
         <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
           <h3 className="text-sm font-semibold text-blue-800 mb-2">Special Personnel Credentials:</h3>
           <div className="text-xs text-blue-700 space-y-1">
             <p><strong>Administrator:</strong> admin / admin123</p>
             <p><strong>Manager:</strong> manager / manager123</p>
             <p><strong>Supervisor:</strong> supervisor / supervisor123</p>
           </div>
         </div>
      </div>
    </div>
  )
}


