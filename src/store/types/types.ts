// src/store/types.ts

export interface Product {
  id: number
  name: string
  price?: number
}

export interface CartItem extends Product {
  name: string
  quantity: number
}

export interface RootState {
  productList: Product[]
  cartItems: CartItem[]
}
