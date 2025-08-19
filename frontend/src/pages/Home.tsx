import React, { useEffect, useState } from 'react'
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
  MapPin,
  Package,
  Building2,
  ShieldCheck,
  Truck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
} from 'lucide-react'

export default function Home() {
  const slides = (galleryImages && galleryImages.length ? galleryImages : galleryFallback)
  const [current, setCurrent] = useState(0)
  const [productsMenuOpen, setProductsMenuOpen] = useState(false)
  
  // Debug logging
  console.log('Gallery Images:', galleryImages)
  console.log('Gallery Fallback:', galleryFallback)
  console.log('Using slides:', slides)
  
  // Different text content for each slide
  const slideContent = [
    {
      title: "WE DELIVER TO YOUR DOOR STEP",
      subtitle: "Quality pharmaceutical products delivered to your home or office"
    },
    {
      title: "QUALITY HEALTHCARE SOLUTIONS",
      subtitle: "Partnering with globally certified manufacturers for your health"
    },
    {
      title: "TRUSTED PHARMACEUTICAL DISTRIBUTORS",
                  subtitle: "Serving Tanzania and the Great Lakes Region with excellence"
    },
    {
      title: "24/7 DEDICATED SUPPORT",
      subtitle: "Just a call away for all your pharmaceutical needs"
    },
    {
      title: "COMPLIANCE & EXCELLENCE",
      subtitle: "NDA licensed with international quality standards"
    },
    {
      title: "INNOVATIVE HEALTHCARE DELIVERY",
      subtitle: "Transforming healthcare access across the region"
    },
    {
      title: "GLOBAL PHARMACEUTICAL PARTNERSHIPS",
                  subtitle: "Connecting Tanzania with world-class pharmaceutical manufacturers"
    },
    {
      title: "COMMUNITY HEALTH INITIATIVES",
      subtitle: "Supporting public health programs and community outreach"
    },
    {
      title: "RELIABLE SUPPLY CHAIN",
      subtitle: "Ensuring consistent availability of essential medications"
    },
    {
      title: "HEALTHCARE EXCELLENCE",
      subtitle: "Your trusted partner in pharmaceutical distribution"
    }
  ]
  
  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="min-h-screen bg-white text-secondary-900">
             {/* Top info bar */}
       <div className="bg-blue-900 text-white text-xs sm:text-sm">
         <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
           <div className="flex items-center gap-2 text-center sm:text-left">
             <HomeIcon size={12} className="opacity-80 flex-shrink-0" />
             <span className="hidden sm:inline">Along Old Butabika Road, Butabika Zone, Mutungo Parish, Nakawa Division, Dar es Salaam</span>
             <span className="sm:hidden">Dar es Salaam, Tanzania</span>
           </div>
           <div className="flex items-center gap-2 sm:gap-4">
             <div className="flex items-center gap-1">
               <Phone size={12} className="opacity-80 flex-shrink-0" />
               <span className="hidden sm:inline">+256 776 780 035 / +256 776 780 036</span>
               <span className="sm:hidden">+256 776 780 035</span>
             </div>
             <div className="hidden md:flex items-center gap-3 opacity-90">
               <Facebook size={14} />
               <Twitter size={14} />
               <Instagram size={14} />
             </div>
           </div>
         </div>
       </div>

                           {/* Main nav */}
        <header className="bg-white sticky top-0 z-40 border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4 h-20 sm:h-24 flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
                             {/* Pharmaceutical Management System Logo with gradient background */}
               <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 text-white shadow-xl">
                 <div className="absolute inset-0 bg-black/20"></div>
                 <div className="relative z-10 flex items-center gap-4">
                   <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold backdrop-blur-sm">
                     P
                   </div>
                   <div>
                     <h1 className="font-bold text-lg sm:text-xl lg:text-2xl text-blue-900">Pharmaceutical Management System (T) Ltd</h1>
                     <p className="text-sm opacity-90">Leading Pharmaceutical Distributors</p>
                   </div>
                 </div>
               </div>
               
               {/* Company name and tagline */}
               <div className="leading-tight">
                 <h1 className="font-bold text-lg sm:text-xl lg:text-2xl text-blue-900">Pharmaceutical Management System (T) Ltd</h1>
                 <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 my-1"></div>
                 <p className="text-sm sm:text-base text-blue-900 italic font-medium">Quality • Compliance • Excellence</p>
               </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold relative">
              <a href="#home" className="px-4 py-2 rounded-md uppercase tracking-wide bg-blue-900 text-white font-bold">HOME</a>
              <a href="#about" className="px-4 py-2 rounded-md uppercase tracking-wide text-gray-600 hover:text-blue-900 font-bold">ABOUT US</a>
              <button
                onClick={() => setProductsMenuOpen((v) => !v)}
                className={`px-4 py-2 rounded-md uppercase tracking-wide font-bold flex items-center gap-1 ${productsMenuOpen ? 'bg-blue-900 text-white' : 'text-gray-600 hover:text-blue-900'}`}
              >
                PRODUCTS
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {productsMenuOpen && (
                <div
                  onMouseLeave={() => setProductsMenuOpen(false)}
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-80 bg-blue-900 text-white rounded-md shadow-xl overflow-hidden grid grid-cols-1"
                >
                  {[
                    { id: 'cartiflex-plus', name: 'Cartiflex Plus Chewable Tablets' },
                    { id: 'neuro-vive', name: 'Neuro Vive Soft Gel Capsules' },
                    { id: 'additional-lines', name: 'Additional Product Lines' },
                  ].map((p) => (
                    <Link
                      key={p.id}
                      to={`/products/${p.id}`}
                      className="px-4 py-3 hover:bg-blue-800 text-sm"
                      onClick={() => setProductsMenuOpen(false)}
                    >
                      {p.name}
                    </Link>
                  ))}
                  <Link to="/products" className="px-4 py-3 bg-blue-800 text-white text-center text-sm" onClick={() => setProductsMenuOpen(false)}>
                    View all products
                  </Link>
                </div>
              )}
              <a href="#services" className="px-4 py-2 rounded-md uppercase tracking-wide text-gray-600 hover:text-blue-900 font-bold">SERVICES</a>
              <Link to="/contact" className="px-4 py-2 rounded-md uppercase tracking-wide bg-blue-900 text-white font-bold">CONTACT US</Link>
            </nav>
            
            {/* Mobile menu button */}
            <button className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

             {/* Hero */}
       <section id="home" className="relative overflow-hidden">
         {/* Slider background */}
         <div className="relative h-[60vh] sm:h-[70vh] min-h-[400px] sm:min-h-[500px]">
            {slides.map((src, idx) => (
             <motion.img
               key={src}
               src={src}
               alt="slide"
               initial={{ opacity: 0 }}
               animate={{ opacity: current === idx ? 1 : 0 }}
               transition={{ duration: 0.6 }}
               className="absolute inset-0 w-full h-full object-cover"
               onError={(e) => {
                 console.error('Failed to load image:', src)
                 // Fallback to a default image if loading fails
                 const target = e.target as HTMLImageElement
                 target.src = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1600&h=900&fit=crop'
               }}
               onLoad={() => console.log('Image loaded successfully:', src)}
             />
           ))}
           <div className="absolute inset-0 bg-black/50" />

                      {/* Centered content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4 max-w-4xl mx-auto">
                {slideContent.map((content, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: current === idx ? 1 : 0,
                      y: current === idx ? 0 : 20
                    }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                    <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl font-bold tracking-wide uppercase mb-3 sm:mb-4 leading-tight">
                      {content.title}
                    </h1>
                    <p className="text-white text-sm sm:text-lg lg:text-xl opacity-95 max-w-2xl mb-6 sm:mb-8 px-4 leading-relaxed">
                      {content.subtitle}
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm sm:text-base font-semibold">
                      <PhoneCall size={16} className="sm:w-5 sm:h-5" /> CONTACT US
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

           {/* Slider controls */}
           <button
             aria-label="Previous"
             onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
             className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg"
           >
             <ChevronLeft size={20} />
           </button>
           <button
             aria-label="Next"
             onClick={() => setCurrent((c) => (c + 1) % slides.length)}
             className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg"
           >
             <ChevronRight size={20} />
           </button>
         </div>
       </section>

                                                       {/* Welcome section */}
         <section id="about" className="bg-gray-50">
           <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
             <motion.div 
               className="relative overflow-hidden rounded-xl shadow-lg"
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: "easeOut" }}
             >
               <img
                 alt="Clinic"
                 className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                 src="/images/image.png"
                 onError={(e) => {
                   console.error('Failed to load welcome image')
                   const target = e.target as HTMLImageElement
                   target.src = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop'
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
             </motion.div>
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
             >
               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">WELCOME TO PHARMACEUTICAL MANAGEMENT SYSTEM (T) LTD</h2>
               <div className="w-20 h-1 bg-blue-600 my-4" />
               <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                 We are a Kampala-based distributor of high‑quality human pharmaceutical, surgical, medical and
                 nutritional products. We partner with globally certified manufacturers and operate with strict
                 compliance to National Drug Authority (NDA) and international standards to ensure quality,
                                   affordability and reliability across Tanzania and the Great Lakes Region.
               </p>
               <Link to="/about" className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base">Read More</Link>
             </motion.div>
           </div>
         </section>

                           {/* Services */}
        <section id="services" className="relative py-12 sm:py-20 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/image2.png"
              alt="Services Background"
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Failed to load services background image')
                const target = e.target as HTMLImageElement
                target.src = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&h=900&fit=crop'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-indigo-900/90"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Importation & Distribution",
                  description: "Efficient supply chain management for seamless delivery across Tanzania and the Great Lakes Region."
                },
                {
                  title: "Regulatory Compliance",
                  description: "Strict adherence to National Drug Authority (NDA) guidelines with robust quality control systems."
                },
                {
                  title: "Healthcare Engagement",
                  description: "Hosting CME programs, medical seminars, and roundtable discussions to advance healthcare knowledge."
                },
                {
                  title: "Community Outreach",
                  description: "Collaborating with Ministry of Health, NDA, and NGOs to support public health initiatives."
                },
                {
                  title: "Customized Solutions",
                  description: "Tailored procurement and distribution services including bulk supply agreements and just-in-time delivery."
                }
              ].map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="bg-white/95 backdrop-blur-sm text-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-blue-900">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

                           {/* Delivery highlight */}
        <section className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">WE DELIVER TO YOUR <span className="text-blue-600">HOME OR OFFICE</span></h3>
              <p className="mt-4 sm:mt-6 text-gray-600 max-w-xl text-sm sm:text-base mb-6">24/7 dedicated support. Just a call away.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base">
                <PhoneCall size={16} className="sm:w-5 sm:h-5" /> CONTACT US
              </Link>
            </div>
            <img
              alt="Delivery"
              className="rounded-xl shadow-lg object-cover w-full h-[240px] sm:h-[320px]"
              src="/images/image3.png"
              onError={(e) => {
                console.error('Failed to load delivery image')
                const target = e.target as HTMLImageElement
                target.src = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop'
              }}
            />
          </div>
                          </section>
 
               {/* Useful Links */}
        <section id="useful-links" className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Useful Links
            </motion.h3>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto mb-12"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "National Drug Authority",
                  url: "https://www.nda.or.ug",
                  description: "Tanzania's regulatory body for pharmaceuticals",
                  color: "from-emerald-500 to-teal-600",
                  icon: "🏥"
                },
                {
                  name: "Ministry of Health, Tanzania",
                  url: "https://www.health.go.ug",
                  description: "Official health ministry website",
                  color: "from-blue-500 to-indigo-600",
                  icon: "🏛️"
                },
                {
                  name: "World Health Organization",
                  url: "https://www.who.int",
                  description: "Global health organization",
                  color: "from-purple-500 to-pink-600",
                  icon: "🌍"
                }
              ].map((link, i) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100" />
                  <div className="relative p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${link.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {link.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-900 transition-colors">
                      {link.name}
                    </h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {link.description}
                    </p>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Visit Website
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rate Us Section */}
        <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h3 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              What Our Customers Say
            </motion.h3>
            
            {/* Overall Rating */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex justify-center items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.svg
                    key={star}
                    className="w-8 h-8 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + star * 0.1 }}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </motion.svg>
                ))}
              </div>
              <p className="text-2xl font-bold text-gray-800 mb-2">4.8/5.0</p>
              <p className="text-lg text-gray-600 mb-4">Based on <span className="font-semibold text-blue-600">2,000+</span> customer reviews</p>
            </motion.div>

                         {/* Customer Testimonials */}
             <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
               {[
                 {
                   name: "Dr. Jesla Mmassy",
                   role: "Medical Director",
                   hospital: "Kampala General Hospital",
                   rating: 5,
                   comment: "Pharmaceutical Management System has consistently delivered high-quality pharmaceutical products. Their reliability and professional service have made them our trusted partner for over a year."
                 },
                 {
                   name: "Dr. Laura Paul",
                   role: "Chief Pharmacist",
                   hospital: "Mulago National Hospital",
                   rating: 5,
                   comment: "Excellent product quality and timely delivery. Pharmaceutical Management System's commitment to compliance and customer service is outstanding. Highly recommended!"
                 },
                 {
                   name: "Dr. Meggi Wilbard",
                   role: "Hospital Administrator",
                   hospital: "St. Francis Hospital",
                   rating: 4,
                   comment: "Great partnership with Pharmaceutical Management System. Their products meet international standards and their team is always responsive to our needs."
                 }
               ].map((testimonial, i) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Stars */}
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-5 h-5 ${star <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  
                  {/* Comment */}
                  <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                  
                  {/* Customer Info */}
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600">{testimonial.hospital}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-lg text-gray-700 mb-4">Join thousands of satisfied healthcare providers</p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </section>
   
               {/* Contact */}
       <section id="contact" className="bg-gradient-to-br from-gray-50 to-white">
         <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
           <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">Get in touch</h3>
           <div className="grid lg:grid-cols-2 gap-8">
             <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden border shadow-lg">
               <iframe
                 title="map"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63623.06092477896!2d32.535!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb3f2b3b4e0b%3A0x7c9a9b3a7f1!2sKampala!5e0!3m2!1sen!2sug!4v1610000000000"
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 allowFullScreen={false}
                 loading="lazy"
               />
             </div>
             <div className="grid sm:grid-cols-2 gap-6">
               <div>
                 <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">LOCATION</h4>
                 <p className="mt-2 text-gray-700 text-sm sm:text-base">Along Old Butabika Road, Butabika Zone, Mutungo Parish, Nakawa Division, Dar es Salaam District<br/>P.O. Box 192709, Dar es Salaam, Tanzania</p>
               </div>
                               <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">CONTACT US</h4>
                  <p className="mt-2 flex items-center gap-2 text-sm sm:text-base"><Phone size={16}/> +256 776 780 035, +256 776 780 036</p>
                  <p className="mt-1 flex items-center gap-2 text-sm sm:text-base">
                    <Mail size={16}/> 
                    <a href="mailto:info@pharmaceutical.co.tz" className="text-blue-600 hover:text-blue-800 underline">info@pharmaceutical.co.tz</a>
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-sm sm:text-base">
                    <Mail size={16}/> 
                    <a href="mailto:sales@pharmaceutical.co.tz" className="text-blue-600 hover:text-blue-800 underline">sales@pharmaceutical.co.tz</a>
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-sm sm:text-base">
                    <Mail size={16}/> 
                    <a href="mailto:pharmaceutical@gmail.com" className="text-blue-600 hover:text-blue-800 underline">pharmaceutical@gmail.com</a>
                  </p>
                </div>
               <div>
                 <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">OPENING HOURS</h4>
                 <p className="mt-2 text-sm sm:text-base text-gray-700">Mon – Fri: 8:30am – 6:00pm<br/>Saturday: 9:00am – 2:00pm<br/>Sunday & Public Holidays – Closed</p>
               </div>
               <div>
                 <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">FOLLOW US</h4>
                 <div className="mt-2 flex items-center gap-3 text-gray-600">
                   <Facebook size={20} /> <Twitter size={20} />
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>



             {/* Footer */}
       <footer className="bg-gray-900 text-gray-100">
         <div className="max-w-7xl mx-auto px-4 py-12 sm:py-14 grid lg:grid-cols-3 gap-8 sm:gap-10">
           <div>
             <h5 className="text-xl sm:text-2xl font-bold mb-3">BRIEF BACKGROUND</h5>
             <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
               Pharmaceutical Management System (T) Ltd is a Dar es Salaam‑based company established in 2025. We
               specialize in the importation and distribution of high‑quality pharmaceutical, surgical, medical and
               nutritional products. Our systems align with TFDA and international standards to ensure safety,
               efficacy and affordability across Tanzania and the Great Lakes Region.
             </p>
           </div>
           <div>
             <h5 className="text-xl sm:text-2xl font-bold mb-3">WORKING HOURS</h5>
             <p className="text-gray-300 text-sm sm:text-base">Monday – Friday 8:30am – 6:00pm<br/>Saturday: 9:00am – 2:00pm<br/>Sunday & Public Holidays – Closed</p>
           </div>
           <div>
             <h5 className="text-xl sm:text-2xl font-bold mb-3">USEFUL LINKS</h5>
             <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
               {['HOME','ABOUT US','PRODUCTS','SERVICES','CONTACT US'].map((l)=> (
                 <li key={l}><a href={`#${l.split(' ')[0].toLowerCase()}`} className="hover:text-white transition-colors">{l}</a></li>
               ))}
               <li><a href="https://www.tfda.go.tz" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Tanzania Food and Drugs Authority (TFDA)</a></li>
               <li><a href="https://www.moh.go.tz" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Ministry of Health, Tanzania</a></li>
               <li><a href="https://www.who.int" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">World Health Organization (WHO)</a></li>
             </ul>
           </div>
         </div>
         <div className="border-t border-gray-700">
           <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-400">
             Copyright © {new Date().getFullYear()} - Pharmaceutical Management System (T) Ltd | All Rights Reserved
           </div>
         </div>
       </footer>

             {/* Floating WhatsApp */}
       <a
         href="https://wa.me/256776780035"
         target="_blank"
         rel="noreferrer"
         className="fixed left-4 bottom-4 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
         aria-label="WhatsApp"
       >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 sm:w-7 sm:h-7"><path d="M20.52 3.48A11.78 11.78 0 0 0 12.01 0C5.39 0 .05 5.34.05 11.95c0 2.1.55 4.17 1.6 6l-1.7 6.05 6.22-1.63A11.9 11.9 0 0 0 12 24c6.62 0 11.96-5.34 11.96-11.95 0-3.2-1.25-6.22-3.44-8.57zM12 21.8c-1.94 0-3.82-.52-5.46-1.5l-.39-.23-3.69.96.98-3.53-.25-.4A9.75 9.75 0 0 1 2.2 12C2.2 6.7 6.7 2.2 12 2.2c2.62 0 5.08 1.02 6.94 2.88A9.72 9.72 0 0 1 21.8 12c0 5.3-4.5 9.8-9.8 9.8zm5.58-7.3c-.31-.16-1.84-.9-2.12-1-.28-.11-.48-.16-.68.16-.2.31-.78 1-.96 1.2-.18.2-.36.22-.67.06-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.2.05-.38-.02-.53-.07-.16-.68-1.64-.93-2.25-.25-.61-.5-.52-.68-.53h-.58c-.2 0-.52.07-.79.38-.27.31-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.48.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36z"/></svg>
       </a>
    </div>
  )
}


