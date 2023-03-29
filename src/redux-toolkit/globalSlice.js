import { createSlice } from "@reduxjs/toolkit"
const globalSlice = createSlice({
  //key:value
  name: "global",
  initialState: {
    darkMode: false,
    showSidebar: true,
  },  
  reducers: {
    toggleDarkMode: (state, actions) => {
      return {
        ...state,
        darkMode: actions.payload,
      };
    },
    toggleSideBar: (state, actions) => {
      return {
        ...state,
        showSidebar: actions.payload,
      };
    },
  },
});
export const { toggleDarkMode, toggleSideBar } = globalSlice.actions; // sử dụng để xử lí các thao tác (cập nhật) 
export default globalSlice.reducer //đẩy vào store
