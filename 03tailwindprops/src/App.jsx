import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='h-screen w-full'
      style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3 '>  
          <div className='flex flex-wrap justify-center gap-3 px-3 py-2 shadow-lg rounded-3xl bg-white'>
            <button onClick={()=>{setColor("red")}} className='outline-none px-4 py-1 border-1 rounded-full text-white' style={{backgroundColor:"red"}}>Red</button>
            <button className='outline-none px-4 py-1 border-1 rounded-full text-white' style={{backgroundColor:"green"}}>green</button>
            <button className='outline-none px-4 py-1 border-1 rounded-full text-white' style={{backgroundColor:"gray"}}>gray</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
