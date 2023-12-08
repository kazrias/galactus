import React, { useState, useEffect } from "react";

import { Header } from "./components/Header/Header";
import { Screen } from "./components/Screen/Screen";
import { Background } from "./components/Background/Background";
import { Info } from "./components/Info/Info";

import './app.css'
const App = () => {

 
  return (
    <>
      <Background />
      <Header />
      <Screen />
      <Info />
    </>
  )
}

export default App