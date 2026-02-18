import React, { useEffect, useState } from 'react'

function UseEffect() {


    const [text,settext] = useState("hello world")
    const [num, setnum] = useState(0)

    useEffect(()=>{
        console.log("component is render")
    },[])


  return (
    <div>
        <h1>{num}</h1>
        <button onClick={()=>setnum(num+1)}>click</button>


        <h2>{text}</h2>
        <button onClick={()=>settext("new word")}>click</button>
    
    </div>
  )
}

export default UseEffect



// useeffect => when we have to perform sideeffect task in our functional component then we use useefffect
// sideeffect task => settimout, setinterval ,api call