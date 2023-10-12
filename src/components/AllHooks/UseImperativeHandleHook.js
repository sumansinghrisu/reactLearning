import React, { useRef } from "react";
import Counter from "../../components/Counter/Counter";

const UseImperativeHandleHook = () => {
  const ref = useRef();

  return (
    <div className="App">
      <button onClick={() => ref.current.handleSubstract()}>-</button>
      <Counter ref={ref} />
      <button onClick={() => ref.current.handleAdd()}>+</button>
      <br />
    </div>
  );
};

export default UseImperativeHandleHook;