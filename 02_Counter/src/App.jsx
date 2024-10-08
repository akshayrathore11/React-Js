import "./App.css";

import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(50);

  const increaseValue = () => {
    if (counter < 100) {
      setCounter(counter + 1);
    }
  };

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Loved It !!</h1>
      <p>React is awesome</p>

      <h2>Counter Value {counter}</h2>
      <h3>Counter Value {counter}</h3>
      <h4>Counter Value {counter}</h4>
      <h5>Counter Value {counter}</h5>
      <h6>Counter Value {counter}</h6>

      <p>React Automatically update State </p>
      <button onClick={increaseValue}>Add Value</button>
      <button onClick={decreaseValue}>Remove Value</button>
    </>
  );
}

export default App;
