import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counterValue, setCounterValue] = useState(0);

  return (
    <div className="App">
      <h1>Counter </h1>
      <p>{counterValue}</p>
      <button onClick={() => setCounterValue((oldValue) => oldValue + 1)}>
        +
      </button>
      <button onClick={() => setCounterValue((oldValue) => oldValue - 1)}>
        -
      </button>
    </div>
  );
}
