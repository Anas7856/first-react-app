import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };
  const decrement = () => {
    setNum(num - 1);
  };

  return (
    <div className="counter">
      <h1>{num}</h1>
      <button onClick={decrement}>-1</button>
      <button onClick={increment}>+1</button>
    </div>
  );
};

export default Counter;
