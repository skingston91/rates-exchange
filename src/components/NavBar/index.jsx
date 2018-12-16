import React from "react";

import NavTab from "./NavTab";

import "./styles.scss";

const NavBar = ({ navElements }) => (
  <div className="NavBar">
    {navElements.map(navElement => (
      <NavTab key={navElement.to} {...navElement} />
    ))}
  </div>
);

export default NavBar;
