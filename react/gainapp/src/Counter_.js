import useCounter from "./hooks/useCounter";
function Counter_() {
  const [count, increase, decrease, reset] = useCounter();
  return (
    <div>
      the state varibale value={count}
      <br />
      the addition of 3 and 5 is {3 * 5}
      <br />
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
export default Counter_;
