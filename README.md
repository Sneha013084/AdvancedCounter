## Steps for Lab 
 
 ## Initialize State with useState
 
## Count : 
  
      Initializes count from localStorage (if present) or sets it to 0.

      Number(stored) converts the string from localStorage to a number

## History: 

     Tracks all the previous count values, starting from 0.

## Key Pressed: 
      
      Used to display which key was last pressed (ArrowUp or ArrowDown).

## Step Value: 

      Allows the user to control how much the counter should increase or decrease.

## Save Count to localStorage: 
     
      Automatically saves the count value whenever it changes.

## Update Count & History Function: 

      Central function that updates both the count and its history.

      Ensures consistency across manual button clicks and key presses.

## Increment & Decrement Function: 

     Uses the step value to change the count.


 ## Handle Keyboard Events with useEffect: 
 
       Adds keyboard support for changing the count.

       Cleans up the listeners to prevent memory leaks.

 ## Reset Button : 
 
     Resets both count and history.


  ## Input for Step Value: 
  
      Allows the user to enter a custom increment/decrement value.

      Defaults to 1 if input is empty or invalid (NaN).


## Rendered Output: 

      Shows current count and key pressed.

     Shows input for step value and buttons to interact.
