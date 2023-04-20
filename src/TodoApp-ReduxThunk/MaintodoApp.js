import React from 'react';
import { Typography, Divider } from "antd";
import Filters from './4.TodoApp/Filters';
import TodoList from './4.TodoApp/TodoList';
const { Title } = Typography;

const MaintodoApp = () => {
    return (
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
        <Title style={{ textAlign: "center" }}>TODO APP with REDUX-THUNK</Title>
        <Filters />
        <Divider />
        <TodoList />
      </div>
    );
};

export default MaintodoApp;