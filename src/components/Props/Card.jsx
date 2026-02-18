import React from 'react'

function Card(p) {
  return (
    <div>
        <h1>{p.title}</h1>
        <p>{p.paragraph}</p>
        <button>click</button>
    </div>

    
  )
}

export default Card