import { configureStore } from '@reduxjs/toolkit'
import listaReducer from './reducers/lista'
import filtroReducer from './reducers/filtro'
import cartReducer, { addToCart, addToEditedData } from './reducers/cart'

export const store = configureStore({
  reducer: {
    lista: listaReducer,
    cart: cartReducer,
    filtro: filtroReducer
  }
})

// Carregar itens do carrinho do localStorage ao inicializar o aplicativo
const savedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
savedCartItems.forEach((productId: number) => {
  store.dispatch(addToCart(productId))
})

// Carregar os valores de preço e unidade do localStorage para os itens do carrinho
const savedEditedData = JSON.parse(localStorage.getItem('editedData') || '{}')
// Disparar ação para atualizar o estado do Redux com os valores carregados
Object.keys(savedEditedData).forEach((productId) => {
  store.dispatch(
    // Substitua 'addToEditedData' pelo nome da ação correta em seu reducer
    addToEditedData({
      productId: parseInt(productId),
      price: savedEditedData[productId].price,
      unit: savedEditedData[productId].unit
    })
  )
})

export type RootReducer = ReturnType<typeof store.getState>
