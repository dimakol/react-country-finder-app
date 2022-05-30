import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.scss";

const Sidebar: React.FC<{ items: string[] }> = ({ items }) => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
      {items.map((item: string, index: number) => (
        <div key={index.toString()}>
          <Link className="menu-item" to={`${item}`} onClick={closeSideBar}>
            {item}
          </Link>
        </div>
      ))}
    </Menu>
  );
};

export default Sidebar;
