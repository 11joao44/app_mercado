// src/components/Cart.tsx

import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/types/types'
import PriceQuantityForm from './PriceQuantForm/PriceQuantityForm'

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cartItems)

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <PriceQuantityForm cartItem={item} />
        </div>
      ))}
    </div>
  )
}

export default Cart
