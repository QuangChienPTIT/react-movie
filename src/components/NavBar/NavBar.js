import React, { Component } from "react";
import { Menu } from "antd";
import { ReactComponent as Logo } from "./logo.svg";
import { Link } from "react-router-dom";
import { SearchOutlined, GiftOutlined } from "@ant-design/icons";
import "./style.scss";

const menuLinks = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Truyền hình",
    href: "/",
  },
  {
    title: "HBO GO",
    href: "/",
  },
  {
    title: "Phim bộ",
    href: "/",
  },
  {
    title: "Thể thao",
    href: "/",
  },
  {
    title: "Anime",
    href: "/",
  },
  {
    title: "Phim lẻ",
    href: "/",
  },
  {
    title: "Xem thêm",
    sub: [
      {
        title: "TV Show",
        href: "/",
      },
      {
        title: "Phim chiếu rạp",
        href: "/",
      },
      {
        title: "Gói đặc sắc",
        href: "/",
      },
      {
        title: "Thiếu nhi",
        href: "/",
      },
      {
        title: "Hài",
        href: "/",
      },
    ],
  },
];

export default class NavBar extends Component {
  render() {
    return (
      <div className="main-navbar align-items-center justify-content-between d-none d-lg-flex">
        <Link to="/" className="logo p-2">
          <Logo></Logo>
        </Link>
        <Menu theme="dark" mode="horizontal" className="menu">
          <Menu.Item key="1">
            <Link to="/">Trang chủ</Link>
          </Menu.Item>
          <Menu.Item key="2">Truyền hình</Menu.Item>
          <Menu.Item key="3">HBO GO</Menu.Item>
          <Menu.Item key="4">Phim bộ</Menu.Item>
          <Menu.Item key="5">Thể thao</Menu.Item>
          <Menu.Item key="6">Anime</Menu.Item>
          <Menu.Item key="7">Phim lẻ</Menu.Item>
          <Menu.SubMenu key="sub" title="Xem thêm" className="sub-menu">
            <Menu.Item key="sub1">TV Show</Menu.Item>
            <Menu.Item key="sub2">Phim chiếu rạp</Menu.Item>
            <Menu.Item key="sub3">Gói đặc sắc</Menu.Item>
            <Menu.Item key="sub4">Thiếu nhi</Menu.Item>
            <Menu.Item key="sub5">Hài</Menu.Item>
          </Menu.SubMenu>
        </Menu>
        <div className="navbar-action d-flex align-item-center">
          <SearchOutlined className="mr-2 d-flex align-items-center" />
          <GiftOutlined className="mr-2 d-flex align-items-center" />
          <span className="mr-2">Đăng nhập</span>
        </div>
      </div>
    );
  }
}
