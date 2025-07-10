// components/ConfirmOrder.tsx
import React from 'react'
import type { CartItem } from './Cart'
import tick from '../../public/assets/images/icon-order-confirmed.svg'

interface ConfirmOrderProps {
  items: CartItem[]
  onBack: () => void
  onConfirm: () => void
}

const ConfirmOrder: React.FC<ConfirmOrderProps> = ({ items, onConfirm }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-lg mx-auto py-6 px-5 max-h-[90vh] overflow-y-auto 
    fixed top-[100px] inset-x-0 h-[calc(100vh-100px)] z-50 
    lg:static lg:h-auto lg:rounded-xl">
      
      <div className="px-8">
        <div className='-ml-2 pt-6'>
        <img src={tick} alt="Tick" className="w-10 h-10 mb-2 " />

        </div>
        <h2 className="md:text-4xl md:-ml-1 font-bold text-rose-900 md:mb-2 text-5xl mb-4">Order Confirmed</h2>
        <p className="text-rose-500 mb-10">We hope you enjoy your food!</p>
      </div>

      <div className="bg-rose-50 px-8 py-4 mb-8 rounded-md">
        <ul className="space-y-3 mb-6 ">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-4 border-b border-rose-100 pb-4  ">
              {/* Product Image */}
              <img
                src={item.image.thumbnail}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg shrink-0"
              />

              {/* Info Block */}
              <div className="flex justify-between items-center w-full">
                <div>
                  <p className="text-rose-900 font-medium">{item.name}</p>
                  <p className="text-sm text-red">{item.quantity}x</p>
                </div>

                <span className="text-rose-900 font-semibold whitespace-nowrap">
                  ${(item.quantity * item.price).toFixed(2)}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* Order Total */}
        <div className="flex justify-between items-center  pt-4">
          <span className="text-rose-900 font-medium text-lg">Order Total</span>
          <span className="text-rose-900 font-semibold text-lg">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 mt-6 px-8">
        <button
          onClick={onConfirm}
          className="bg-red text-white py-2 rounded-3xl hover:bg-rose-800 w-full"
        >
          Start a New Order
        </button>
      </div>
    </div>
  )
}

export default ConfirmOrder
