import React from "react";
import PropTypes from "prop-types";

import { Sparklines, SparklinesLine } from "react-sparklines";

import "./styles.scss";

const MiniLineGraph = ({ data, limit, width = 50, height = 50 }) => (
  <div className="MiniLineGraph">
    <Sparklines data={data} limit={limit} svgWidth={width} svgHeight={height}>
      <SparklinesLine color="blue" />
    </Sparklines>
  </div>
);

MiniLineGraph.propTypes = {
  data: PropTypes.array.isRequired,
  limit: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
};

export default MiniLineGraph;
