import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'login',
  initialState: {
    token: {
      loading: false,
      data: null,
      error: null
    },
    user: {
      loading: false,
      data: null,
      error: null
    }
  },
  reducers: {
    fetchTokenStarted(state) {
      return {
        ...state,
        token: {
          ...state.token,
          loading: true
        }
      }
    },
    fetchTokenSuccess(state, action) {
      return {
        ...state,
        token: {
          ...state.token,
          loading: false,
          data: action.payload,
          error: null
        }
      }
    },
    fetchTokenError(state, action) {
      return {
        ...state,
        token: {
          ...state.token,
          loading: false,
          data: null,
          error: action.payload
        }
      }
    },
    fetchUserStarted(state) {
      return {
        ...state,
        user: {
          ...state.user,
          loading: true
        }
      }
    },
    fetchUserSuccess(state, action) {
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          data: action.payload,
          error: null
        }
      }
    },
    fetchUserError(state, action) {
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          data: null,
          error: action.payload
        }
      }
    },
  }
})

const {
  fetchTokenStarted,
  fetchTokenSuccess,
  fetchTokenError,
  fetchUserStarted,
  fetchUserSuccess,
  fetchUserError,

  } = slice.actions

export const fetchToken = (user) => async (dispatch) => {
  try {
    dispatch(fetchTokenStarted())
    const response = await fetch('https://apidogs.murilothom.com/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await response.json()
    return dispatch(fetchTokenSuccess(data))
  } catch (error) {
    return dispatch(fetchTokenError(error.message))
  }
}

export const fetchUser = (token) => async (dispatch) => {
  try {
    dispatch(fetchUserStarted())
    const response = await fetch('https://apidogs.murilothom.com/json/api/user', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    const data = await response.json()
    return dispatch(fetchUserSuccess(data))
  } catch (error) {
    return dispatch(fetchUserError(error.message))
  }
}

export const login = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user))
    if(payload.token !== undefined) await dispatch(fetchUser(payload.token))
  } catch (error) {
    
  }
}

export default slice.reducer