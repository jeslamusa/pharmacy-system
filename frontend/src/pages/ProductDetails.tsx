import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'

const DATA = [
  {
    id: 'cartiflex-plus',
    name: 'Cartiflex Plus Chewable Tablets',
    description:
      'Supports joint health, mobility, and flexibility for active lifestyles.',
  },
  {
    id: 'neuro-vive',
    name: 'Neuro Vive Soft Gel Capsules',
    description: 'Promotes neurological health and cognitive vitality.',
  },
  {
    id: 'additional-lines',
    name: 'Additional Product Lines',
    description:
      'Includes generics, branded pharmaceuticals, and nutritional supplements (portfolio expanding).',
  },
]

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const product = useMemo(() => DATA.find((p) => p.id === id), [id])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-center p-6">
        <div>
          <p className="text-2xl font-bold text-secondary-900">Product not found</p>
          <Link to="/products" className="mt-3 inline-block text-[#1f2a57] hover:underline">Back to Products</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Link to="/products" className="text-sm text-[#1f2a57] hover:underline">← Back to Products</Link>
        <h1 className="mt-2 text-3xl font-extrabold text-secondary-900">{product.name}</h1>
        <p className="mt-3 text-secondary-800">{product.description}</p>
        <div className="mt-6 p-4 bg-secondary-50 rounded-md text-secondary-700 text-sm">
          Detailed composition, pack sizes, and regulatory information available on request.
        </div>
      </div>
    </div>
  )
}





