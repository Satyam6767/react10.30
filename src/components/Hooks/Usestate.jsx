import React, { useState } from 'react'

function Usestate() {

  // let text = "hello world"

  // function change(){
  //   text = "new word"
  //   console.log(text)
  // }

  // const [text , settext] = useState("hello world")

  // function change(){
  //   settext("new word")
  //   console.log(text)
  // }

  const [number, setnumber] = useState(0)

  // function change(){
  //   setnumber(number+1)
  // }

  return (
    <div>
      
      {/* <h1>{text}</h1>
      <button onClick={()=>settext("new word")}>click</button> */}

       <h1>{number}</h1>
      <button onClick={()=>setnumber(number+1)}>+</button>
      <button onClick={()=>setnumber(number-1)}>-</button>

    </div>
  )
}

export default Usestate


// usestate => The most important Hook in . It is used to save and update data in Functional Components . 
