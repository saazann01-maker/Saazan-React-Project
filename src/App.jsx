
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Location from './components/Location/Location'
import Counter from './components/counter/counter'
import Project from './components/project/Project'
import { Routes,Route } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/Login/Login'
import Product from './components/Product/Product'
function App() {
   const person={
   firstName : "Saazan Shrestha",
   age :21,
  
   }
function handleClick(){
    
    console.log("button is clicked")
   }


  return (
    <>
      <Navbar />
      {/* <Home /> */}
      
      {/* <div className='App'>
        <h1>My Portfolio</h1>
        <p>It's me Saazan. I am 21 yrs old</p>
        <button id='btn' onClick={handleClick}>click me</button>
      </div>
      <div>{person.firstName}</div>
      <div className='footer'>
        <p>saazann@gmail.com</p>
      </div> */}
      
      <Routes>
        <Route path="/about" element={<About person={person} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/location" element={<Location />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/project" element={<Project />} />
        <Route path="/"        element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  )
}

export default App
