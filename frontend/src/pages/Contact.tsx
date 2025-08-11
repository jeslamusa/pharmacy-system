import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { galleryImages, galleryFallback } from '../data/gallery'
import {
  Home as HomeIcon,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  PhoneCall,
  Navigation,
} from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', contact: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact message:', form)
    setStatus('success')
    setForm({ name: '', email: '', subject: '', contact: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white text-secondary-900">
      {/* Top info bar */}
      <div className="bg-[#1f2a57] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <HomeIcon size={14} className="opacity-80" />
            <span>Along Old Butabika Road, Butabika Zone, Mutungo Parish, Nakawa Division, Kampala</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} className="opacity-80" />
              <span>+256 776 780 035 / +256 776 780 036</span>
            </div>
            <div className="hidden md:flex items-center gap-3 opacity-90">
              <Facebook size={16} />
              <Twitter size={16} />
              <Instagram size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-white sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary-600 text-white flex items-center justify-center text-xl font-bold">S</div>
            <div className="leading-tight">
              <p className="font-semibold text-lg">Samiclyn Pharmaceutical Distributors (U) Ltd</p>
              <p className="text-xs text-secondary-500">Kampala, Uganda | Established 2025</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2 text-sm font-semibold">
            <Link to="/" className="px-4 py-2 rounded-md uppercase tracking-wide text-secondary-700 hover:text-primary-700">HOME</Link>
            <a href="#about" className="px-4 py-2 rounded-md uppercase tracking-wide text-secondary-700 hover:text-primary-700">ABOUT US</a>
            <Link to="/products" className="px-4 py-2 rounded-md uppercase tracking-wide text-secondary-700 hover:text-primary-700">PRODUCTS</Link>
            <a href="#services" className="px-4 py-2 rounded-md uppercase tracking-wide text-secondary-700 hover:text-primary-700">SERVICES</a>
            <Link to="/contact" className="px-4 py-2 rounded-md uppercase tracking-wide bg-[#1f2a57] text-white">CONTACT US</Link>
          </nav>
        </div>
      </header>

      {/* Hero banner */}
      <section className="relative overflow-hidden">
        <div className="relative h-[40vh] min-h-[320px]">
          {(galleryImages.length ? galleryImages : galleryFallback).slice(0,3).map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt="contact-hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: i === 0 ? 1 : 0.0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
          <div className="absolute inset-0 bg-[#1f2a57]/90" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl font-extrabold tracking-wider uppercase">CONTACT US</h1>
              <p className="mt-6 max-w-3xl text-lg opacity-95">Need an expert? you are welcome to leave your contact info and we will be in touch shortly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact tiles */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[{
            title: 'VISIT US',
            icon: <HomeIcon size={56} className="text-danger-500 mx-auto" />,
            body: 'Along Old Butabika Road, Butabika Zone, Mutungo Parish, Nakawa Division, Kampala District\nP.O. Box 192709, Kampala, Uganda'
          },{
            title: 'CALL US',
            icon: <Phone size={56} className="text-danger-500 mx-auto" />,
            body: '+256 776 780 035\n+256 776 780 036'
          },{
            title: 'EMAIL US',
            icon: <Mail size={56} className="text-danger-500 mx-auto" />,
            body: 'info@samiclyn.co.ug\nsales@samiclyn.co.ug\nsamiclynpharma@gmail.com'
          }].map((t) => (
            <div key={t.title} className="p-6 rounded-lg bg-white border shadow-sm">
              {t.icon}
              <h3 className="mt-4 text-3xl font-extrabold text-[#1f2a57]">{t.title}</h3>
              <p className="mt-3 whitespace-pre-line text-secondary-600">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-extrabold text-[#1f2a57] mb-6">PLEASE LEAVE YOUR CONTACT INFORMATION</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-semibold text-[#1f2a57]">NAME *</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name / Company Name" className="mt-2 input h-12 border-2 border-[#1f2a57]" required />
              </div>
              <div>
                <label className="block font-semibold text-[#1f2a57]">EMAIL *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="mt-2 input h-12 border-2 border-[#1f2a57]" required />
              </div>
              <div>
                <label className="block font-semibold text-[#1f2a57]">SUBJECT *</label>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="mt-2 input h-12 border-2 border-[#1f2a57]" required />
              </div>
              <div>
                <label className="block font-semibold text-[#1f2a57]">CONTACT *</label>
                <input name="contact" value={form.contact} onChange={handleChange} placeholder="Contact" className="mt-2 input h-12 border-2 border-[#1f2a57]" required />
              </div>
              <div>
                <label className="block font-semibold text-[#1f2a57]">MESSAGE *</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" className="mt-2 input h-36 border-2 border-[#1f2a57]" required />
              </div>
              <button type="submit" className="btn btn-danger px-6 py-3 text-white font-bold">SEND MESSAGE</button>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  className="p-4 rounded-md bg-green-50 border border-green-200 text-green-800"
                >
                  Thank you! We will be in touch shortly.
                </motion.div>
              )}
            </form>
          </div>
          <aside className="space-y-6">
            <div className="p-6 rounded-lg bg-secondary-100">
              <h3 className="text-3xl font-extrabold text-[#1f2a57] mb-3">OPENING HOURS</h3>
              <ul className="text-secondary-700 space-y-2">
                <li>MONDAY – FRIDAY: <span className="font-semibold">8:30am – 6:00pm</span></li>
                <li>SATURDAY: <span className="font-semibold">9:00am – 2:00pm</span></li>
                <li>SUNDAY: <span className="font-semibold">Closed</span></li>
                <li>Public holidays: <span className="font-semibold">Closed.</span></li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-secondary-100">
              <h3 className="text-3xl font-extrabold text-[#1f2a57] mb-3">FOLLOW US</h3>
              <div className="flex items-center gap-3">
                <a className="w-12 h-12 rounded-full bg-danger-500 text-white flex items-center justify-center" href="#"><Facebook /></a>
                <a className="w-12 h-12 rounded-full bg-danger-500 text-white flex items-center justify-center" href="#"><Twitter /></a>
                <a className="w-12 h-12 rounded-full bg-danger-500 text-white flex items-center justify-center" href="#"><Instagram /></a>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-secondary-100">
              <h3 className="text-3xl font-extrabold text-[#1f2a57] mb-2">For Official Use Only</h3>
              <p className="text-secondary-700 mb-4">Eminent Email Account Log in</p>
              <Link
                to="/login"
                className="block text-center bg-[#1f2a57] hover:bg-[#172046] transition-colors text-white font-bold py-4 rounded-lg"
              >
                Please Click Here to Log in
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}


