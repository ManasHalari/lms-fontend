// import Footer from "./Components/footer"
// import HomeLayout from "./Layouts/HomeLayout"
import "./App.css"

import { Route,Routes } from "react-router-dom"

import AboutUs from "./Layouts/AboutUs"
import Login from "./Layouts/Login"
import SignUp from "./Layouts/SignUp"
import CourseList from "./Pages/Course/CourseList"
import HomePage from "./Pages/HomePage"
import PageNotFound from "./Pages/PageNotFound"


function App() {
  

  return (
  <>
  <Routes>
    <Route path="/" element={<HomePage />} /> 
    <Route path="/about" element={<AboutUs />} /> 
    <Route path="/signup" element={<SignUp />} /> 
    <Route path="/login" element={<Login />} /> 
    <Route path="/courses" element={<CourseList/> } /> 
    <Route path="*" element={<PageNotFound/>} />
  </Routes>

  </>
  )
}

export default App
