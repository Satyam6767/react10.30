import React from 'react'

import "./Mystyle.css"

function Mystyle() {


    const heading = {
        color: "blue",
        border:"2px solid red"
    }




  return (
    <div>
        <h1 style={{
            backgroundColor: "red",
            color: "white", 
            marginRight: "5px"
        }}>this is for css</h1>



        <h3 style={heading}>hello this is h3</h3>

        <div style={heading}>
            hello this is div
        </div>



        <div className='head' >hello this is external </div>


        <button className='btn btn-primary'>click</button>




    </div>
  )
}

export default Mystyle


