import React from "react";
import { createElement } from 'react';
import { Header } from "./components/Header/Header";
import './app.css'
const App = () => {
  return createElement(Header, {})
}

export default App