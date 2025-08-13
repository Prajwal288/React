import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

// const reactElement = {
//     type: 'a',
//     props:{
//         href :"https://google.com",
//         target : '_blank'
//     },
//     children:'Click me to visit google'
// }


function MyApp(){
  return (
    <div>
      <h1>Custom react App </h1>
    </div>
  )
}

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit</a>
)


const areactElement = React.createElement(
  'a',
  {href:"https://google.com", target: "_blank"},
  'click to visit element'
)

createRoot(document.getElementById('root')).render(
  <App/>
)
