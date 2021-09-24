// Import useState Hook from React
import React, { useState } from 'react';

function Counter() {
  // Using `useState`, declare a new state variable, called "count", and set it to 0
  // Name the returned setter method "setCount"
  const [count, setCount] = useState(0);
  //

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => count > 0 ? setCount(count - 1) : null;

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        {/* Add the count variable to show the current count value below*/}
        <p className="card-text">Click Count: {count} </p>
        {/* When the button is clicked, we call setCount with the incremented value of count */}
        {/* <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>{' '} */}
        <button className="btn btn-primary" onClick={increment}>Increment</button>{' '}
        {/* When the button is clicked, we call setCount with the decremented value of count */}
        {/* <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Decrement</button> */}
        <button className="btn btn-danger" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
