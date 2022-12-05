import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((count) => count + 1);
  }
  function decrement() {
    setCount((count) => count - 1);
  }
  return (
    <div>
      <h2>Counter</h2>
      <p data-testid="count">{count}</p>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>

      <button data-testID= "add" onClick={increment}> + </button>
      <button data-testID= "minus" onClick={decrement}> - </button>
    </div>
  );
}
