import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";

const NavTab = ({ to, text }) => (
  <NavLink className="NavTab" activeClassName="NavTab--selected" to={to}>
    {text}
  </NavLink>
);

export default NavTab;
