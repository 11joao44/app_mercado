import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types/types'

type ListState = {
  isOpenList: boolean
  isOpenCart: boolean
  produtos: Product[]
  editedPrices: { [productId: number]: number }
  editedUnits: { [productId: number]: number }
}

const initialState: ListState = {
  isOpenList: false,
  isOpenCart: false,
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
    removeItem: (state, action: PayloadAction<number>) => {
      const productId = action.payload
      delete state.editedPrices[productId]
      delete state.editedUnits[productId]
      state.produtos = state.produtos.filter((item) => item.id !== productId)
    },
    openList: (state) => {
      state.isOpenList = true
    },
    closeList: (state) => {
      state.isOpenList = false
    },
    openCart: (state) => {
      state.isOpenCart = true
    },
    closeCart: (state) => {
      state.isOpenCart = false
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

export const {
  add,
  removeItem,
  openCart,
  closeCart,
  openList,
  closeList,
  updatePrices,
  updateUnits
} = listSlice.actions

export default listSlice.reducer
