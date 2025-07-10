import React from 'react'
import ProductCard from './ProductCard'
import type { Product } from '../types/products'

interface Props {
  products: Product[]
  updateCart: (product: Product, quantity: number) => void
}

const ProductGrid: React.FC<Props> = ({ products, updateCart }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.name}
          product={product}
          updateCart={updateCart}
        />
      ))}
    </section>
  )
}

export default ProductGrid
