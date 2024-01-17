import React, { useState } from 'react';

const dynamicBuzzer = () => {
  const [numBuzzer, setNumBuzzer] = useState([]);
  const [pressedBuzzer, setPressedBuzzer] = useState(null);

  const handleBuzzerClick = (i) => {
    setPressedBuzzer(i);
    
  };
  const deleteBuzzer = ()=>{
    setNumBuzzer([]);
    setPressedBuzzer(null);
  }

  const generateBuzzer = () => {
    const Buzzer = [];
    for (let i = 1; i <= numBuzzer; i++) {
      Buzzer.push(
        <button         
        className={`bg-${pressedBuzzer === i ? 'success' : 'neutral'}-400 flex justify-center items-center mx-5 my-20 px-11 py-6 rounded-full`}
        onClick={() => handleBuzzerClick(i)}
        disabled={pressedBuzzer !== null && pressedBuzzer !== i}
        >
          Buzzer {i}
        </button>
      );
    }
    
    
    return <div className="flex flex-wrap justify-center">{Buzzer}</div>;
  };

  return (
    <div>
      <label>Enter the number of Buzzer:</label>
      <input
        type="number"
        value={numBuzzer}
        onChange={(e) => setNumBuzzer(parseInt(e.target.value))}
      />
      <button className=' rounded-md mx-2    bg-blue-500 py-2 px-5'  onClick={generateBuzzer}>Generate Buzzers</button>

      <button className=' rounded-md mx-2    bg-red-500 py-2 px-5' onClick={deleteBuzzer}>delete</button>

      <div>{generateBuzzer()}</div>
    </div>
  ); 
};

export default dynamicBuzzer;
