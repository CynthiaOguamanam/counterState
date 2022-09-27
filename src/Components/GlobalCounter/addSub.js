import React, { useContext } from 'react'
import styled from 'styled-components'
import { CountState } from './GlobalState'

const AddSub = () => {
    const {AddCount} = useContext(CountState)
    const {RedCount} = useContext(CountState)
    return(
        <Wrap>
        <button onClick={AddCount}>+</button>
        <button onClick={RedCount}>-</button>
    </Wrap>
    )
}

export default AddSub;

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
