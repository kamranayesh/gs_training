import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import { useState } from "react";
function App() {
  const [hide, setHide] = useState(false);

  const toggle = () => {
    setHide(!hide);
  };
  return (
    <div className="App">
      <button onClick={toggle}>Show/Hide</button>
      {hide ? "" : <h3> Assignment 1</h3>}

      <Counter />
      {/* <input type="number" onChange={handlechange} /> */}
    </div>
  );
}

export default App;
