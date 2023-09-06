import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartState {
  editedData: {
    [productId: number]: { price: number; unit: number }
  }
  addedToCart: number[]
}

const initialState: CartState = {
  editedData: {},
  addedToCart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToEditedData: (
      state,
      action: PayloadAction<{ productId: number; price: number; unit: number }>
    ) => {
      const { productId, price, unit } = action.payload
      state.editedData[productId] = { price, unit }
    },
    removeFromEditedData: (state, action: PayloadAction<number>) => {
      const productId = action.payload
      delete state.editedData[productId]
    },
    addToCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload
      state.addedToCart.push(productId)

      // Salvar no localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.addedToCart))
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload
      state.addedToCart = state.addedToCart.filter((id) => id !== productId)

      // Atualizar o localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.addedToCart))
    }
  }
})

export const {
  addToEditedData,
  removeFromEditedData,
  addToCart,
  removeFromCart
} = cartSlice.actions

export default cartSlice.reducer
