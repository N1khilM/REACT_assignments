import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => {
          count >= 1 ? setCount(count - 1) : count;
        }}
      >
        Decrement
      </button>
      <button onClick={() => setCount(count + 5)}>Increment by 5</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        {" "}
        Reset
      </button>
      ;
      <button
        onClick={() => {
          count >= 5 ? setCount(count - 5) : count;
        }}
      >
        Decrement by 5
      </button>
      <p>{count % 2 === 0 ? "Count is even" : "Count is odd"}</p>
    </div>
  );
}
