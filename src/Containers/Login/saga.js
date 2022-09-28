import { put, all, call, takeLatest } from "redux-saga/effects";
import { DISPATCH_LOGIN } from "./constants";
import { login_success, login_error } from "./action";
import { fetchData } from "../../Helper";

function* helloSaga() {
  yield console.log("Hello Sagas!");
}

// const fetchData = async (url, params) => {
//   try {
//     const response = await fetch(url, params);
//     const data = await response.json();
//     return { data: data, status: response.status };
//   } catch (e) {
//     console.log(e);
//   }
// };

export function* getLogin(payload) {
  const body = {
    email: payload.username,
    password: payload.password,
  };

  try {
    const loginResult = yield call(fetchData, "https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (loginResult?.status === 200) {
      localStorage.setItem("token", loginResult?.data?.token);
      yield put(login_success(payload.username));
    } else {
      yield put(login_error(loginResult?.data?.error));
    }
  } catch (err) {
    console.log(err);
    yield put(login_error(err));
  }
}

// export function* get_protein_data() {
//   console.log("caught you");
//   // let proteinresponse;
//   try {
//     const proteinresponse = yield call(
//       fetchData,
//       "https://nutrition-82325.firebaseio.com/asa.json"
//     );
//     console.log("Trial Response>>>>>>>>>>>>", proteinresponse.status);
//     yield put(actions.load_protein_data(proteinresponse.data));
//   } catch (err) {
//     console.log(err);
//   }
// }

export default function* firstSaga() {
  // yield all([helloSaga()]),
  yield helloSaga();
  yield takeLatest(DISPATCH_LOGIN, getLogin);
}
