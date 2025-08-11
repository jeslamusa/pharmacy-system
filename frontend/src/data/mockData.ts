import { Product, Order, Customer, StatCard } from '../types'

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Cartiflex Plus Chewable Tablets',
    category: 'Joint Health',
    description: 'Supports joint health, mobility, and flexibility for active lifestyles.',
    price: 45.99,
    stock: 150,
    supplier: 'PharmaCorp Ltd',
    expiryDate: '2025-12-31',
    status: 'active',
    image: '/api/placeholder/60/60'
  },
  {
    id: '2',
    name: 'Neuro Vive Soft Gel Capsules',
    category: 'Neurological Health',
    description: 'Promotes neurological health and cognitive vitality.',
    price: 32.50,
    stock: 89,
    supplier: 'NeuroHealth Inc',
    expiryDate: '2025-10-15',
    status: 'active',
    image: '/api/placeholder/60/60'
  },
  {
    id: '3',
    name: 'Vitamin C 1000mg Tablets',
    category: 'Vitamins',
    description: 'High potency vitamin C for immune system support.',
    price: 18.75,
    stock: 200,
    supplier: 'Vitamins Plus',
    expiryDate: '2026-03-20',
    status: 'active',
    image: '/api/placeholder/60/60'
  },
  {
    id: '4',
    name: 'Omega-3 Fish Oil Capsules',
    category: 'Supplements',
    description: 'Premium fish oil with high DHA and EPA content.',
    price: 28.99,
    stock: 75,
    supplier: 'Omega Health',
    expiryDate: '2025-08-30',
    status: 'active',
    image: '/api/placeholder/60/60'
  },
  {
    id: '5',
    name: 'Calcium + Vitamin D Tablets',
    category: 'Bone Health',
    description: 'Essential minerals for strong bones and teeth.',
    price: 22.50,
    stock: 120,
    supplier: 'Mineral Health',
    expiryDate: '2025-11-15',
    status: 'active',
    image: '/api/placeholder/60/60'
  },
  {
    id: '6',
    name: 'Probiotic Complex 50B',
    category: 'Digestive Health',
    description: 'Advanced probiotic formula for digestive wellness.',
    price: 35.00,
    stock: 45,
    supplier: 'Gut Health Ltd',
    expiryDate: '2025-09-10',
    status: 'active',
    image: '/api/placeholder/60/60'
  }
]

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    customerId: 'CUST-001',
    customerName: 'Kampala General Hospital',
    products: [
      { productId: '1', productName: 'Cartiflex Plus Chewable Tablets', quantity: 50, price: 45.99 },
      { productId: '3', productName: 'Vitamin C 1000mg Tablets', quantity: 100, price: 18.75 }
    ],
    totalAmount: 4086.50,
    status: 'delivered',
    orderDate: '2025-01-15',
    deliveryDate: '2025-01-18',
    paymentStatus: 'paid'
  },
  {
    id: 'ORD-002',
    customerId: 'CUST-002',
    customerName: 'City Pharmacy',
    products: [
      { productId: '2', productName: 'Neuro Vive Soft Gel Capsules', quantity: 30, price: 32.50 },
      { productId: '4', productName: 'Omega-3 Fish Oil Capsules', quantity: 25, price: 28.99 }
    ],
    totalAmount: 1847.25,
    status: 'processing',
    orderDate: '2025-01-20',
    paymentStatus: 'paid'
  },
  {
    id: 'ORD-003',
    customerId: 'CUST-003',
    customerName: 'Community Clinic',
    products: [
      { productId: '5', productName: 'Calcium + Vitamin D Tablets', quantity: 75, price: 22.50 },
      { productId: '6', productName: 'Probiotic Complex 50B', quantity: 40, price: 35.00 }
    ],
    totalAmount: 3087.50,
    status: 'shipped',
    orderDate: '2025-01-22',
    paymentStatus: 'paid'
  },
  {
    id: 'ORD-004',
    customerId: 'CUST-004',
    customerName: 'Rural Health Center',
    products: [
      { productId: '1', productName: 'Cartiflex Plus Chewable Tablets', quantity: 20, price: 45.99 },
      { productId: '3', productName: 'Vitamin C 1000mg Tablets', quantity: 50, price: 18.75 }
    ],
    totalAmount: 1894.80,
    status: 'pending',
    orderDate: '2025-01-25',
    paymentStatus: 'pending'
  }
]

export const mockCustomers: Customer[] = [
  {
    id: 'CUST-001',
    name: 'Kampala General Hospital',
    email: 'admin@kgh.ug',
    phone: '+256 776 123 456',
    address: 'Plot 123, Kampala Road, Kampala',
    type: 'hospital',
    totalOrders: 15,
    totalSpent: 45680.50,
    status: 'active',
    registrationDate: '2024-06-15'
  },
  {
    id: 'CUST-002',
    name: 'City Pharmacy',
    email: 'info@citypharmacy.ug',
    phone: '+256 776 234 567',
    address: 'Shop 45, City Mall, Kampala',
    type: 'pharmacy',
    totalOrders: 8,
    totalSpent: 23450.75,
    status: 'active',
    registrationDate: '2024-08-20'
  },
  {
    id: 'CUST-003',
    name: 'Community Clinic',
    email: 'contact@communityclinic.ug',
    phone: '+256 776 345 678',
    address: 'Community Center, Jinja',
    type: 'clinic',
    totalOrders: 12,
    totalSpent: 18920.30,
    status: 'active',
    registrationDate: '2024-07-10'
  },
  {
    id: 'CUST-004',
    name: 'Rural Health Center',
    email: 'rural@healthcenter.ug',
    phone: '+256 776 456 789',
    address: 'Village Road, Mbale',
    type: 'clinic',
    totalOrders: 6,
    totalSpent: 9875.40,
    status: 'active',
    registrationDate: '2024-09-05'
  },
  {
    id: 'CUST-005',
    name: 'Dr. Sarah Muwonge',
    email: 'sarah.muwonge@email.com',
    phone: '+256 776 567 890',
    address: 'Private Practice, Entebbe',
    type: 'individual',
    totalOrders: 3,
    totalSpent: 2340.00,
    status: 'active',
    registrationDate: '2024-10-12'
  }
]

export const mockStats: StatCard[] = [
  {
    title: 'Total Products',
    value: mockProducts.length,
    change: 12,
    changeType: 'increase',
    icon: 'Package',
    color: 'primary'
  },
  {
    title: 'Total Orders',
    value: mockOrders.length,
    change: 8,
    changeType: 'increase',
    icon: 'ShoppingCart',
    color: 'success'
  },
  {
    title: 'Total Customers',
    value: mockCustomers.length,
    change: 3,
    changeType: 'increase',
    icon: 'Users',
    color: 'warning'
  },
  {
    title: 'Revenue',
    value: `UGX ${mockOrders.reduce((sum, order) => sum + order.totalAmount, 0).toLocaleString()}`,
    change: 15,
    changeType: 'increase',
    icon: 'DollarSign',
    color: 'danger'
  }
]

