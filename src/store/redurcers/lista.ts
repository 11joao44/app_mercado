import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ListState = {
  isOpen: boolean
  pesquisar: string
  produtos: {
    id: number
    nome: string
  }[]
  produtosSelecionados: {
    id: number
    nome: string
    quantidade: number
    preco: number
  }[]
}

const initialState: ListState = {
  isOpen: false,
  pesquisar: '',
  produtos: [],
  produtosSelecionados: []
}

const listSlice = createSlice({
  name: 'lista',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    selectProduct: (state, action) => {
      const { id, nome, preco } = action.payload
      state.produtosSelecionados.push({
        id,
        nome,
        quantidade: 0,
        preco
      })
    },
    search: (state, action: PayloadAction<string>) => {
      state.pesquisar = action.payload
    }
  }
})

export const { open, close, selectProduct, search } = listSlice.actions

export default listSlice.reducer
