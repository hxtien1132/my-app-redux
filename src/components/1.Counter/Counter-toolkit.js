import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../../redux-toolkit/counterSlice";
// import { decrement, increment, incrementvalue } from "../redux/counter";
const CounterToolkit = () => {
  const count = useSelector((state) => state.counter.count)//đứng tại initialState trỏ vào count
  // const reducer = useSelector((state) => state.counter.hxt);
  console.log(count);
  // console.log(reducer);
 const dispath = useDispatch();
 const handleIncrement = ()=>{
   dispath(increment())
 }
 const handleDecrement = ()=>{
   dispath(decrement())
 }
 const handleIncrementByValue = ()=>{
  dispath(incrementByValue(10))
 }
  return (
    <div className="flex flex-col items-center p-5 bg-white shadow w-[400px] mx-auto mt-10">
      <h2 className="mb-5">Counter:{count}</h2>
      <div className="flex justify-center items-center gap-x-5">
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncrementByValue}
        >
         Increment by 10
        </button>
      </div>
    </div>
  );
};

export default CounterToolkit;
