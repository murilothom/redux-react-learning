import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: 'contador',
  initialState: {
    total: 0
  },
  reducers: {
    incrementar(state) {
      return { total: state.total + 1}
    },
    decrementar(state) {
      return { total: state.total - 1}
    },
    somar: {
      reducer(state, action) {
        return { total: state.total + action.payload }
      },
      prepare(payload) {
        return {
          payload, meta: 'local'
        }
      },
    },
  },
})

export const { incrementar, decrementar, somar } = slice.actions

export default slice.reducer