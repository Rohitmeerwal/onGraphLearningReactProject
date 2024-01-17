import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    
    <div className=" w-full h-screen duration-200"
     style={{backgroundColor:color}}>
    
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-4">
        <div className="fixed flex flex-wrap justify-center gap-10 shadow-md bg-white px-5 py-3 rounded-lg">
          <button onClick={()=> setColor("red")} className=" px-2 rounded-md py-2 w-20 text-white " style={{background:"red"}}>Red</button>
          <button onClick={()=> setColor("blue")} className=" px-2 rounded-md py-2 w-20 text-white " style={{background:"blue"}}>blue</button>
          <button onClick={()=> setColor("pink")} className=" px-2 rounded-md py-2 w-20 text-white " style={{background:"pink"}}>pink</button>
          <button onClick={()=> setColor("orange")} className=" px-2 rounded-md py-2 w-20 text-white " style={{background:"orange"}}>orange</button>
          <button onClick={()=> setColor("white")} className=" px-2 rounded-md py-2 w-20 text-black " style={{background:"white"}}>white</button>
          <button onClick={()=> setColor("black")} className=" px-2 rounded-md py-2 w-20 text-white " style={{background:"black"}}>black</button>
          <button onClick={()=> setColor("hsl(25,56%,72%)")} className=" px-2 rounded-md py-2 w-20 text-white " style={{background:"black"}}>#</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
