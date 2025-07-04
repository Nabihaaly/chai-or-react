import { useCallback, useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [isNumber, setNumber] = useState(false)
  const [isChar, setChar] = useState(false)
  const [password, setPassword] = useState("")

  // useCallback -> optimization kay lye 
  // jo bhchange hua ussy cache m rkehin optimized kor method ko agr change  hota hai to 
  const passwordGenerator = useCallback( 
    ()=>{
      let pass=""
      let str ="ABCDEFGHIJKLMNOPQRSTUVWXYVZabcdefghijklmnopqrstuvwxyz"
      if(isNumber) str+="1234567890"
      if(isChar) str+= "!@#$%^&*()"

      for (let i = 1; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }

      setPassword(pass);
    }
    ,[length,isChar,isNumber,setPassword]  // yahan password nahi denge kynky passwrod to change hota rehta hai ye bar bar optimize krega.. setpassword islye deskty hain(mrzi hai) kynky jtna  optimize hisky krlo
     //dependency m kch bh chage hua to rerender hoga 
  );
  
  // useRef hook
  const passwordRef = useRef(null) 

  const copyPasswordToClipboard = useCallback( ()=> {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,4) //selection range (highlighting copied text is seletction)
    window.navigator.clipboard.writeText(password)
  }, [password])

  // agr kch change to rerender kro 
  useEffect( ()=>{ passwordGenerator() }, [length,isChar,isNumber,passwordGenerator])

  return (
    <> 
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500' >
      <h1 className='text-4xl text-white '>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-3">
        <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 bg-white text-orange-600'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button className='bg-blue-500 text-white px-3 hover:bg-blue-400 cursor-pointer'
          onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className='flex items-center gap-x-2'>
        <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-2'>

        <input type="checkbox" defaultChecked={isNumber} id="numberInput" 
          onChange={ () => { 
                setNumber( prev => !prev ); 
             }}
        />
        <label>Numbers</label>
        
        <input type="checkbox" defaultChecked={isChar} id="numberInput"
          onChange={ () => { 
            setChar( prev => !prev ); 
          }}
          />
          <label>Characters</label>
      </div>
      </div>
    </div>
    </>
  )
}
export default App
