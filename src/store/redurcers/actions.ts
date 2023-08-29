// src/store/actions.ts

import { Product, CartItem } from '../types/types'

export const ADD_TO_CART = 'ADD_TO_CART'
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'

interface AddToCartAction {
  type: typeof ADD_TO_CART
  payload: Product
}

interface UpdateCartItemAction {
  type: typeof UPDATE_CART_ITEM
  payload: CartItem
}

export type CartActionTypes = AddToCartAction | UpdateCartItemAction

// ...
