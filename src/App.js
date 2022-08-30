import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { autoLogin } from "./store/login";

import './App.css'

import { Header } from "./components/Header";
import { Content } from "./components/Content";

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(autoLogin())
  }, [dispatch])

  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}
