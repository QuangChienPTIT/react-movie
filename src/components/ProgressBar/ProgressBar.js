import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    0: "#0089ff",
    0.5: "#0089ff",
    "1.0": "#0089ff",
  },
  shadowBlur: 5,
  barThickness: 4,
});

function ProgressBar(props) {
  const { progressBarStatus } = props;
  if (progressBarStatus === "OPEN") {
    return <TopBarProgress />;
  }
  return "";
}

ProgressBar.propTypes = {
    progressBarStatus:PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    progressBarStatus: state.ui.progressBarStatus,
  };
};

export default React.memo(connect(mapStateToProps, null)(ProgressBar));
