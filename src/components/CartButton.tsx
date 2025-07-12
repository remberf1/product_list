
import cartIcon from '../../public/assets/images/icon-add-to-cart.svg'
import plusIcon from '../../public/assets/images/icon-increment-quantity.svg'
import minusIcon from '../../public/assets/images/icon-decrement-quantity.svg'
import type { Product } from '../types/products'
interface Props {
  product: Product
  quantity: number          // controlled prop
  updateCart: (product: Product, quantity: number) => void
}

const CartButton: React.FC<Props> = ({ product, quantity, updateCart }) => {
  const handleAddToCart = () => updateCart(product, 1)
  const increment = () => updateCart(product, quantity + 1)
  const decrement = () => updateCart(product, quantity > 1 ? quantity - 1 : 0)

  const baseClasses =
    'flex items-center w-[140px] h-[46px] rounded-3xl border-2 border-rose-400 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red focus:ring-offset-2 hover:cursor-pointer'

  return (
    <div>
      {quantity === 0 ? (
        <button
          onClick={handleAddToCart}
          className={`${baseClasses} bg-rose-50 hover:bg-red text-rose-900 justify-center hover:text-white font-medium text-sm gap-2`}
        >
          <img className="w-4 h-4" src={cartIcon} alt="cart" />
          Add to cart
        </button>
      ) : (
        <div
          className={`${baseClasses} bg-red px-3 text-rose-900 text-sm font-medium justify-between`}
        >
          <button
            onClick={decrement}
            className="hover:text-rose-600 border-2 rounded-3xl border-amber-50 p-1 hover:cursor-pointer"
          >
            <img src={minusIcon} alt="decrease" />
          </button>
          <span className="flex text-center">{quantity}</span>
          <button
            onClick={increment}
            className="hover:text-rose-600 border-2 rounded-3xl border-amber-50 p-1 hover:cursor-pointer"
          >
            <img src={plusIcon} alt="increase" />
          </button>
        </div>
      )}
    </div>
  )
}

export default CartButton