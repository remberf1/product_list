import React from 'react'
import ProductCard from './ProductCard'
import type { Product } from '../types/products'
import type { CartItem } from './Cart'  // Make sure this import path is correct

interface Props {
  products: Product[]
  updateCart: (product: Product, quantity: number) => void
  cartItems: CartItem[]     // add cartItems to props
}

const ProductGrid: React.FC<Props> = ({ products, updateCart, cartItems }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => {
        const cartItem = cartItems.find(item => item.name === product.name)
        const quantity = cartItem ? cartItem.quantity : 0

        return (
          <ProductCard
            key={product.name}
            product={product}
            updateCart={updateCart}
            quantity={quantity}   // pass the found quantity here
          />
        )
      })}
    </section>
  )
}

export default ProductGrid
