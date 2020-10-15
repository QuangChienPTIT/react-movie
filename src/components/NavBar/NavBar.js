import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import { SearchOutlined, GiftOutlined } from "@ant-design/icons";
import Menu from '../Menu/Menu'
import "./style.scss";

export default function NavBar(props) {
  return (
    <div className="main-navbar px-3 align-items-center justify-content-between d-none d-lg-flex">
      <Link to="/" className="logo p-2">
        <img src={logo} alt="The movie db"></img>
      </Link>
      <Menu mode="horizontal"></Menu>
      <div className="navbar-action d-flex align-item-center">
        <SearchOutlined className="mr-2 d-flex align-items-center" />
        <GiftOutlined className="mr-2 d-flex align-items-center" />
        <span className="mr-2">Đăng nhập</span>
      </div>
    </div>
  );
}
