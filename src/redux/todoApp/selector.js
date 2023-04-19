export const todoListSelector = (state) => 
{
  const searchText = searchTextSelector(state)
  const statusFilter = statusFilterSelector(state)
  const prioritiesFilter = prioritiesFilterSelector(state)

    const todoFilter = state.todoList.filter((todo) => {
      if (statusFilter === 'All') return prioritiesFilter.length 
        ? todo.name.includes(searchText) &&
            prioritiesFilter.includes(todo.priority)
        : todo.name.includes(searchText);
      
      return todo.name.includes(searchText) && statusFilter === "Completed"
        ? todo.complete 
        : !todo.complete && (prioritiesFilter.length ? prioritiesFilter.includes(todo.priority)
              : todo.name.includes(searchText)); 
    });
    return todoFilter;
  };
export const searchTextSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const prioritiesFilterSelector = (state) => state.filters.priorities;
