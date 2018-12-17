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
      <div className="Rates__Set">
        <SubItem headerText="1 GBP" subHeaderText="British Pound" />
        <MiniLineGraph data={[5, 10, 5, 20, 8, 15, 5, 10, 5, 20, 8, 15]} />
        <SubItem headerText="8.60 63" subHeaderText="Euro - CNY" />
      </div>
      <div className="Rates__Set">
        <SubItem headerText="1 GBP" subHeaderText="British Pound" />
        <MiniLineGraph data={[5, 10, 5, 20, 8, 15]} />
        <SubItem headerText="8.60 63" subHeaderText="Euro - CNY" />
      </div>
      <div className="Rates__Set">
        <SubItem headerText="1 GBP" subHeaderText="British Pound" />
        <MiniLineGraph data={[5, 10, 5, 20, 8, 15]} />
        <SubItem headerText="8.60 63" subHeaderText="Euro - CNY" />
      </div>
      <div className="Rates__Set">
        <SubItem headerText="1 GBP" subHeaderText="British Pound" />
        <MiniLineGraph data={[5, 10, 5, 20, 8, 15]} />
        <SubItem headerText="8.60 63" subHeaderText="Euro - CNY" />
      </div>
    </div>
  );
};

export default Rates;
