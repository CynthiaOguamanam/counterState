import React, {useContext} from 'react'
import styled from 'styled-components'
import { CountState } from './GlobalState'

const MultDiv = () => {
    const {DivCount} = useContext(CountState)
    const {MultCount} = useContext(CountState)
    return(
        <Wrap>
            <button onClick={MultCount}>*</button>
            <button onClick={DivCount}>/</button>
        </Wrap>
    )
}
export default MultDiv;

const Wrap = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    
    button{
        padding: 20px 25px;
        font-size: 30px;
        border-radius: 50%;
        border: none;
        margin: 30px;
        background-color: #680000;
        color: white;
    } 
  
`;
