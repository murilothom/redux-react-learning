import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "./store/login";

export function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const data = useSelector(state => state.login.data)
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(fetchToken({username, password}))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{display: 'block'}} htmlFor="username">Username</label>
        <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label style={{display: 'block'}} htmlFor="password">Password</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button style={{display: 'block', marginTop: '8px'}}>Enviar</button>
      </form>
      <p>{data?.token}</p>
    </div>
  );
}
