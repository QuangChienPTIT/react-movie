import * as actionKeys from "../../constants/actionKeys";

const initState = false;
var myReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case actionKeys.TOGGLE_SIDEBAR:
      state = !state;
      return state;
    default:
      return state;
  }
};
export default myReducer;
