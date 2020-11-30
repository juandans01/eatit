import React from 'react'
import styled from 'styled-components'


const numberComponents = () =>{
  let times = []
  for (let i = 0; i <= 24; i++) {
    let time = i.toString().length == 1 ? `0${i}:00` : `${i}:00`
    times.push((
      <Time key={i} position={i * 100}>
        { time }
      </Time>
    ))
  } 
  return times
}

const Numbers = () => {
  return numberComponents() 
}

const Time = styled.span`
  position: absolute;
  top: ${props => props.position}px;
  left: 0;
  color: black;
  font-weight: 500;
`

export default Numbers