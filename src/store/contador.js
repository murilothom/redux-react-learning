import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: 'contador',
  initialState: {
    total: 0
  },
  reducers: {
    incrementar(state) {
      state.total+=1
    },
    decrementar(state) {
      state.total-=1
    },
  }
})

export const { incrementar, decrementar } = slice.actions

export default slice.reducer