import { useState } from "react";


const Counter = () => {

// Declare state variable 'count' with initial value 0
const [count, setCount] = useState<number>(0);

// Function to handle increment
const increment = () => {
  setCount(count + 1);
};

// Function to handle decrement
const decrement = () => {
  setCount(count - 1);
};

// Function to reset the count to 0
const reset = () => {
  setCount(0);
};


  return (
    <div>

    <h1 className="text-center">My Counter Component</h1>

 <div>
      <h1>Counter: {count}</h1>
      <button className="btn btn-primary mx-3" onClick={increment}>Increment</button>
      <button className="btn btn-primary mx-3" onClick={decrement}>Decrement</button>
      <button className="btn btn-primary" onClick={reset}>Reset</button>
    </div>
    
    </div>
  )
}

export default Counter