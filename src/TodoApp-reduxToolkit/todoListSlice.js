import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "hx tien", complete: false, priority: "Medium" },
    { id: 2, name: "linh chi", complete: false, priority: "High" },
    { id: 3, name: "trung hieu", complete: true, priority: "Low" },
  ],
  reducers: {
    addTodo: (state, action) => [...state, action.payload],
    toggleTodoStatus: (state, action) =>
      state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      ),
  },
});

export const { addTodo, toggleTodoStatus } = todoListSlice.actions;
export default todoListSlice.reducer;



//thunk function - thunk action
// export function addTodos(todo) { 
//   return function addTodosThunk(dispatch, getState) {
//     // dispatch đến actionsSlice, getState lấy giá trị nằm trong store
//     console.log('gétSTATE', getState());
//     console.log({ todo });
//     todo.name = 'hxtien dep trai 234'
//     dispatch(addTodo(todo)) //thunk action -> actionSlice
//     console.log("gétSTATE2", getState());

//   }
// }






