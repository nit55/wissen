import { LOAD_COLOR_DATA } from "./constants";

const initialState = {
  colorData: [],
  pages: 0,
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COLOR_DATA:
      return {
        ...state,
        pages: action.payload.total_pages,
        colorData: action.payload.data,
      };
    default:
      return state;
  }
};

export default DashboardReducer;
