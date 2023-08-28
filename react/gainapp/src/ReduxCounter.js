import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, reset } from "./actions/counteractions";
const ReduxCounter = () => {
  const dispatch = useDispatch();
  let step = 4;
  const [count] = useSelector((state) => {
    return [state.counter.count];
  });
  const increaseCount = () => {
    // dispatch({ type: "increase" });
    dispatch(increase(step));
  };
  const decreaseCount = () => {
    // dispatch({ type: "decrease" });
    dispatch(decrease());
  };
  const resetCount = () => {
    // dispatch({ type: "reset" });
    dispatch(reset());
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
