import React from 'react'
import moment from 'moment'
import Timeline from './components/Timeline'
import MealCards from './components/MealCards'
import data from './utils/data'
import styled from 'styled-components'

function App() {
  return (
    <AppWrapper className="App">
      <Day>
        { moment().format('Do of MMMM')}
      </Day>
      <Wrapper>        
        <Timeline />
        <MealCardsWrapper>
          <MealCards data={data}/>
        </MealCardsWrapper>
      </Wrapper>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  padding: 2rem;
`
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`

const MealCardsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
`

const Day = styled.div`
  padding-bottom: 2rem;
  font-size: 32px;
`
export default App;
