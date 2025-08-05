import React, {  useEffect, useState } from 'react';

export default function AdvancedCounter () {

    const [count, setCount] = useState<number>(() => {
       const stored =localStorage.getItem('count');
       return stored ? Number(stored) :0    // the Number() converts stored string count to a number )

    })
    const [history, setHistory] =useState<number[]>([0]);

    //for keyboardfunction

    const [keyPressed, setKeyPressed] = useState<string |null> (null)

    // for step input
 
    const [step, setStep]  = useState<number> (1)


    //Initialized a update count variable to hold the updatedCount ,whenever I do increment or decrement aqnd to set the history.

     useEffect(() => {
     localStorage.setItem('count',count.toString()); 
     },[count]);
      const updateCount = (newCount:number) =>{
        setCount(newCount);
        setHistory(prev=>[...prev, newCount])
    };


    //then incremnet and decrement on based on the updated count

    const countIncrement =()=> updateCount(count + step);

    const countDecrement = ()=>updateCount(count - step);

  

    // because this will accept a string, but it is not showing the current number


    // creating event listeners

    useEffect(()=>{
       const handleKeyDown = (event: KeyboardEvent) =>{
        setKeyPressed(event.key);  // to store the value of pressed key

        if (event.key==='ArrowUp'){
          countIncrement();
        } else if (event.key=== 'ArrowDown'){
          countDecrement();
        }
       };

       const handleKeyUp = (event: KeyboardEvent) =>{
        setKeyPressed(null); // reset after releasing the key up is released.
       };
 


    // attacta a event listener to the document//defining a handler function for keyboard event.

    document .addEventListener ('keydown', handleKeyDown)
    document .addEventListener ('keyup', handleKeyUp)

    return() => {
      document.removeEventListener ('keydown', handleKeyDown);
      document.removeEventListener ('keyup', handleKeyUp);
    };
    }, [count]);


    //reset function
    const resetCounter= () =>{
      setCount(0);
      setHistory([0]);
    }
      

return (
    <div>
     <h2>Current Count:{count} {' '}</h2>
     {keyPressed && <span style ={{ color :'gray'}} >({keyPressed} pressed )</span>}
     <label>
      Step Value = {' '}
      <input type='number' value={ step} onChange={(e) => setStep (Number(e.target.value) || 1)} />
     </label>

     <br />
    <button onClick= {countIncrement}> Increment</button>
    <button onClick= {countDecrement}> Decrement</button>
    <button onClick={resetCounter}>Reset</button>


   <p> Count History: {history.join(',')}</p>
  </div>


)
   
}