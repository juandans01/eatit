import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'

const MealCards = ({ data }) => {
  const [dayData, changeDay] = useState([])

  
  useEffect(() => {
    changeDay(data[moment().format('DD-MM-YYYY')])

    const interval = setInterval(() => {      
      changeDay(data[moment().format('DD-MM-YYYY')])      
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  console.log('here')
  console.log(dayData)
  console.log(moment().format('DD-MM-YYYY'))
  console.log(data['29-11-2020'])
  console.log(data[moment().format('DD-MM-YYYY')])
  return (
    <CardsWrapper>
      { dayData.map((d, k) => (
        <Card key={d.start + d.end + d.title} start={d.start} end={d.end}>
          <span>{d.title}</span>
        </Card>
      )) }
    </CardsWrapper>
  )
}

const CardsWrapper = styled.div`
`
const Card = styled.div`
  padding: 2rem;
  position: absolute;
  border-radius: 4px;
  top: ${props => parseInt(props.start)}px;
  left: 120px;
  width: calc(100% - 120px);
  height: ${props => parseInt(props.end) - parseInt(props.start)}px;
  background: #512c96;
  box-sizing: border-box;

  > span {
    font-size: 22px;
    font-weight: 600;
    color: white;
  }
`
export default MealCards