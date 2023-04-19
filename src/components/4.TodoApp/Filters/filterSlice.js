//dispatch =>
export const FilterSearch = "filter/searchFilterChange";
export const FilterStatus = "filter/statusFilterChange";
export const Filterpriority = "filter/priorityFilterChange";


const filters = { search: "", status: "All", priorities: [] };

function filterReducer(state = filters, action) {
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
export default filterReducer;
