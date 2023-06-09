import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodoStatus } from '../../todoListSlice';
const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ id,name, prioriry, complete }) {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(complete);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodoStatus(id))
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ marginRight: "10px" ,width:'60px',textAlign:'center'}}>
        {prioriry}
      </Tag>
    </Row>
  );
}
