import { useState } from 'react'

import './App.css'

function App() {
  // let counter = 15
  const [counter , setCounter]= useState(0)



  const addValue =()=>{
    // setCounter(counter + 1)
    //changing the value by 4 interationally
    setCounter((prevCounter)=> prevCounter + 1)
    setCounter((prevCounter)=> prevCounter + 1)
    setCounter((prevCounter)=> prevCounter + 1)
    setCounter((prevCounter)=> prevCounter + 1)
    // this cananot be batched as dependent on prev value
  }

  const removeValue=()=>{
   setCounter(counter - 1 )
  }

  return (
    <>
      <h1>Learning React Day: {counter}</h1>
      <button onClick={addValue}>Add Day</button>
      <button onClick={removeValue}>Remove Day</button>
      <p>Footer: </p>
    </>
  )
}

export default App
