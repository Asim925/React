interface Action {
  type: "INCREMENT" | "RESET";
}

// bad me jo number hai us ka mtlb return type
const CounterReducer = (state: number, action: Action): number => {
  if (action.type === "INCREMENT") return state + 1;
  if (action.type === "RESET") return 0;
  return state; // agr to state number nahi hai to return same
};
export default CounterReducer;
