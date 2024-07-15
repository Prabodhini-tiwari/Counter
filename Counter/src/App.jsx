import { useState } from 'react';
import './App.css';

 
 

function App() {
  const [counter, setCounter] = useState(1);
  const [userInput, setUserInput] = useState('');
  

  function AddValue(){

    let val = parseInt(userInput);
    if (val === 0 || val < 0 ){
      alert("Input value cannot be 0 or less than 0");
      return;
    }
    if(val && val > 0){
      setCounter(counter + val);
      
    }
    else{
      setCounter(counter+1);
    }

     
  }

  function RemoveValue(){
    let val = parseInt(userInput);
    if (val === 0 || val < 0){
      // Alerts the user if the entered value is 0 or less than 0.
      alert("Input value can not be 0 or less than 0.");
      return;  // stop execution
      
    }
    if(val && val >0){
      if(counter-val < 0){
        alert("Counter's value cannot be decreased further. ")
      }
      else{
        setCounter(counter-val);
      }
       
    }
    else{
      setCounter(counter-1);
    }
   
  }

  function ResetCounter(){
    setCounter(0);
    setUserInput('');
  }

  
  return(
    <div className='container'>
      <h1>Let's Count !</h1>
      <h2>counter value : {counter}</h2>

      {/*  Increment button, It increments the counter */}
      <div className='Buttons'>
        <button onClick={AddValue}> Increment</button>
        <br />
        <button onClick={RemoveValue}> Decrement </button>
        <br />
        <button onClick = {ResetCounter}>Reset</button>
        <br />
      </div>
      
      <div className='Inputs'>
        <input 
          type="number"
          value={userInput}
          // whenever the user types in the input field, the userInput state is updated with the current value of the input field.
          onChange = {(e)=> setUserInput(e.target.value)} placeholder = "Type a number" onKeyDown="return false"  
        />
      </div>
    </div>
  );
}

export default App
