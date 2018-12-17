import React from "react";

import IconGroup from "../../../components/IconGroup";
import SubItem from "../../../components/SubItem";
import LazyLoadedImage from "../../../components/LazyLoadedImage";

import { ReactComponent as Plus } from "../../../assets/icons/plus-circle.svg";
import GBflag from "../../../assets/flags/4x3/gb.svg";

import "./styles.scss";

const plusIcon = {
  SvgComponent: Plus,
  fill: "#0167fd",
  stroke: "white"
};

const Converter = () => {
  return (
    <div className="Converter">
      <IconGroup
        text="Add currency"
        icon={plusIcon}
        handleClick={() => {
          console.log("Icon Group");
        }}
        color="blue"
      />
      <div className="Converter__Set">
        <div className="Converter__flag">
          <LazyLoadedImage
            src={GBflag}
            style={{ borderRadius: "50%", width: "3rem" }}
          />
        </div>
        <SubItem headerText="GBP" subHeaderText="British Pound" />
        <h4 className="Converter__value">100</h4>
      </div>
    </div>
  );
};

export default Converter;
