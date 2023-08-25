import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../../types"

type CartState = {
  itens: Product[]
  isOpen: boolean
}

const initialState: CartState = {
  isOpen: false,
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.itens.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  },
})

export const {add, open, close} = cartSlice.actions
export default cartSlice.reducer
