import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { galleryImages, galleryFallback } from '../data/gallery'
import { Package, ChevronRight } from 'lucide-react'

type CatalogItem = {
  id: string
  name: string
  summary: string
}

type CatalogCategory = {
  key: string
  title: string
  blurb: string
  items: CatalogItem[]
}

export default function ProductCatalog() {
  const categories: CatalogCategory[] = useMemo(
    () => [
      {
        key: 'featured',
        title: 'Our Products',
        blurb:
          'Samiclyn distributes a diverse and expanding range of pharmaceutical and nutritional products from certified manufacturers. Below is a selection of our key offerings.',
        items: [
          {
            id: 'cartiflex-plus',
            name: 'Cartiflex Plus Chewable Tablets',
            summary:
              'Supports joint health, mobility and flexibility for active lifestyles.',
          },
          {
            id: 'neuro-vive',
            name: 'Neuro Vive Soft Gel Capsules',
            summary:
              'Promotes neurological health and cognitive vitality.',
          },
          {
            id: 'additional-lines',
            name: 'Additional Product Lines',
            summary:
              'Includes generics, branded pharmaceuticals and nutritional supplements (portfolio expanding).',
          },
        ],
      },
      {
        key: 'branded',
        title: 'Branded Pharmaceuticals',
        blurb:
          'Ethical branded medicines from globally recognized manufacturers with stringent quality systems.',
        items: [],
      },
      {
        key: 'hospital',
        title: 'Hospital Consumables',
        blurb:
          'A wide range of single‑use supplies to support safe clinical procedures and patient care.',
        items: [],
      },
      {
        key: 'generics',
        title: 'Generic Pharmaceuticals',
        blurb:
          'High‑quality, cost‑effective alternatives to branded medicines to increase accessibility.',
        items: [],
      },
      {
        key: 'diagnostics',
        title: 'Diagnostics & Medical Systems',
        blurb:
          'Point‑of‑care diagnostics and medical devices to enhance clinical decision‑making.',
        items: [],
      },
      {
        key: 'fmcd',
        title: 'Fast Moving Consumer Goods',
        blurb:
          'Everyday health and wellness products distributed at scale to retail and institutional customers.',
        items: [],
      },
      {
        key: 'otc',
        title: 'OTC Pharmaceuticals',
        blurb:
          'Over‑the‑counter medicines covering common symptomatic relief and wellness.',
        items: [],
      },
      {
        key: 'surgical',
        title: 'Surgical Procedures',
        blurb:
          'Products supporting safe and effective surgical care from preparation to recovery.',
        items: [],
      },
    ],
    []
  )

  const [activeKey, setActiveKey] = useState<string>('featured')
  const activeCategory = categories.find((c) => c.key === activeKey) ?? categories[0]
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white text-secondary-900">
      {/* Top info bar */}
      <div className="bg-[#1f2a57] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>Eminent Product Catalog</div>
          <div className="opacity-90">Quality assured • WHO‑GMP • ISO • FDA aligned</div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary-600 text-white flex items-center justify-center text-xl font-bold">S</div>
            <div className="leading-tight">
              <p className="font-semibold text-lg">Samiclyn Pharmaceutical Distributors (U) Ltd</p>
              <p className="text-xs text-secondary-500">Product Catalog</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2 text-sm font-semibold relative">
            <Link to="/" className="px-4 py-2 rounded-md uppercase tracking-wide text-secondary-700 hover:text-primary-700">HOME</Link>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={`px-4 py-2 rounded-md uppercase tracking-wide ${menuOpen ? 'bg-[#1f2a57] text-white' : 'text-secondary-700 hover:text-primary-700'}`}
            >
              PRODUCTS
            </button>
            {menuOpen && (
              <div
                onMouseLeave={() => setMenuOpen(false)}
                className="absolute top-full mt-2 right-0 w-80 bg-[#1f2a57] text-white rounded-md shadow-xl overflow-hidden"
              >
                {categories.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => {
                      setActiveKey(c.key)
                      setMenuOpen(false)
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-[#172046] flex items-center justify-between"
                  >
                    <span>{c.title}</span>
                    <ChevronRight size={16} className="opacity-80" />
                  </button>
                ))}
              </div>
            )}
            <Link to="/contact" className="px-4 py-2 rounded-md uppercase tracking-wide text-secondary-700 hover:text-primary-700">CONTACT US</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-[36vh] min-h-[280px]">
          {(galleryImages.length ? galleryImages : galleryFallback).slice(0,3).map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt="products-hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: i === 0 ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
          <div className="absolute inset-0 bg-[#1f2a57]/90" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl font-extrabold tracking-wider uppercase">Our Products</h1>
              <p className="mt-4 max-w-3xl text-lg opacity-95">
                Samiclyn distributes a diverse and expanding range of pharmaceutical and nutritional products
                from certified manufacturers. All products undergo rigorous quality assurance to ensure safety,
                efficacy and affordability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        {/* Content */}
        <div>
          <motion.div
            key={activeCategory.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-lg border bg-white p-6"
          >
            <h2 className="text-3xl font-extrabold text-[#1f2a57]">{activeCategory.title}</h2>
            <p className="mt-2 text-secondary-700">{activeCategory.blurb}</p>

            {activeCategory.items.length > 0 ? (
              <div className="mt-6 space-y-3">
                {activeCategory.items.map((item) => {
                  const isOpen = expandedId === item.id
                  return (
                    <div key={item.id} className="border rounded-lg overflow-hidden bg-white">
                      <button
                        onClick={() => setExpandedId(isOpen ? null : item.id)}
                        className={`w-full flex items-center justify-between text-left px-4 py-3 ${
                          isOpen ? 'bg-secondary-50' : 'bg-white hover:bg-secondary-50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-md bg-primary-100 flex items-center justify-center mt-0.5">
                            <Package className="text-primary-700" size={18} />
                          </div>
                          <span className="text-[17px] font-bold text-[#1f2a57]">{item.name}</span>
                        </div>
                        <ChevronRight
                          size={18}
                          className={`transition-transform ${isOpen ? 'rotate-90 text-[#1f2a57]' : 'text-secondary-500'}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-secondary-800">{item.summary}</div>
                      )}
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="mt-6 p-5 rounded-md bg-secondary-50 text-secondary-700">
                Detailed line lists for this category are available on request.
              </div>
            )}

            <div className="mt-8 text-sm text-secondary-600">
              For product enquiries, quotations or technical sheets, please
              <Link to="/contact" className="ml-1 text-[#1f2a57] font-semibold hover:underline">contact us</Link>.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-secondary-100">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm">
          © {new Date().getFullYear()} Samiclyn Pharmaceutical Distributors (U) Ltd
        </div>
      </footer>
    </div>
  )
}


