// import Footer from "./Components/footer"
// import HomeLayout from "./Layouts/HomeLayout"
import "./App.css"

import { Route,Routes } from "react-router-dom"

import AboutUs from "./Layouts/AboutUs"
import HomePage from "./Pages/HomePage"


function App() {
  

  return (
  <>
  <Routes>
    <Route path="/" element={<HomePage />} /> 
    <Route path="/about" element={<AboutUs />} /> 
  </Routes>

  </>
  )
}

export default App
