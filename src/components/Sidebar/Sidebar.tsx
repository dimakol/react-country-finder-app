import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.scss";

const Sidebar: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <Menu>
      {items.map((item: string, index: number) => (
        <div key={index.toString()}>
          <Link className="menu-item" to={`${item}`}>
            {item}
          </Link>
        </div>
      ))}
    </Menu>
  );
};

export default Sidebar;
