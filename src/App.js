import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(4);

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrementCount = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div>
      {count}
      <br />
      <button onClick={incrementCount}>increment</button>
      <button onClick={decrementCount}>decrement</button>
    </div>
  );
}

export default App;
