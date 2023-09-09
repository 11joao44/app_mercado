import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types/types'

type ListState = {
  isOpenList: boolean
  isOpenCart: boolean
  isOpenAdd: boolean
  produtos: Product[]
  editedPrices: { [productId: number]: number }
  editedUnits: { [productId: number]: number }
}

const initialState: ListState = {
  isOpenList: false,
  isOpenCart: false,
  isOpenAdd: false,
  produtos: [],
  editedPrices: {},
  editedUnits: {}
}

const listSlice = createSlice({
  name: 'lista',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const produtoExiste = state.produtos.find(
        (item) => item.id === action.payload.id
      )

      if (produtoExiste) {
        alert('O produto já está no carrinho')
      } else {
        state.produtos.push(action.payload)
      }
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const productId = action.payload
      state.produtos = state.produtos.filter((item) => item.id !== productId) // Usando o spread operator
      delete state.editedPrices[productId]
      delete state.editedUnits[productId]
    },

    updatePrices: (
      state,
      action: PayloadAction<{ productId: number; newPrice?: number }>
    ) => {
      const { productId, newPrice } = action.payload

      if (newPrice !== undefined) {
        state.editedPrices[productId] = newPrice
      }
    },

    updateUnits: (
      state,
      action: PayloadAction<{ productId: number; newUnits?: number }>
    ) => {
      const { productId, newUnits } = action.payload

      if (newUnits !== undefined) {
        state.editedUnits[productId] = newUnits
      }
    },

    adicionarProduto: (state, action: PayloadAction<Product>) => {
      const productId = action.payload.id

      // Verifique se o produto já está na lista
      const isAlreadyInList = state.produtos.some(
        (item) => item.id === productId
      )

      if (!isAlreadyInList) {
        state.produtos.push(action.payload)
      } else {
        alert('O produto já está na lista')
      }
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
    openAdd: (state) => {
      state.isOpenAdd = true
    },
    closeAdd: (state) => {
      state.isOpenAdd = false
    }
  }
})

export const {
  add,
  removeItem,
  openCart,
  closeCart,
  openList,
  openAdd,
  closeAdd,
  closeList,
  updatePrices,
  updateUnits,
  adicionarProduto
} = listSlice.actions

export default listSlice.reducer
