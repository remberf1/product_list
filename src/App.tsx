import  { useState } from 'react'
import ProductGrid from './components/ProductGrid'
import Cart from './components/Cart'
import ConfirmOrder from './components/ConfirmOrder'
import type { Product } from './types/products'
import data from './data/data.json'
import type { CartItem } from './components/Cart'

function App() {
 const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [showConfirm, setShowConfirm] = useState(false)

  const removeFromCart = (productName: string) => {
    setCartItems(prev => prev.filter(item => item.name !== productName))
  }

  const products: Product[] = data

  const updateCart = (product: Product, quantity: number) => {
  setCartItems(prev => {
    const exists = prev.find(item => item.name === product.name)

    if (quantity === 0) {
      return prev.filter(item => item.name !== product.name)
    }

    if (exists) {
      return prev.map(item =>
        item.name === product.name ? { ...item, quantity } : item
      )
    }

    return [...prev, {
      name: product.name,
      quantity,
      price: product.price,
      image: product.image, // ✅ include full image object
    }]
  })
}

  return (
    <div className="bg-rose-100 min-h-screen px-4 md:px-16 relative">
      <div className="py-4">
        <h1 className="text-4xl font-bold text-rose-900 relative top-7 py-4">Desserts</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="md:col-span-2">
          <ProductGrid products={products} updateCart={updateCart} />
        </div>
        <div className="md:col-span-1 lg:-mt-20 md:pl-5">
          <Cart
            items={cartItems}
            removeFromCart={removeFromCart}
            onCheckout={() => setShowConfirm(true)}
          />
        </div>
      </div>

      {showConfirm && (
        <>
          {/* Modal overlay */}
          <div
            className="fixed   inset-x-0 bg-black/35  z-40"
            onClick={() => setShowConfirm(false)}
            aria-hidden="true"
          />
          {/* Modal content */}
          <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <ConfirmOrder
              items={cartItems}
              onBack={() => setShowConfirm(false)}
              onConfirm={() => {
                setShowConfirm(false)
              }}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default App
