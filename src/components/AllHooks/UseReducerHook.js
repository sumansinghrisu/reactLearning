import { useReducer } from "react";

function UseReducerHook() {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "substract":
        return state - action.payload;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(countReducer, 0);

  return (
    <>
      <button onClick={() => dispatch({ type: "substract", payload: 5 })}>
        -
      </button>
      <span>{state}</span>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
    </>
  );
}

export default UseReducerHook;