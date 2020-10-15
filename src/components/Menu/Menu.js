import React from "react";
import { Menu as MenuAnt } from "antd";
import { Link } from "react-router-dom";
import {menuLinks} from "../../constants/index";

function Menu(props) {
  const renderMenu = (menuLinks) => {
    var result;
    result = menuLinks.map((menu, index) => {
      if (menu.sub && Array.isArray(menu.sub)) {
        return (
          <MenuAnt.SubMenu
            key={`sub${index}`}
            title={menu.title}
            className="sub-menu"
          >
            {menu.sub.map((item, i) => {
              return (
                <MenuAnt.Item key={i}>
                  <Link to={item.href}>{item.title}</Link>
                </MenuAnt.Item>
              );
            })}
          </MenuAnt.SubMenu>
        );
      } else {
        return (
          <MenuAnt.Item key={index}>
            <Link to={menu.href}>{menu.title}</Link>
          </MenuAnt.Item>
        );
      }
    });
    return result;
  };
  return (
    <MenuAnt theme="dark" mode={props.mode} className="menu">
      {renderMenu(menuLinks)}
    </MenuAnt>
  );
}

export default Menu;
