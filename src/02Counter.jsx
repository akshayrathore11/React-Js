import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const addVal = () => {
    if (counter < 20) {
      // setCounter(counter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const remVal = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>React : {counter}</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addVal}>Add Value</button>
      <button onClick={remVal}>Remove Value : {counter}</button>

      <p>Counter : {counter}</p>
    </>
  );
}

export default Counter;
