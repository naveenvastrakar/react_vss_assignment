import { useState } from "react";
import ChildCounter from "../childtoparent_props/Child";

const ParentCounter = () => {
  const [counter, setCounter] = useState(10);

  const onIncrement = () => {
    setCounter((val) => val + 1);
  };
  const onDecrement = () => {
    if (counter === 1) {
      return;
    }
    setCounter((val) => val - 1);
  };

  return (
    <div>
      <ChildCounter
        myCounter={counter}
        ankitIncrement={onIncrement}
        ankitDecrement={onDecrement}
      />
      <hr />
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement} disabled={counter === 1}>
        Decrement
      </button>
    </div>
  );
};

export default ParentCounter;