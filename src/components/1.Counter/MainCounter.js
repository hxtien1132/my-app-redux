import React from "react";
// import { Counter } from './features/counter/Counter';
// import Counter from './components/Counter';
import { useDispatch, useSelector } from "react-redux";
import CounterToolkit from "./Counter-toolkit";
import Counter from "./Counter";

function MainCounter() {
  const { count} = useSelector((state) => state.counter);

  // const { count,hxt} = useSelector((state) => state.counter);

  return (
    <div>
      <h2>the counter from app is : {count}</h2>
      {/* <h2>{ hxt}</h2> */}
      <Counter></Counter>
      {/* <CounterToolkit></CounterToolkit> */}
    </div>
  );
}

export default MainCounter;
