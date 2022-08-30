import { combineReducers, configureStore } from '@reduxjs/toolkit'
import contador from './contador'
import modal from './modal'
import logger from './middlewares/logger'


const reducer = combineReducers({ contador, modal })
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger]
  })

export default store