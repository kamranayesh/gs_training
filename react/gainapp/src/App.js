import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Homepage from "./Homepage";
import Counter from "./Classbasedcounter";
import { useState } from "react";
function App() {
  const [hide, setHide] = useState(false);
  const toggle = () => {
    setHide(!hide);
  };
  return (
    <div className="App">
      <button onClick={toggle}>Show/Hide</button>
      {hide ? "" : <Counter />}
      {/* <Counter /> */}
      <Login title="Do Login here" hobby="travelling"></Login>
      {/* <h1> Lazy Cats</h1>
        <img src="cat1.jpg.webp" alt="Image 1"></img>
        <img src="cat2.jpg" alt="Image 1"></img>
        <img src="cat3.jpeg" alt="Image 1"></img>
        <img src="cat4.jpeg" alt="Image 1"></img>
        <img src="cat5.jpeg" alt="Image 1"></img>
        <img src="cat6.jpeg" alt="Image 1"></img>
        <img src="cat7.jpeg" alt="Image 1"></img>
        <img src="cat8.jpg" alt="Image 1"></img> */}
      <Homepage></Homepage>
    </div>
  );
}

export default App;
