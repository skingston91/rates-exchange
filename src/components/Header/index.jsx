import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
  leftIconProps: PropTypes.object,
  rightIconProps: PropTypes.object,
  leftLink: PropTypes.string,
  rightLink: PropTypes.string
};

export default Header;
