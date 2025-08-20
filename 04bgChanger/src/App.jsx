import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color , setcolor] = useState('olive')

// function changeColor(color){
//   setcolor(color) create a onClick event on button requires call back function and return change color method
// }

  

  return (
    <>
    <div className='w-full h-screen duration-300' style={{backgroundColor: color}}>
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button onClick={()=>setcolor('red')} 
          className='outline-none px-4 py-1 rounded-full text-black shodow-lg'
          style={{backgroundColor:"red"}}>
            Red
            </button>
          <button onClick={()=>setcolor('Green')} 
          className='outline-none px-4 py-1 rounded-full text-black shodow-lg'
          style={{backgroundColor:"Green"}}>
            Green
            </button>
          <button onClick={()=>setcolor('blue')} 
          className='outline-none px-4 py-1 rounded-full text-black shodow-lg'
          style={{backgroundColor:"Blue"}}>
            Blue
            </button>

       
        </div>

     </div>
    </div>
    </>
  )
}

export default App
