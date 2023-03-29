import { createAction,  createSlice } from "@reduxjs/toolkit";
import { handleFetchNews } from "./handle";

export const setLoading= createAction("setLoading")

// console.log("handleFetchNews",handleFetchNews);
const newsSlice = createSlice({
  name: "news",
  initialState: {
    hits: [],
    loading: false,
    errorMessage: "",
    query: "",
  },
  // fulfilled,pendding,reject(promise)
  reducers: {
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(handleFetchNews.fulfilled, (state, action) => {
      state.hits = action.payload;
      state.loading = false;
    })
      .addCase(handleFetchNews.pending, (state, action) => {
      state.loading = true;
    }).addCase(handleFetchNews.rejected, (state, action) => {
      state.loading = false;
    }).addCase(setLoading, (state, action) => {
       state.loading = action.payload
    })
  },
});
// export const { setLoading } = newsSlice.actions;
export default newsSlice.reducer;
