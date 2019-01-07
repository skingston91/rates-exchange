import React from "react";
import PropTypes from "prop-types";

import NavTab from "./NavTab";

import "./styles.scss";

const NavBar = ({ navElements }) => (
  <div className="NavBar">
    {navElements.map(navElement => (
      <NavTab key={navElement.to} {...navElement} />
    ))}
  </div>
);

NavBar.propTypes = {
  navElements: PropTypes.array.isRequired
};

export default NavBar;
