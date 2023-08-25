import { useState } from "react";

const Counter = () => {
  let [count, setcount] = useState(0);
  console.log("Test");
  const increase = () => {
    setcount(count + 1);
  };
  const decrease = () => {
    setcount(count - 1);
  };
  const showCount = () => {
    alert(count);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}> Decrease</button>
      <button>Show Count</button>
    </div>
  );
};
export default Counter;
