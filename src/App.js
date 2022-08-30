import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementar, incrementar } from "./store/contador";

export function App() {
  const { total } = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Total: {total}</h1>
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(decrementar())}>Decrementar</button>
    </div>
  );
}
