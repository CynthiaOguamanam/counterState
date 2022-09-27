import React from 'react'
import GlobalCount from './Components/GlobalCounter/counter'
import { GlobalState } from './Components/GlobalCounter/GlobalState';


const app = () => {
  
  return(
   <GlobalState>
      <div>
    <GlobalCount/>
    </div>
   </GlobalState>
  )
}

export default app;
