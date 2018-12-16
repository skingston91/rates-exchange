import React from "react";

import IconGroup from "../../components/IconGroup";

import { ReactComponent as Plus } from "../../assets/icons/plus-circle.svg";

const plusIcon = {
  SvgComponent: Plus,
  fill: "#0167fd",
  stroke: "white"
};

const Rates = () => {
  return (
    <div className="Rates">
      <IconGroup
        text="Add currency Pair"
        icon={plusIcon}
        handleClick={() => {
          console.log("Icon Group");
        }}
      />
    </div>
  );
};

export default Rates;
