import React from "react";

import Icon from "../Icon";

import "./styles.scss";

const IconGroup = ({ handleClick, icon, text }) => (
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
      <h3> {text}</h3>
    </div>
  </div>
);

export default IconGroup;
