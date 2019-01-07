import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

import "./styles.scss";

const NavTab = ({ to, text }) => (
  <NavLink className="NavTab" activeClassName="NavTab--selected" to={to}>
    {text}
  </NavLink>
);

NavTab.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NavTab;
