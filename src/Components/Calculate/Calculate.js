import React, { useState } from "react";

const Calculate = () => {
  const [count, setCount] = useState(0);
  const healthIncrease = () => setCount(count + 10);
  if (count < 0) {
    setCount(0);
  }
  const healthDecrease = () => setCount(count - 10);
  if (count > 100) {
    setCount(100);
  }
  return (
    <div>
      <h1>battery Health: {count}</h1>
      <button onClick={healthIncrease}>Health Increase</button>
      <button onClick={healthDecrease}>Health Decrease</button>
    </div>
  );
};

export default Calculate;
