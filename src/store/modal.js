import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'modal',
  initialState: {
    isModalOpen: false
  },
  reducers: {
    abrir(state) {
      return { isModalOpen: true }
    },
    fechar(state) {
      return { isModalOpen: false }
    }
  }
})

export const { abrir, fechar } = slice.actions

export default slice.reducer