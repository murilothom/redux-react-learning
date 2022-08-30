import { combineReducers, configureStore } from '@reduxjs/toolkit'
import login from './login'
import localStorage from './middlewares/localStorage'

const reducer = combineReducers({ login })

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), localStorage]
  })

export default store