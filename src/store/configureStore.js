import { combineReducers, configureStore } from '@reduxjs/toolkit'
import contador from './contador'
import modal from './modal'
import login from './login'
import localStorage from './middlewares/localStorage'
// import logger from './middlewares/logger'


const reducer = combineReducers({ contador, modal, login })
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), localStorage]
  })

export default store