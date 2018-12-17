import React from "react";
import { Link } from "react-router-dom";

import Icon from "../Icon";

import "./styles.scss";

const Header = ({
  headerText,
  leftIconProps,
  rightIconProps,
  leftLink,
  rightLink
}) => (
  <div className="Header">
    {leftIconProps && (
      <Link to={leftLink} className="Header__leftIcon">
        <Icon {...leftIconProps} />
      </Link>
    )}
    {rightIconProps && (
      <Link to={rightLink} className="Header__rightIcon">
        <Icon {...rightIconProps} />
      </Link>
    )}
    <h1 className="Header__text"> {headerText} </h1>
  </div>
);

export default Header;
