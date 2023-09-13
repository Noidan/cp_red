import React from "react";
import './styles/App.css';
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Content from "./components/content/Content";
import CharHeader from "./components/charHeader/CharHeader";

function App() {

  return (

    <BrowserRouter>
      <CharHeader />
      <Content />
    </BrowserRouter>


  )

}

export default App;