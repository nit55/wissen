import { combineReducers } from "redux";
import LoginReducer from "../Containers/Login/reducer";
import DashboardReducer from "../Containers/Dashboard/reducer";

const combinedData = { LoginReducer, DashboardReducer };
const rootReducer = combineReducers(combinedData);

export default rootReducer;
