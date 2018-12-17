import React from "react";

import IconGroup from "../../components/IconGroup";
import SubItem from "../../components/SubItem";
import MiniLineGraph from "../../components/MiniLineGraph";

import { ReactComponent as Plus } from "../../assets/icons/plus-circle.svg";

import "./styles.scss";

const plusIcon = {
  SvgComponent: Plus,
  fill: "#0167fd",
  stroke: "white"
};

const Alerts = () => {
  return (
    <div className="Alerts">
      <IconGroup
        text="Create Alert"
        icon={plusIcon}
        handleClick={() => {
          console.log("Icon Group");
        }}
      />
      <div className="Alerts__Set">
        <SubItem headerText="GBP" subHeaderText="British Pound" />
        <MiniLineGraph data={[5, 10, 5, 20, 8, 15]} />
        <SubItem headerText="GBP" subHeaderText="British Pound" />
      </div>
    </div>
  );
};

export default Alerts;
