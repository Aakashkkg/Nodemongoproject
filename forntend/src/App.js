import React from "react"
import './App.css';
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery";
import "bootstrap/dist/js/bootstrap";

import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import New1 from "./New";


function App() {
  return (
    <>

<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/new" element={<New1/>}/>
  </Routes>
</Router>

   
    </>
  );
}

export default App;
