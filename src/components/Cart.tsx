import React from 'react'
import neutral from '../../public/assets/images/icon-carbon-neutral.svg'
import emptyIcon from '../../public/assets/images/illustration-empty-cart.svg'
import closeIcon from '../../public/assets/images/icon-remove-item.svg'

export interface CartItem {
  name: string
  quantity: number
  price: number
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
}

interface CartProps {
  items: CartItem[]
  removeFromCart: (productName: string) => void
    onCheckout: () => void
}

export const Cart: React.FC<CartProps> = ({ items, removeFromCart,  onCheckout  }) => {
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="bg-rose-50 p-6 rounded-xl shadow-md w-full max-w-lg mx-auto text-center">
        <h2 className="text-red text-xl font-bold mb-6 align-left">Your Cart ({totalQuantity})</h2>
        <img src={emptyIcon} alt="Empty cart" className="mx-auto w-40 h-auto" />
        <p className='text-rose-500'>Your items will be added here</p>
      </div>
    )
  }

  return (
    <div className="bg-rose-50 p-6 rounded-xl shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-red text-xl font-bold mb-4">
        Your Cart ({totalQuantity} items)
      </h2>

      <ul className="space-y-4 pb-4">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between border-b border-rose-100 pb-4">
            <div>
              <p className="font-medium text-rose-900">{item.name}</p>
              <div className="text-sm text-rose-500">
                <span className="text-red font-bold pr-4">{item.quantity}x</span>
                <span className="pr-1">${item.price.toFixed(2)}</span>
                <span className="text-rose-500 font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
            <div>
              {/* Optional remove icon could go here */}
              <img src={closeIcon} alt="Remove item" className="w-4 h-4 cursor-pointer"
              onClick={() => removeFromCart(item.name)} />
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-between py-4">
        <p>Order total</p>
        <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
      </div>

      <div className="flex justify-center items-center text-sm text-rose-500 gap-2 mb-4 text-center bg-rose-100 py-3 rounded-sm">
        <img src={neutral} alt="icon-neutral" />
        <span>
          This is a <span className="font-semibold text-rose-900">carbon-neutral</span> delivery
        </span>
      </div>

      <div className="flex justify-center ">
        <button onClick={onCheckout}
        className="flex justify-center w-full items-center bg-red text-white py-2 lg:px-34 rounded-3xl hover:bg-rose-800 transition hover:cursor-pointer">
          Confirm Order
        </button>
      </div>
    </div>
  )
}

export default Cart
