import { useState } from "react";

const Counter = () => {
  let [count, setcount] = useState(0);
  const [step, setStep] = useState(3);
  const increase = () => {
    setcount(count + step);
  };
  const decrease = () => {
    setcount(count - step);
  };
  const resetCount = () => {
    setcount(0);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}> Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};
export default Counter;
