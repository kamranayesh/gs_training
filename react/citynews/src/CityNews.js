import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteCity } from "./actions/cityNewsAction";
import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
const CityNews = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //   console.log(id);
  const dispatch = useDispatch();

  const [cityNewsList] = useSelector((state) => {
    console.log(state);
    return [state];
  });
  useEffect(() => {
    // console.log(cityNewsList);
  }, [cityNewsList]);

  const deleteCityFn = (id) => {
    // console.log("delete in citynews");
    dispatch(deleteCity(id));
    navigate("/", { replace: true });
  };

  console.log(typeof id);
  return (
    <div>
      <h2>{cityNewsList[id].city}</h2>
      <h4>{cityNewsList[id].news}</h4>
      <Link className="city-list" to={`/${id}/description`}>
        Description
      </Link>
      <Outlet />
      <br />
      <br />
      <Button
        variant="contained"
        className="delete-btn"
        onClick={() => {
          deleteCityFn(id);
        }}
      >
        Delete
      </Button>
    </div>
  );
};
export default CityNews;
