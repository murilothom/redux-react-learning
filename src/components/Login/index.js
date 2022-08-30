import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { login } from "../../store/login";

import styles from './Login.module.css'

export const Login = () => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(login({username, password}))
  }

  return (
    <form onSubmit={handleSubmit}>
    <label className={styles.label} htmlFor="username">Username</label>
    <input className={styles.input} id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    <label className={styles.label} style={{display: 'block'}} htmlFor="password">Password</label>
    <input className={styles.input} id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <button className={styles.button}>Enviar</button>
  </form>
  )
}