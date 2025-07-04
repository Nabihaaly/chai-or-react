import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = ()=>{
    console.log("clicked : "+counter);
    // counter=counter + 1;
    // counter=counter + 1;
    // counter=counter + 1;
    // counter=counter + 1;
    if(counter<=20){
      // setCounter(counter+1)  |
      // setCounter(counter+1)  |  ye sb ek batch bnke jaeingy or 
      // setCounter(counter+1)  |  repeated statement hain  to bs ek bar update hoga 
      // setCounter(counter+1)  |

      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
    }

  }
  const removeValue =()=>{
    if(counter>0)
      setCounter(counter-1)
    else alert('cant be negative')
  }

  return (
    <>
      <h1>Chai  or React</h1>
      <h2>counter value {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
    </>
  )
}

export default App
