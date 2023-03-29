import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementvalue } from "../../redux/counter";

const Counter = () => {
 const count = useSelector((state)=>state.counter.count) //state chính là reducer của reducer(store) của configureStore
 const dispath = useDispatch();
 const handleIncrement = ()=>{
   dispath(increment())
 }
 const handleDecrement = ()=>{
   dispath(decrement())
 }
 const handleIncrementByValue = ()=>{
  dispath(incrementvalue(10))
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

export default Counter;
