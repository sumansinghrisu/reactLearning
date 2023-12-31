import { useMemo, useState } from "react";

function UseMemoHook() {
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });

  const [show, setShow] = useState(false);

  const handleChange = useMemo(() => {
    for (let i = 0; i <1000000; i++) {}

    return count.num * 2;
  }, [count]);


  const handleAdd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };

  const handleSubstract = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };

  return (
    <>
      <button onClick={handleSubstract}>-</button>
      <span>{count.num}</span>
      {show && <span>{count.id}</span>}
      <button onClick={handleAdd}>+</button>

      <p>{handleChange}</p>
      <button onClick={() => setShow((prev) => !prev)}>change</button>
    </>
  );
}

export default UseMemoHook;