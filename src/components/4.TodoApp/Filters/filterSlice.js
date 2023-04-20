// *** redux ***
export const FilterSearch = "filter/searchFilterChange";
export const FilterStatus = "filter/statusFilterChange";
export const Filterpriority = "filter/priorityFilterChange";


const initstate = { search: "", status: "All", priorities: [] };

function filterSlice(state = initstate, action) {
  switch (action.type) {
    case FilterSearch:
      return { ...state, search: action.payload };
    case FilterStatus:
      return { ...state, status: action.payload };
    case Filterpriority:
      return { ...state, priorities: action.payload };
    default:
      return state;
  }
}
export default filterSlice;

