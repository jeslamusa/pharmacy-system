import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Eye, Target } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-white text-secondary-900">
      {/* Top info bar */}
      <div className="bg-[#1f2a57] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>About Samiclyn Pharmaceutical Distributors</div>
          <div className="opacity-90">Quality • Compliance • Excellence</div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white sticky top-0 z-40 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary-600 text-white flex items-center justify-center text-xl font-bold">S</div>
            <div className="leading-tight">
              <p className="font-semibold text-lg">Samiclyn Pharmaceutical Distributors (U) Ltd</p>
              <p className="text-xs text-secondary-500">About Us</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2 text-sm font-semibold">
            <Link to="/" className="px-4 py-2 rounded-md uppercase tracking-wide text-secondary-700 hover:text-primary-700">HOME</Link>
            <Link to="/products" className="px-4 py-2 rounded-md uppercase tracking-wide text-secondary-700 hover:text-primary-700">PRODUCTS</Link>
            <Link to="/contact" className="px-4 py-2 rounded-md uppercase tracking-wide text-secondary-700 hover:text-primary-700">CONTACT US</Link>
          </nav>
        </div>
      </header>

             {/* About Section */}
       <section className="relative overflow-hidden bg-gradient-to-br from-[#1f2a57] to-[#2a3a6a]">
         <div className="absolute inset-0 bg-cover bg-center" style={{
           backgroundImage: `url('/images/image4.png'), url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1600&h=900&fit=crop&q=80')`,
           opacity: 0.05
         }} />
         <div className="relative max-w-7xl mx-auto px-4 py-20">
           <div className="grid lg:grid-cols-3 gap-12 items-start">
             <motion.div 
               className="lg:col-span-1"
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: "easeOut" }}
             >
               <motion.div 
                 className="w-24 h-1 bg-white mb-6"
                 initial={{ width: 0 }}
                 whileInView={{ width: 96 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
               ></motion.div>
               <motion.h1 
                 className="text-6xl font-extrabold text-white leading-none"
                 initial={{ opacity: 0, y: -30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
               >
                 ABOUT
               </motion.h1>
             </motion.div>
             <motion.div 
               className="lg:col-span-2"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
             >
                               <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-blue-200">
                  <p className="text-lg leading-relaxed mb-6 text-[#1f2a57]">
                    Samiclyn Pharmaceutical Distributors (U) Ltd is a pharmaceutical company based in Kampala, Uganda, 
                    which deals in the importation and distribution of Human pharmaceutical, surgical and nutritional products. 
                    The company prides itself in ensuring that the customers' expectations and requirements are consistently met.
                  </p>
                  <p className="text-lg leading-relaxed text-[#1f2a57]">
                    Samiclyn Pharmaceutical Distributors (U) Ltd proudly exhibits a continually growing product portfolio 
                    that is characteristic of high quality and safe pharmaceutical products that are effective and affordable.
                  </p>
                </div>
             </motion.div>
           </div>
         </div>
       </section>

             {/* Vision & Mission Cards */}
       <section className="relative overflow-hidden">
         <div className="absolute inset-0 bg-cover bg-center" style={{
           backgroundImage: `url('/images/image5.png'), url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&h=900&fit=crop&q=80')`,
           opacity: 0.05
         }} />
         <div className="relative max-w-7xl mx-auto px-4 py-20">
           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <motion.div 
               initial={{ opacity: 0, y: 50, scale: 0.9 }}
               whileInView={{ opacity: 1, y: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.8, ease: "easeOut" }}
               whileHover={{ 
                 scale: 1.02,
                 transition: { duration: 0.3 }
               }}
               className="bg-white rounded-xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300"
             >
               <motion.div 
                 className="flex items-center gap-4 mb-6"
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
               >
                 <motion.div 
                   className="w-12 h-12 rounded-lg bg-[#1f2a57] flex items-center justify-center"
                   initial={{ rotate: -180, scale: 0 }}
                   whileInView={{ rotate: 0, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                 >
                   <Eye className="text-white" size={24} />
                 </motion.div>
                 <motion.h2 
                   className="text-2xl font-bold text-[#1f2a57]"
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
                 >
                   Our Vision
                 </motion.h2>
               </motion.div>
               <motion.p 
                 className="text-secondary-700 leading-relaxed"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
               >
                 To be the leading providers of high quality pharmaceutical products with the aim to reach out in 
                 continuously attracting and persuading high quality multinational pharmaceutical companies to import 
                 affordable and effective products into Tanzania.
               </motion.p>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 50, scale: 0.9 }}
               whileInView={{ opacity: 1, y: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
               whileHover={{ 
                 scale: 1.02,
                 transition: { duration: 0.3 }
               }}
               className="bg-white rounded-xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300"
             >
               <motion.div 
                 className="flex items-center gap-4 mb-6"
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
               >
                 <motion.div 
                   className="w-12 h-12 rounded-lg bg-[#1f2a57] flex items-center justify-center"
                   initial={{ rotate: -180, scale: 0 }}
                   whileInView={{ rotate: 0, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.5, delay: 1.1, ease: "easeOut" }}
                 >
                   <Target className="text-white" size={24} />
                 </motion.div>
                 <motion.h2 
                   className="text-2xl font-bold text-[#1f2a57]"
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.2, delay: 1.3, ease: "easeOut" }}
                 >
                   Our Mission
                 </motion.h2>
               </motion.div>
               <motion.p 
                 className="text-secondary-700 leading-relaxed"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
               >
                 Samiclyn Pharmaceutical Distributors (U) Ltd has resolved to provide the community in Uganda and 
                 the Great Lakes Region with high quality, safe, efficacious and affordable Pharmaceuticals, Medical, 
                 Surgical and Nutritional products.
               </motion.p>
             </motion.div>
           </div>
         </div>
       </section>

                           {/* Core Values Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
         <div className="max-w-7xl mx-auto px-4">
           <motion.h2 
             className="text-4xl font-extrabold text-[#1f2a57] text-center mb-16"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             Core Values
           </motion.h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               {
                 title: "Integrity",
                 description: "We uphold the highest ethical standards, fostering trust with customers, partners, and regulators through transparency, honesty, and accountability."
               },
               {
                 title: "Quality",
                 description: "Quality is at the heart of our operations. We source products exclusively from manufacturers with globally recognized certifications."
               },
               {
                 title: "Customer-Centricity",
                 description: "Our customers are our priority. We tailor our services to meet their unique needs, offering personalized solutions and responsive support."
               },
               {
                 title: "Innovation",
                 description: "We embrace innovation to stay at the forefront of the pharmaceutical industry, continuously seeking ways to improve healthcare delivery."
               },
               {
                 title: "Community Impact",
                 description: "We believe in giving back to the communities we serve through health education, public health initiatives, and affordable pricing."
               }
             ].map((value, i) => (
               <motion.div
                 key={value.title}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: i * 0.1 }}
                                   className="bg-white rounded-xl p-6 shadow-xl border-l-4 border-[#1f2a57] hover:shadow-2xl transition-all duration-300"
               >
                 <h3 className="text-xl font-bold text-[#1f2a57] mb-3">{value.title}</h3>
                 <p className="text-secondary-700 leading-relaxed">{value.description}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>



               {/* Certifications Section */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
         <div className="max-w-7xl mx-auto px-4">
           <motion.h2 
             className="text-4xl font-extrabold text-[#1f2a57] text-center mb-16"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             Certifications & Compliance
           </motion.h2>
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <p className="text-lg text-secondary-700 leading-relaxed mb-6">
                 Samiclyn is fully licensed by the National Drug Authority (NDA) of Uganda and complies with 
                 local and international standards, including Good Distribution Practices (GDP) and Good 
                 Manufacturing Practices (GMP) as outlined by the World Health Organization (WHO).
               </p>
               <div className="space-y-4">
                 {[
                   "WHO Good Manufacturing Practices (WHO-GMP)",
                   "ISO 9001:2015 (Quality Management Systems)",
                   "U.S. Food and Drug Administration (FDA) approvals",
                   "European Medicines Agency (EMA) standards"
                 ].map((cert, i) => (
                   <motion.div
                     key={cert}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: i * 0.1 }}
                     className="flex items-center gap-3"
                   >
                     <div className="w-2 h-2 bg-[#1f2a57] rounded-full"></div>
                     <span className="text-secondary-700">{cert}</span>
                   </motion.div>
                 ))}
               </div>
             </div>
                           <div className="bg-white rounded-xl p-8 shadow-xl border border-blue-100">
               <h3 className="text-2xl font-bold text-[#1f2a57] mb-6">Distribution Network</h3>
               <p className="text-secondary-700 leading-relaxed mb-4">
                 Samiclyn operates a robust distribution network spanning Uganda and extending into Rwanda, 
                 Burundi, and the Democratic Republic of Congo.
               </p>
               <p className="text-secondary-700 leading-relaxed">
                 Our state-of-the-art warehousing facilities in Dar es Salaam feature temperature-controlled 
                 environments to preserve product integrity, with strategic partnerships ensuring timely 
                 delivery to urban and rural healthcare facilities.
               </p>
             </div>
           </div>
         </div>
       </section>

               {/* Background Section */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
         <div className="max-w-7xl mx-auto px-4">
           <motion.h2 
             className="text-4xl font-extrabold text-[#1f2a57] text-center mb-16"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             Our Background
           </motion.h2>
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.0 }}
             >
               <img
                 src="/images/image1.png"
                 alt="Pharmaceutical professional"
                 className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                 onError={(e) => {
                   console.error('Failed to load pharmaceutical professional image')
                   const target = e.target as HTMLImageElement
                   target.src = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop&q=80'
                 }}
               />
             </motion.div>
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.0, delay: 0.3 }}
             >
               <p className="text-lg text-secondary-700 leading-relaxed mb-6">
                 Founded in Kampala, Uganda, in 2025, Samiclyn Pharmaceutical Distributors (U) Ltd is rapidly 
                 becoming a leader in pharmaceutical distribution. Since its inception, the company has 
                 contributed to Tanzania's healthcare system by supplying high-quality products and engaging 
                 in health sector initiatives.
               </p>
               <p className="text-lg text-secondary-700 leading-relaxed mb-6">
                 Through global partnerships and local collaboration, Samiclyn is dedicated to delivering 
                 innovative and affordable healthcare solutions that transform healthcare delivery and 
                 improve lives across the region.
               </p>
               <div className="bg-[#1f2a57] text-white rounded-lg p-6">
                 <h4 className="font-bold mb-2">Key Milestones</h4>
                 <ul className="space-y-2 text-sm">
                   <li>• 2025: Incorporated in Dar es Salaam, Tanzania, and launched operations</li>
                   <li>• 2025: Established partnerships with WHO-GMP certified manufacturers</li>
                   <li>• 2025: Secured NDA licensing and initiated community outreach programs</li>
                 </ul>
               </div>
             </motion.div>
           </div>
         </div>
       </section>



               {/* Contact Section */}
        <section className="bg-gradient-to-br from-pink-50 to-red-50 py-20">
         <div className="max-w-7xl mx-auto px-4">
           <motion.h2 
             className="text-4xl font-extrabold text-[#1f2a57] text-center mb-16"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             Contact Us
           </motion.h2>
           <div className="grid lg:grid-cols-2 gap-12">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.0 }}
             >
               <h3 className="text-2xl font-bold text-[#1f2a57] mb-6">Location</h3>
               <div className="space-y-4 text-secondary-700">
                 <p>Along Old Butabika Road, Butabika Zone, Mutungo Parish, Nakawa Division, Dar es Salaam District</p>
                 <p>P.O. Box 192709, Dar es Salaam, Tanzania</p>
               </div>
               
               <h3 className="text-2xl font-bold text-[#1f2a57] mb-6 mt-8">Phone</h3>
               <div className="space-y-2 text-secondary-700">
                 <p>+256 776 780 035</p>
                 <p>+256 776 780 036</p>
               </div>
               
                               <h3 className="text-2xl font-bold text-[#1f2a57] mb-6 mt-8">Email</h3>
                <div className="space-y-2 text-secondary-700">
                  <a href="mailto:info@pharmaceutical.co.tz" className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                    info@pharmaceutical.co.tz
                  </a>
                  <a href="mailto:sales@pharmaceutical.co.tz" className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                    sales@pharmaceutical.co.tz
                  </a>
                  <a href="mailto:pharmaceutical@gmail.com" className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                    pharmaceutical@gmail.com
                  </a>
                </div>
             </motion.div>
             
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.0, delay: 0.3 }}
             >
               <h3 className="text-2xl font-bold text-[#1f2a57] mb-6">Operating Hours</h3>
               <div className="bg-[#1f2a57] text-white rounded-lg p-6">
                 <div className="space-y-3">
                   <div className="flex justify-between">
                     <span>Monday – Friday:</span>
                     <span>8:30 AM – 6:00 PM</span>
                   </div>
                   <div className="flex justify-between">
                     <span>Saturday:</span>
                     <span>9:00 AM – 2:00 PM</span>
                   </div>
                   <div className="flex justify-between">
                     <span>Sunday & Public Holidays:</span>
                     <span>Closed</span>
                   </div>
                 </div>
               </div>
               
               <h3 className="text-2xl font-bold text-[#1f2a57] mb-6 mt-8">Follow Us</h3>
               <div className="flex gap-4">
                 <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                   Facebook
                 </a>
                 <a href="#" className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                   Twitter
                 </a>
                 <a href="#" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                   YouTube
                 </a>
               </div>
               
               <h3 className="text-2xl font-bold text-[#1f2a57] mb-6 mt-8">Useful Links</h3>
               <div className="space-y-2">
                 <a href="https://www.nda.or.ug" target="_blank" rel="noopener noreferrer" className="block text-[#1f2a57] hover:underline">
                   National Drug Authority: www.nda.or.ug
                 </a>
                 <a href="https://www.health.go.ug" target="_blank" rel="noopener noreferrer" className="block text-[#1f2a57] hover:underline">
                   Ministry of Health, Uganda: www.health.go.ug
                 </a>
                 <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="block text-[#1f2a57] hover:underline">
                   World Health Organization: www.who.int
                 </a>
               </div>
             </motion.div>
           </div>
         </div>
       </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-secondary-100">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm">
          © {new Date().getFullYear()} Samiclyn Pharmaceutical Distributors (U) Ltd
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/256776780035"
        target="_blank"
        rel="noreferrer"
        className="fixed left-4 bottom-4 z-40 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M20.52 3.48A11.78 11.78 0 0 0 12.01 0C5.39 0 .05 5.34.05 11.95c0 2.1.55 4.17 1.6 6l-1.7 6.05 6.22-1.63A11.9 11.9 0 0 0 12 24c6.62 0 11.96-5.34 11.96-11.95 0-3.2-1.25-6.22-3.44-8.57zM12 21.8c-1.94 0-3.82-.52-5.46-1.5l-.39-.23-3.69.96.98-3.53-.25-.4A9.75 9.75 0 0 1 2.2 12C2.2 6.7 6.7 2.2 12 2.2c2.62 0 5.08 1.02 6.94 2.88A9.72 9.72 0 0 1 21.8 12c0 5.3-4.5 9.8-9.8 9.8zm5.58-7.3c-.31-.16-1.84-.9-2.12-1-.28-.11-.48-.16-.68.16-.2.31-.78 1-.96 1.2-.18.2-.36.22-.67.06-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.2.05-.38-.02-.53-.07-.16-.68-1.64-.93-2.25-.25-.61-.5-.52-.68-.53h-.58c-.2 0-.52.07-.79.38-.27.31-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.48.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36z"/>
        </svg>
      </a>
    </div>
  )
}