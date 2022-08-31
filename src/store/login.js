import { combineReducers } from "@reduxjs/toolkit";
import createAsyncSlice from "./helper/createAsyncSlice";
import getLocalStorage from "./helper/getLocalStorage";
import { removePhotos } from './photos'

const token = createAsyncSlice({
  name: 'token',
  initialState: {
    data: {
      token: getLocalStorage('token', null)
    }
  },
  reducers: {
    fetchSuccess: {
      reducer(state, action){
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null,
        }
      },
      prepare(payload) {
        return {
          payload,
          meta: {
            localStorage: {
              key: 'token',
              value: payload.token
            },
          },
        }
      },
    },
    removeToken(state) {
      return {
        ...state,
        data: null
      }
    },
  },

  fetchConfig(user) {
    return { 
      url: 'https://apidogs.murilothom.com/json/jwt-auth/v1/token',
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }
    }
  } 
})

const user = createAsyncSlice({
  name: 'user',
  reducers: {
    removeUser(state) {
      return {
        ...state,
        data: null
      }
    },
  },
  fetchConfig(token) {
    return { 
      url: 'https://apidogs.murilothom.com/json/api/user',
      options: {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token
        },
      },
    }
  },
})

const reducer = combineReducers({token: token.reducer, user: user.reducer})

const fetchToken = token.asyncAction
const fetchUser = user.asyncAction

const { removeToken } = token.actions
const { removeUser } = user.actions

export default reducer

export const login = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user))
    payload.token !== undefined && await dispatch(fetchUser(payload.token))
  } catch (error) {
    
  }
}

export const autoLogin = () => async (dispatch, getState) => {
  const state = getState()
  const { token } = state.login.token.data
  token && await dispatch(fetchUser(token))
}

export const userLogout = () => (dispatch) => {
  dispatch(removeUser())
  dispatch(removeToken())
  dispatch(removePhotos())
  window.localStorage.removeItem('token')
}