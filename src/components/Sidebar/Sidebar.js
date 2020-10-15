import React from "react";
import { Drawer } from "antd";
import { connect } from "react-redux";
import { toggleSidebar } from "../../store/actions/sidebar";
import Menu from "../Menu/Menu";
import "./style.scss";
function Sidebar(props) {
  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={props.toggle}
      visible={props.visible}
      className="sidebar"
    >
      <Menu mode="inline"></Menu>
    </Drawer>
  );
}

const mapStateToProps = (state) => {
  return {
    visible: state.sidebar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch(toggleSidebar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
