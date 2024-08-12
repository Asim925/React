import { useReducer } from "react";
import CounterReducer from "./reducers/CounterReducer";

const Counter = () => {
  let [value, dispatch] = useReducer(CounterReducer, 0);
  return (
    <div>
      counter {value}
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-primary m-3"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="btn btn-primary m-3"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
