import React, {useState} from 'react'
import styled from 'styled-components'

const Counter = () => {

    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount (count +2)
    };

    const redCount = () => {
        setCount (count -2)
    };

    const divideCount = () => {
        setCount (count /2)
    };

    const multiplyCount = () => {
        setCount (count *2)
    }


    return(
        <Container>
            <Wrap>
            <h1>{count}</h1>
            <Hold>
            <button onClick={addCount}>+</button>
            <button onClick={redCount}>-</button>
            <button onClick={divideCount}>/</button>
            <button onClick={multiplyCount}>*</button>
            </Hold>
            </Wrap>
        </Container>
    )
}
export default Counter;


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrap = styled.div`
    width: 80%;
    height: 80%;
    background-color: brown;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    
    button{
        padding: 10px 15px;
        font-size: 30px;
        border-radius: 50%;
        border: none;
        margin: 30px;
    } 
    h1{
    }
`;

const Hold = styled.div`
    padding: 30px;
    display: flex;
    justify-content: space-around;
    align-items:center;
    border-radius: 6px;
`;