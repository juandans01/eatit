import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Numbers from './components/Numbers'

const Timeline = () => {
  const [hour, handleHour] = useState(moment().format('HH'))
  const [minutes, handleMinutes] = useState(moment().format('mm'))

  // console.log(hour + minutes)

  useEffect(() => {
    const interval = setInterval(() => {
      handleHour(moment().format('HH'))
      handleMinutes(moment().format('mm'))
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Wrapper>
      <Numbers />
      <Line/>
      <CurrentLine hour={hour} minutes={minutes} />
      <Current  hour={hour} minutes={minutes} >        
      </Current>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`

const Line = styled.div`
  position: absolute;
  top: 0;
  left: 70px;
  height: 2420px;
  width: 4px;
  border-radius: 30px;
  background: #f3c623;
`

const Current = styled.span`
  position: absolute;
  top: ${props => props.hour + props.minutes}px;
  left: 55px;
  height: 30px;
  width: 30px;
  background: white;
  border-radius: 50%;
  border: 2px solid #fe346e;
`

const CurrentLine = styled.div`
  position: absolute;
  top: ${props => props.hour + (parseInt(props.minutes) + 17) }px;
  width: 100%;
  height: 1px;
  background: #fe346e;
  z-index: 2;
`

export default Timeline