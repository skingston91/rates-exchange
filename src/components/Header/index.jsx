import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Header = ({ headerText, leftIcon, rightIcon, leftLink, rightLink }) => (
  <div className="Header">
    {leftIcon && (
      <Link to={leftLink}>
        <img className="Header__leftIcon" src={leftIcon} alt="back" />
      </Link>
    )}
    <p className="Header__text"> {headerText} </p>
    {rightIcon && (
      <Link to={rightLink}>
        <img className="Header__rightIcon" src={leftIcon} alt="forward" />
      </Link>
    )}
  </div>
);

export default Header;
