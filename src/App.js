import React, { useEffect } from "react";
import "./App.css";
import MaintodoApp from "./TodoApp-ReduxThunk/MaintodoApp";
import { setupServer } from "./zFakeAPI";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./TodoApp-ReduxThunk/todoListSlice";

if (process.env.NODE_ENV === 'development') {
  setupServer();
}
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodos())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // learning
    <div>
      {/* <MainCounter></MainCounter> */}
      {/* <ToggleDarkMode></ToggleDarkMode> */}
      {/* <ToggleSidebar></ToggleSidebar> */}
      {/* <HackerNews></HackerNews> */}
      {/* <HackerNewsThunk></HackerNewsThunk> */}
      <MaintodoApp></MaintodoApp>
    </div>
  );
}

export default App;
