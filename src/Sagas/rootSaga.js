import { all } from "redux-saga/effects";
import LoginSaga from "../Containers/Login/saga";
import DashboardSaga from "../Containers/Dashboard/saga";

function* secondhelloSaga() {
  yield console.log("Hello Sagas second time!");
}

export default function* rootSaga() {
  yield all([secondhelloSaga(), LoginSaga(), DashboardSaga()]);
}
