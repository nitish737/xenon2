import React, { useState } from "react";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Regiser/Register";
import {Routes, Route} from "react-router-dom" ;
import Home from "./components/Home/Home";




const App = () => {
  const [navActive, setNavActive] = useState(false) ;
  return(
    <>
      <Navbar navActive = {navActive} setNavActive = {setNavActive}/>
    <Routes>
      <Route exact path = "/" element = {<Home/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/register" element = {<Register/>}/>
      <Route path = "/contact" element = {<Contact/>}/>
      {/* <Route component = {Error}/> */}
    </Routes>
    </>
  )
}

export default App ;