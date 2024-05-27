import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addval = () => {
    if (counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    } else {
      setCounter(counter);
    }
  };

  const removeVal = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    } else {
      setCounter(counter);
    }
  };

  return (
    <>
      <div>
        <h1>Counter</h1>
        <h3>Counter value {counter}</h3>

        <button onClick={addval}>+3</button>
        <br />
        <br />
        <button onClick={removeVal}>Remove value</button>
      </div>
    </>
  );
}

export default App;
