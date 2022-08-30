import React from 'react'
import { useSelector } from 'react-redux'

import { Loading } from '../Loading'
import { Login } from '../Login'
import { Photos } from '../Photos'

export const Content = () => {
  const { user, token } = useSelector(state => state.login)

  if(user.loading || token.loading) return <Loading />
  if(user.data) return <Photos />
  else return <Login />
}
