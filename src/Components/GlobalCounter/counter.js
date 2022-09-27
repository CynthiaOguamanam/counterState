import React, { useContext } from 'react'
import styled from 'styled-components'
import AddSub from '../GlobalCounter/addSub'
import MultDiv from '../GlobalCounter/multDiv'
import { CountState } from './GlobalState'

const GlobalCount = () => {
  const {countNum} = useContext(CountState)

    return(
      <Container>
        <Wrap>
            <AddSub/>
            <h1>{countNum}</h1>
            <MultDiv/>
        </Wrap>
      </Container>
    )
}
export default GlobalCount;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const  Wrap = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
`;