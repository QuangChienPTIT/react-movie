import React from "react";
import { connect } from "react-redux";
import { toggleSidebar } from "../../store/actions";
import logo from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import "./style.scss";

function MobileHeader(props) {
  const showSidebar = () => {
    props.openSidebar();
  };

  const className = `mobile-header d-flex ${props.className}`;
  return (
    <div className={className}>
      <i className="fas fa-align-justify" onClick={showSidebar}></i>
      <Link to="/" className="logo">
        <img src={logo} alt="The movie db"></img>
      </Link>
    </div>
  );
}

var mapDispatchToProps = (dispatch) => {
  return {
    openSidebar: () => dispatch(toggleSidebar()),
  };
};

export default connect(null, mapDispatchToProps)(MobileHeader);
