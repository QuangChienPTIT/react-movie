import React from "react";
import { Drawer } from "antd";
import { connect } from "react-redux";
import { toggleSidebar } from "../../store/actions";
import Menu from "../Menu/Menu";
import "./style.scss";
function Sidebar(props) {
  const sidebarClick = (e) => {
    if(e.target.tagName==='A'){
      props.toggle();
    }
  };
  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={props.toggle}
      onClick={(e) => sidebarClick(e)}
      visible={props.visible}
      className="sidebar"
    >
      <Menu mode="inline"></Menu>
    </Drawer>
  );
}

const mapStateToProps = (state) => {
  return {
    visible: state.ui.sideBarStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch(toggleSidebar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
