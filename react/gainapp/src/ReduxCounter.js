import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
const ReduxCounter = () => {
  const dispatch = useDispatch();
  const [count] = useSelector((state) => {
    return [state.count];
  });
  const increaseCount = () => {
    dispatch({ type: "increase" });
  };
  const decreaseCount = () => {
    dispatch({ type: "decrease" });
  };
  const resetCount = () => {
    dispatch({ type: "reset" });
  };
  return (
    <div>
      <Button variant="outlined" onClick={increaseCount}>
        Increase
      </Button>
      <Button variant="outlined" onClick={decreaseCount}>
        Decrease
      </Button>
      <Button variant="outlined" onClick={resetCount}>
        Reset
      </Button>
      Count = {count}
    </div>
  );
};

export default ReduxCounter;
