export interface Product {
  id: string
  name: string
  category: string
  description: string
  price: number
  stock: number
  supplier: string
  expiryDate: string
  status: 'active' | 'inactive' | 'expired'
  image?: string
}

export interface Order {
  id: string
  customerId: string
  customerName: string
  products: Array<{
    productId: string
    productName: string
    quantity: number
    price: number
  }>
  totalAmount: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  orderDate: string
  deliveryDate?: string
  paymentStatus: 'pending' | 'paid' | 'failed'
}

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  address: string
  type: 'hospital' | 'clinic' | 'pharmacy' | 'individual'
  totalOrders: number
  totalSpent: number
  status: 'active' | 'inactive'
  registrationDate: string
}

export interface StatCard {
  title: string
  value: string | number
  change: number
  changeType: 'increase' | 'decrease'
  icon: string
  color: string
}

export interface ChartData {
  labels: string[]
  datasets: Array<{
    label: string
    data: number[]
    backgroundColor?: string | string[]
    borderColor?: string | string[]
    borderWidth?: number
  }>
}

