import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import HackerNewsThunk from './components/redux-thunk/HackerNewsThunk';
// import HackerNews from './uis/HackerNews';

function App() {

  return (
    <div>
      {/* <MainCounter></MainCounter> */}
      {/* <ToggleDarkMode></ToggleDarkMode> */}
      {/* <ToggleSidebar></ToggleSidebar> */}
      {/* <HackerNews></HackerNews> */}
      <HackerNewsThunk></HackerNewsThunk>
    </div>
  );
}

export default App;
