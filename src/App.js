import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import HackerNewsThunk from './redux-thunk/HackerNewsThunk';
import MainCounter from './components/1.Counter/MainCounter';
// import HackerNews from './uis/HackerNews';
import { Typography, Divider } from "antd";
import Filters from './components/4.TodoApp/Filters';
import TodoList from './components/4.TodoApp/TodoList';
const { Title } = Typography;

function App() {

  return (
    // learning
    // <div>
    //     {/* <MainCounter></MainCounter> */}
    //   {/* <ToggleDarkMode></ToggleDarkMode> */}
    //   {/* <ToggleSidebar></ToggleSidebar> */}
    //   {/* <HackerNews></HackerNews> */}
    //   {/* <HackerNewsThunk></HackerNewsThunk> */}
    // </div>


    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
    
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
