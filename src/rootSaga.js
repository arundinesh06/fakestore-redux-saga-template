import { fork, put, takeEvery } from "redux-saga/effects";
import saga1 from "./sagas";
function* rootSaga() {
  yield [
    fork(saga1), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
  ];
}
export default rootSaga;
