import { GET_COLOR_DATA, LOAD_COLOR_DATA } from "./constants";

export function get_color_data() {
  return {
    type: GET_COLOR_DATA,
  };
}

export function load_color_data(payload) {
  return {
    type: LOAD_COLOR_DATA,
    payload,
  };
}
