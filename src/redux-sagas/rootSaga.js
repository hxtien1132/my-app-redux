import { all, fork } from "redux-saga/effects"
import newSaga from "./news/saga"

export default function* rootSaga() {
 yield all([fork(newSaga)])
}
//blocking vs non-blocking
//blocking:call, all   //blocking: dạng như await phải đợi chạy xong lệnh ở dưới mới được chạy
//non-blocking:fork       //non-blocking:ngược lại