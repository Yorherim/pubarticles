import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <span className={"text"}>counter: {counter}</span>

      <div>
        <button onClick={() => setCounter((prev) => ++prev)}>incr</button>
      </div>
    </div>
  );
}

export default Counter;
