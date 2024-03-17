import React from 'react'
import './Counter.css'

const Counter = ({num , text1 , text2}) => {
  return (
    
        <div className="col-lg-4">
            <div className="counter">
            <h2>{num}</h2>
            <p className="count-text ">{text1}<br/>{text2}</p>
        </div>
    </div>
  )
}

export default Counter