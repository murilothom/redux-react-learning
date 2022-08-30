import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementar, incrementar } from "./store/contador";
import { abrir, fechar } from "./store/modal";

export function App() {
  const { contador, modal } = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div>
      {modal.isModalOpen &&
        <>
          <h1>Total: {contador.total}</h1>
          <button onClick={() => dispatch(incrementar())}>Incrementar</button>
          <button onClick={() => dispatch(decrementar())}>Decrementar</button>
        </>
      }
      <button onClick={() => dispatch(abrir())}>Mostrar conteúdo</button>
      <button onClick={() => dispatch(fechar())}>Esconder conteúdo</button>
    </div>
  );
}
