import React from "react";
import { Header } from "./components/Header/Header";
import { FilterScreen } from "./components/FilterScreen/FilterScreen";
import { Background } from "./components/Background/Background";
import './app.css'
const App = () => {
  return (
    <>
      <Background />
      <Header />
      <FilterScreen />
    </>
  )
}

export default App