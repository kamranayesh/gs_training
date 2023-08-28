const increase = (step) => ({ type: "increase", payload: step });
const decrease = () => ({ type: "decrease" });
const reset = () => ({ type: "reset" });

export { increase, decrease, reset };
