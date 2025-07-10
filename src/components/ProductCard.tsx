import React from 'react'
import type { Product } from '../types/products'
import CartButton from './CartButton'

interface Props {
  product: Product
  updateCart: (product: Product, quantity: number) => void
}

const ProductCard: React.FC<Props> = ({ product, updateCart }) => {
  const { name, category, price, image } = product
  const focusRingClasses = 'focus:outline-none focus:ring-2 focus:ring-red'

  return (
    <article className="product-card relative rounded-2xl ">
      <picture>
        <source media="(min-width: 1024px)" srcSet={image.desktop} />
        <source media="(min-width: 768px)" srcSet={image.tablet} />
        <source media="(max-width: 767px)" srcSet={image.mobile} />
        <img
          tabIndex={0}
          className={`rounded-2xl ${focusRingClasses}`}
          src={image.thumbnail}
          alt={name}
          loading="lazy"
        />
      </picture>

      <div className={`absolute bottom-18 left-1/2 transform -translate-x-1/2 z-10 ${focusRingClasses}`} tabIndex={-1}>
        <CartButton product={product} updateCart={updateCart} />
      </div>

      <div className="product-info mt-4 px-2">
        <p className="text-rose-400 font-semibold">{category}</p>
        <h3 className="text-rose-900 font-bold">{name}</h3>
        <p className="text-red font-bold">${price.toFixed(2)}</p>
      </div>
    </article>
  )
}

export default ProductCard
