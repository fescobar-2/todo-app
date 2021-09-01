import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";

const App = () => {
  return(
    <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
  )
}

export default App;
