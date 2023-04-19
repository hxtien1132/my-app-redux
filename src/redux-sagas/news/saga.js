import { takeLatest } from "redux-saga/effects";
import handleGetNews from "./handles";
import { getNews } from "./newsSlice";


//watch:nơi này bắt actions khi component dispatch
export default function* newsSaga() {
  // yield takeEvery(getNews.type, handleGetNews)// lấy tất cả các dispatch
  yield takeLatest(getNews.type, handleGetNews ); //lấy cái cuối cùng
}
