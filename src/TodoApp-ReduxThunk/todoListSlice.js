import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: {status:'idle', todos:[]},
  reducers: {
    addTodo: (state, action) => [...state, action.payload],
    toggleTodoStatus: (state, action) =>
      state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      ),
  },

  //trạng thái của các redux thunk ( như promise : pending - fulfilled - rejected)
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = "idle";
      })
      .addCase(AddNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        let currentTodo = state.todos.find(todo => todo.id === action.payload.id)
        currentTodo.completed = action.payload.completed
      });
  }

});

//redux thunk
//thunk actions create
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await fetch('/api/todos').then(res => res.json()).catch(err => console.log("err", err))
  console.log("fetch",res.todos);
  return res.todos // return extraReducers. khi được gọi đến
})
export const AddNewTodo = createAsyncThunk("todos/addNewTodo", async (newTodo) => {
  const res = await fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify(newTodo),
  }).catch((err) => {
    console.log(err);
  });
  const data = await res.json();
  return data.todos; // return extraReducers. khi được gọi đến
});

export const updateTodo = createAsyncThunk("todos/updateTodo", async (id) => {
  const res = await fetch("/api/updateTodo", {
    method: "POST",
    body: JSON.stringify(id)
  }).catch((err) => console.log("err", err));
  const data = await res.json();
  return data.todos; // return extraReducers. khi được gọi đến
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