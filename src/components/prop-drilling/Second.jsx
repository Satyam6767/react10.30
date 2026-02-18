import React from 'react'
import Third from './Third'

function Second({name}) {
  return (
    <div>
        this is second component
        
        <Third name="satyam" />
    </div>
  )
}

export default Second