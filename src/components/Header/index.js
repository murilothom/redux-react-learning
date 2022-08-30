import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../store/login'

import styles from './Header.module.css'

export const Header = () => {
  const { user, token } = useSelector(state => state.login)
  const isLoading = token.loading || user.loading
  const dispatch = useDispatch()

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mini Dogs</h1>
      <button
      aria-label='Logout'
      className={`
      ${styles.login}
      ${isLoading && styles.loading}
      ${user.data && styles.logged}
      `}
      onClick={() => dispatch(userLogout())}
      ></button>
    </header>
  )
}