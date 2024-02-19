import React from "react";
import { Menu } from "antd";
import Logo from "./logo.svg";
import RightLogo from "./RightLogo.svg";
import "./Sidebar.css";

const items =  [
  {
    label: <p>Protfolio</p>,
    key: "protfolio",
  },
  {
    label: <p>Team</p>,
    key: "team",
  },
  {
    label: <p>Writting press</p>,
    key: "press",
  }
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <Menu items={items} defaultSelectedKeys={[""]} mode="horizontal" theme="dark"
      />
      <RightLogo />
    </div>
  );
};
export default Sidebar;
