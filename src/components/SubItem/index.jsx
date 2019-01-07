import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const SubItem = ({ headerText, subHeaderText }) => (
  <div className="SubItem">
    <h4 className="SubItem__header">{headerText}</h4>
    <h5 className="SubItem__subHeader">{subHeaderText}</h5>
  </div>
);

SubItem.propTypes = {
  headerText: PropTypes.string.isRequired,
  subHeaderText: PropTypes.string.isRequired
};

export default SubItem;
