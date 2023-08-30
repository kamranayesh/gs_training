import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { add, clear } from "./actions/cityNewsAction";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Description = () => {
  const dispatch = useDispatch();
  const [cityNewsList] = useSelector((state) => {
    // console.log(state.todos);
    return [state];
  });
  const { id } = useParams();
  useEffect(() => {}, [cityNewsList]);
  return (
    <div>
      <br />
      <p>{cityNewsList[id].description}</p>
    </div>
  );
};

export default Description;
