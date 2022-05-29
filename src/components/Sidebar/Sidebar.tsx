import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.scss";

const Sidebar: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <Menu>
      {items.map((item: string, index: number) => (
        <a key={index.toString()} className="menu-item" href={`/${item}`}>
          {item}
        </a>
      ))}
    </Menu>
  );
};

export default Sidebar;
