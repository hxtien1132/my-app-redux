import { createSelector } from "reselect";
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const prioritiesFilterSelector = (state) => state.filters.priorities;

export const todosRemainingSelector = createSelector(
    todoListSelector, statusFilterSelector, searchTextSelector, prioritiesFilterSelector, 
    (todoList, status, searchText,priorities) => {
        return todoList.filter((todo) => {
          if (status === "All")
            return priorities.length
              ? todo.name.includes(searchText) &&
                  priorities.includes(todo.priority)
              : todo.name.includes(searchText);
            return todo.name.includes(searchText) &&
              status === "Completed"
              ? todo.complete
              : !todo.complete &&
                  (priorities.length
                    ? priorities.includes(todo.priority)
                    : todo.name.includes(searchText)); 
        })
    }
 )