import React from 'react'
import Com_C from './Com_C'

const Com_B = (props) => {
  return (
    <div>
      <h1>B Institute Of {props.name}</h1>
      <Com_C name={props.name}/>
    </div>
  )
}

export default Com_B
