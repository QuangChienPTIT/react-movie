import * as actionKeys from "../../constants/actionKeys";

const initState = {};
const ui = (state = initState, action) => {
  switch (action.type) {
    case actionKeys.SET_PROGRESS_BAR:
      return { ...state, progressBarStatus: action.isOpen };
    case actionKeys.TOGGLE_SIDEBAR:
      return { ...state, sideBarStatus: !state.sideBarStatus };
  }
  return state;
};

export default ui;
