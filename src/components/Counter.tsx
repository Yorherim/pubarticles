import { useState } from "react";
import styles from "./Counter.module.scss";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <span className={styles.text}>counter: {counter}</span>

      <div>
        <button onClick={() => setCounter((prev) => ++prev)}>incr</button>
      </div>
    </div>
  );
}

export default Counter;
