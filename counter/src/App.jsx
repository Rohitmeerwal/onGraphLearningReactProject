import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const remove = () =>{
    if(count>0){
       setCount(count-1)
    }
  }
  return (
    <>
      
      <h1>{count}</h1>
      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
         for increase  count  
        </button>
        <button onClick={remove}>
          for decrease count is 
        </button>
        
      </div>
     
    </>
  )
}

export default App
