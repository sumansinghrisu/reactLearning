import React, { useLayoutEffect } from "react";

const UseLayoutEffectHook = () => {
  useLayoutEffect(() => {
    console.log("hello");
  }, []);

  return <div>Hello</div>;
};

export default UseLayoutEffectHook;