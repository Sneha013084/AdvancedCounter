import React, { useDeferredValue, useEffect, useState } from 'react';

export default function AdvancedCounter(){

    const [count, setCount] = useState(localStorage.getItem('count') || 0);
    const [history, setHistory] =useState<number[]>([0]);


    //Initialized a update count variable to hold the updatedCount ,whenever I do increment or decrement aqnd to set the history.

     useEffect(() => {
     localStorage.setItem('count',count.toString()); 
     })
      const updateCount = (newCount:number) =>{
        setCount(newCount);
        setHistory(prev=>[...prev, newCount])
    };


    //then incremnet and decrement on based on the updated count

    const countIncrement =()=> updateCount(count + 1);

    const countDecrement = ()=>updateCount(count - 1);

    // because this will accept a string, but it is not showing the current number



return (
    <div>
     <h2>Current Count:{count}</h2>
    <button onClick= {countIncrement}> Increment</button>
    <button onClick= {countDecrement}> Decrement</button>


   <p> Count History: {history.join(',')}</p>
  </div>


)
   
}