import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types/types'

type ListState = {
  isOpen: boolean
  produtos: Product[]
  editedPrices: { [productId: number]: number }
  editedUnits: { [productId: number]: number }
}

const initialState: ListState = {
  isOpen: false,
  produtos: [],
  editedPrices: {},
  editedUnits: {}
}

const listSlice = createSlice({
  name: 'lista',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const produto = state.produtos.find(
        (item) => item.id === action.payload.id
      )

      if (!produto) {
        state.produtos.push(action.payload)
      } else {
        alert('O produto já esta no carrinho')
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    updatePrices: (
      state,
      action: PayloadAction<{ productId: number; newPrice: number }>
    ) => {
      const { productId, newPrice } = action.payload
      state.editedPrices[productId] = newPrice
    },
    updateUnits: (
      state,
      action: PayloadAction<{ productId: number; newUnits: number }>
    ) => {
      const { productId, newUnits } = action.payload
      state.editedUnits[productId] = newUnits
    }
  }
})

export const { add, open, close, updatePrices, updateUnits } = listSlice.actions

export default listSlice.reducer
