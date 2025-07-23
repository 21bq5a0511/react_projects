import React, { useState } from 'react'
function Counter(){

    const [value,setValue]=useState(0)
    function Increase(){
        setValue(value+1)
    }
    function Decrease(){
        setValue(value-1)
    }
    function Reset(){
        setValue(0)
    }
    function handleManual(){
          let manual=prompt("Enter the Manual Value You want?")
          setValue(manual);

     }
     function handleRandom(){
          let value=Math.floor(Math.random()*10);
          setValue(value);

     }

    return(
        <div>
            <h1>
                {value}
            </h1>
            <button onClick={Increase} >Increase</button>
            <button onClick={Decrease}>Decrease</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={handleManual}>Manual</button>
            <button onClick={handleRandom}>Random</button>
            
        </div>
    )

}
export default Counter