import { put, all, call, takeLatest } from "redux-saga/effects";
import { GET_COLOR_DATA } from "./constants";
import { fetchData } from "../../Helper";
import { load_color_data } from "./action";

const token = localStorage.getItem("token");
export function* getColorData() {
  try {
    const colorData = yield call(fetchData, "https://reqres.in/api/unknown", {
      method: "GET",
      Header: {
        Authorization: "Bearer" + token,
      },
    });
    console.log(colorData?.data);
    if (colorData?.status === 200) {
      yield put(load_color_data(colorData?.data));
    }
  } catch (err) {
    console.log(err);
  }
}

export default function* dashboardSaga() {
  yield takeLatest(GET_COLOR_DATA, getColorData);
}
