import { configureStore } from '@reduxjs/toolkit'
import listaReducer from './redurcers/lista'
import filtroReducer from './redurcers/filtro'

export const store = configureStore({
  reducer: {
    lista: listaReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
