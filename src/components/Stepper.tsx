import { useState } from "react";

const Stepper = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)} data-cy="increment">
        Increment
      </button>
      <span data-cy="counter">{counter}</span>
      <button onClick={() => setCounter(counter - 1)}  data-cy="decrement">Decrement</button>
    </div>
  );
};

export default Stepper;
