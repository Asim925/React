import useCounterStore from "./store";

const Counter2 = () => {
  let { counter, increment, reset } = useCounterStore();
  return (
    <div>
      counter {counter}
      <button onClick={() => increment()} className="btn btn-primary m-3">
        Increment
      </button>
      <button onClick={() => reset()} className="btn btn-primary m-3">
        Reset
      </button>
    </div>
  );
};

export default Counter2;
