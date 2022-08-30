import { combineReducers, configureStore } from '@reduxjs/toolkit'
import login from './login'
import photos from './photos'
import localStorage from './middlewares/localStorage'

const reducer = combineReducers({ login, photos })

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), localStorage]
  })

export default store