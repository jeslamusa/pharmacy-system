import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import ProductCatalog from './pages/ProductCatalog'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import AdminDashboard from './pages/AdminDashboard'
import ManagerDashboard from './pages/ManagerDashboard'
import SupervisorDashboard from './pages/SupervisorDashboard'

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
        
        {/* Role-specific Dashboard Routes */}
        <Route 
          path="/dashboard/admin" 
          element={
            <Layout>
              <AdminDashboard />
            </Layout>
          }
        />
        <Route 
          path="/dashboard/manager" 
          element={
            <Layout>
              <ManagerDashboard />
            </Layout>
          }
        />
        <Route 
          path="/dashboard/supervisor" 
          element={
            <Layout>
              <SupervisorDashboard />
            </Layout>
          }
        />
        
        {/* Dashboard Management Routes */}
        <Route 
          path="/dashboard/products" 
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
        <Route 
          path="/orders" 
          element={
            <Layout>
              <Orders />
            </Layout>
          }
        />
        <Route 
          path="/customers" 
          element={
            <Layout>
              <Customers />
            </Layout>
          }
        />
        <Route 
          path="/reports" 
          element={
            <Layout>
              <Reports />
            </Layout>
          }
        />
        <Route 
          path="/settings" 
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default App

