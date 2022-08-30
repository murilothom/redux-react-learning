import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin, login } from "./store/login";
import { somar } from "./store/contador";

export function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const { data } = useSelector(state => state.login.user)

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(login({username, password}))
  }

  useEffect(() => {
    dispatch(autoLogin())
  }, [dispatch])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{display: 'block'}} htmlFor="username">Username</label>
        <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label style={{display: 'block'}} htmlFor="password">Password</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button style={{display: 'block', marginTop: '8px'}}>Enviar</button>
      </form>
      <p>{data?.username}</p>
      <button onClick={() => dispatch(somar(5))}>Somar</button>
    </div>
  );
}
