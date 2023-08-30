import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
const CityNewsList = () => {
  const [cityNewsList] = useSelector((state) => {
    return [state];
  });

  useEffect(() => {}, [cityNewsList]);
  return (
    <div>
      {cityNewsList.map((val, index) => {
        return (
          <Link className="city-list" to={`/${index}`}>
            {val.city}
          </Link>
        );
      })}
    </div>
  );
};

export default CityNewsList;
