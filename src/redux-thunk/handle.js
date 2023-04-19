import { createAsyncThunk } from "@reduxjs/toolkit";
import requestGetNews from "./requests";

export const handleFetchNews = createAsyncThunk(
    "news/handleFetchNews",
    //query nhiều dùng object {query}
  async (query, thunkAPI) => {
    console.log("query", query);
    console.log("thunkAPI", thunkAPI);
    const response = await requestGetNews(query);
    return response.data.hits;
  }
);
