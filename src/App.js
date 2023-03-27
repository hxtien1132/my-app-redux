import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
// import Counter from './components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { increment ,decrement} from './redux/counter';
import CounterToolkit from './components/Counter-toolkit';

function App() {
  const {count} = useSelector(state => state.counter)

  return (
   <div>
   <h2>the counter from app is : {count}</h2>
           {/* <Counter></Counter> */}
           <CounterToolkit></CounterToolkit>
   </div>
  );
}

export default App;
