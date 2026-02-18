import React from 'react'
import Card from './components/Props/Card'
import First from './components/prop-drilling/First'
import Mystyle from './components/css/Mystyle'
import Mystyle2 from './components/css/Mystyle2'
import "bootstrap/dist/css/bootstrap.min.css"
import Usestate from './components/Hooks/Usestate'
import UseEffect from './components/Hooks/UseEffect'
import {Route,  Routes } from 'react-router-dom'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Products from './components/pages/Products'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import BlogPostPage from './components/BlogProject/BlogPostPage'

const App = () => {



  return (
    <>
    


    {/* props  */}
    {/* <Card title="first card" paragraph="this is first paragraph" />
    <Card title="2nd card" paragraph="2nd paragraph "/>  */}
    

    {/* prop-drilling  */}
    {/* <First name="satyam"/>  */}


      {/* <Mystyle />
      <Mystyle2 /> */}



        {/* <Usestate /> */}
        {/* <UseEffect /> */}


        <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element = {<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element ={<Contact />}/>
            <Route path="/blogs/:id" element ={<BlogPostPage />}/>
          </Routes>


        
       

    

    </>
  )
}

export default App