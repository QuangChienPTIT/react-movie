import * as actionKeys from "../../constants/actionKeys";

export const toggleSidebar = () => {
  return {
    type: actionKeys.TOGGLE_SIDEBAR,
  };
};

export const setProgressBar = (isOpen) => ({
  type: actionKeys.SET_PROGRESS_BAR,
  isOpen: isOpen,
});
