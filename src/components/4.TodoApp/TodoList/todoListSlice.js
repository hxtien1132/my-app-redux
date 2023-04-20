// redux

const initState = [
  { id: 1, name: "hx tien", complete: false, priority: "Medium" },
  { id: 2, name: "linh chi", complete: false, priority: "High" },
  { id: 3, name: "trung hieu", complete: true, priority: "Low" },
];
export const addTodoList = "todoList/addTodo";
export const toggleStatus = "todoList/toggleTodoStatus";

function todoListSlice(state =initState, action) {
  switch (action.type) {
    case addTodoList:
      return  [...state, action.payload] 
    case toggleStatus:
      return state.map((todo)=> todo.id === action.payload ? {...todo, complete: !todo.complete} : todo)
    default:
      return state;
  }
}
export default todoListSlice;


