import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./Components/Hero";
const App = () => {
  return(
    <Router>
      <Navbar/>
      <Hero/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App;