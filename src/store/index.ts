import { configureStore } from '@reduxjs/toolkit'
import listaReducer from './reducers/lista'
import filtroReducer from './reducers/filtro'
import cartReducer from './reducers/cart'

export const store = configureStore({
  reducer: {
    lista: listaReducer,
    cart: cartReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
