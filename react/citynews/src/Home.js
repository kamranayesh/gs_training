import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { add, clear, addNews } from "./actions/cityNewsAction";
import { useEffect } from "react";
import "./App.css";
const Home = () => {
  const dispatch = useDispatch();
  const [cityNewsList] = useSelector((state) => {
    // console.log(state.todos);
    return [state];
  });

  // useEffect(() => {}, [cityNewsList]);
  const clearfn = () => {
    // console.log("clear in App.js");
    dispatch(clear());
  };
  const addCityNews = (event) => {
    event.preventDefault();
    const formObj = event.target;
    // for (let i = 0; i < cityNewsList.length; i++) {
    //   if (cityNewsList[i].city === formObj.city.value) {
    //     let newsObj = {
    //       id: i,
    //       news: formObj.news.value,
    //       description: formObj.description.value,
    //     };
    //     dispatch(addNews(newsObj));
    //     return;
    //   }
    // }

    let cityNewsObj = {
      city: formObj.city.value,
      news: formObj.news.value,
      description: formObj.description.value,
    };
    // let cityNewsObj = {
    //   city: formObj.city.value,
    //   news: [
    //     {
    //       news: formObj.news.value,
    //       description: formObj.description.value,
    //     },
    //   ],
    // };

    dispatch(add(cityNewsObj));
    // getData();
  };
  return (
    <div>
      <h1>Astron News</h1>
      <div id="form">
        <form onSubmit={addCityNews}>
          <TextField
            label="City"
            variant="standard"
            type="text"
            name="city"
            placeholder="Enter City"
            required
          />
          <TextField
            label="News"
            variant="standard"
            type="text"
            name="news"
            placeholder="Enter News"
            required
          />
          <TextField
            label="Description"
            variant="standard"
            type="text"
            name="description"
            placeholder="Enter Description"
            required
          />

          <Button variant="contained" className="add" type="submit">
            Post News
          </Button>
        </form>
        <br />
        <Button variant="contained" className="delete-btn" onClick={clearfn}>
          Clear
        </Button>
        <p>
          Welcome to Astron News, your dedicated source for up-to-the-minute
          city weather updates! We're your go-to destination for accurate and
          comprehensive weather forecasts tailored specifically to our vibrant
          city.
        </p>
      </div>
    </div>
  );
};

export default Home;
