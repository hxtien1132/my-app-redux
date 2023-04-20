import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { useState } from "react";
import { AddNewTodo } from "../../todoListSlice";
import { todosRemainingSelector } from "../../selector";
//Action


export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const todoList = useSelector(todosRemainingSelector);
  // console.log(todoList)
  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    dispatch(
      AddNewTodo({
        id: uuid(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );

    setTodoName('')
    setPriority('Medium');
  };
  const handleInput = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriority = (value) => {
    setPriority(value );
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList && todoList.map((todo) => (
        <Todo id={todo.id} key={todo.id} name={todo.name} prioriry={todo.priority} complete={todo.complete}></Todo>
      ))}
      </Col>
      <Col span={24}>
        <Space.Compact compact="true" style={{ display: "flex" }}>
          <Input value={todoName} onChange={handleInput} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" style={{color:"black",fontWeight:500}} onClick={handleAddButtonClick}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}
