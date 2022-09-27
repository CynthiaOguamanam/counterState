//import the createContext
import { createContext, useState } from "react";
//create a database to hold the environment 
export const CountState = createContext()
//create the environment with the .provider which provides all the elements needed
//the value={""} is what were expecting from the provider i.e: the food...
//The children is a passed as a props to represent all the datas: it is a global  props and it isnt self defined
export const GlobalState = ({children}) => {
    const [countNum, setCountNum] = useState(2);

    const AddCount = () => {
        setCountNum(countNum +2);
    }
    const RedCount = () => {
        setCountNum(countNum -2);
    }
    const DivCount = () => {
        setCountNum(countNum /2);
    }
    const MultCount = () => {
        setCountNum(countNum *2);
    }

    return(
        <CountState.Provider value={{countNum, AddCount, RedCount, DivCount, MultCount}}>
        {children}
        </CountState.Provider>
    )
};

