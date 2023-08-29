import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  texto: string
}

const initialState: FiltroState = {
  texto: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTexto: (state, action: PayloadAction<string>) => {
      state.texto = action.payload
    }
  }
})

export const { alteraTexto } = filtroSlice.actions

export default filtroSlice.reducer
