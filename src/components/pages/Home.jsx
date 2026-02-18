import { Button } from 'bootstrap'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlogHomePage from '../BlogProject/BlogHomePage'
import HomeClass from '../ClassComponent/HomeClass'
import Weather from '../Weather/Weather'
import One from '../Redux/One'

function Home() {


    const navigate = useNavigate()

  return (
    <div>
        Home
        
       {/* <button onClick={()=> navigate("/contact")}>click to navigate on contact</button> */}

      

      {/* <BlogHomePage /> */}


      {/* <HomeClass /> */}
        
        {/* <Weather /> */}
         <One />



        
        </div>
  )
}

export default Home