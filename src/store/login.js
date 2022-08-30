import { combineReducers } from "@reduxjs/toolkit";
import createAsyncSlice from "./helper/createAsyncSlice";
import getLocalStorage from "./helper/getLocalStorage";

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
  fetchConfig(token) {
    return { 
      url: 'https://apidogs.murilothom.com/json/api/user',
      options: {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    }
  } 
})

const reducer = combineReducers({token: token.reducer, user: user.reducer})

const fetchToken = token.asyncAction
const fetchUser = user.asyncAction
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