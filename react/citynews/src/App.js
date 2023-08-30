import "./App.css";

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CityNews from "./CityNews";
import Description from "./Description";
import { useDispatch, useSelector } from "react-redux";
import CityNewsList from "./CityNewsList";

import Home from "./Home";

function App() {
  const [cityNewsList] = useSelector((state) => {
    // console.log(state.todos);
    return [state];
  });

  useEffect(() => {}, [cityNewsList]);
  return (
    <div className="App">
      <BrowserRouter>
        <Link className="city-list" to="/">
          Home
        </Link>
        <CityNewsList />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<CityNews />}>
            <Route path="description" element={<Description />} />
            <Route path="description" element={<Description />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
