import React from "react";
import { NavLink } from "react-router-dom";

const NavTab = ({ to, text }) => (
  <div className="NavTab">
    <NavLink activeClassName="NavTab--selected" to={to}>
      {text}
    </NavLink>
  </div>
);

export default NavTab;
