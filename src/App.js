import React from "react";
import './styles/App.css';
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Content from "./components/content/Content";

function App() {

  return (

      <BrowserRouter>
        <Menu />
        <Content />
      </BrowserRouter>

    
  )
  
}

export default App;