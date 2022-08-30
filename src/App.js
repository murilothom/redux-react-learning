import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./store/login";

export function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(login({username, password}))
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
    </div>
  );
}
