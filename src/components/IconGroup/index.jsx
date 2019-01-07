import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";

import "./styles.scss";

const IconGroup = ({ handleClick, icon, text, color = "black" }) => (
  <div className="Rates">
    <div
      className="IconGroup"
      onClick={() => {
        handleClick && handleClick();
      }}
    >
      <div className="IconGroup__Icon">
        <Icon {...icon} />
      </div>
      <h3 className={`IconGroup__text IconGroup__text--${color}`}> {text}</h3>
    </div>
  </div>
);

Icon.propTypes = {
  icon: PropTypes.object,
  handleClick: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.string
};

export default IconGroup;
