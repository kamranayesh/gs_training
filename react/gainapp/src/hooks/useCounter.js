//i am using a hook called useState. it is used to create a state variable
import { useState, useEffect } from "react";
const useCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("count variable changed");
  }, [count]);
  const increase = () => {
    //we are calling the function as second value of array is a function.
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return [count, increase, decrease, reset];
};
export default useCounter;
