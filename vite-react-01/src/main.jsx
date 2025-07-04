// BEHINF THE SCENES


import { createRoot } from 'react-dom/client'
import React from 'react' 
import { jsx as _jsx } from 'react/jsx-runtime' // evaluator expression isy direct createElement sy bh krskty hain
import App from './App.jsx'

// checking if the funciton will render from the same file 
function MyApp() {
  return (
    <>
      <h1>rendering my app</h1>
    </>
  )
}

// it will not render this kynky keys m nay apny hisab sy rkhy hain react ka kesa object hai wo ekse parse krta hai ye nahi pta 
// const reactElement = {
//     type: 'a',
//     props:{
//         href:'https://Google.com',
//         target: '_blank'
//     },
//     children:'Go visit my channel'
// };

// variable / evaluator expression 
const anotherVar = "chai or code "

// passig arguments to build in react function it wiil give parsed object 
const reactElement2 = React.createElement(
    "a",
    {
        href:'https://Google.com',
        target: '_blank'
    },
    'Go visit my channel ',
    anotherVar
)

createRoot(document.getElementById('root')).render(
    // MyApp()          [  can render by both funct and atribute  
    // <MyApp />        [  alsoreact pparse it at the back and give object form  

    // reactElement2
    <App/>
)
