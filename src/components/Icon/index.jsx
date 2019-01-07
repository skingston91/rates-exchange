import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const Icon = props => {
  const { SvgComponent, height = "2rem", width = "2rem", ...rest } = props;
  return (
    <div style={{ height: height, width: width }}>
      <div className="Icon">
        <SvgComponent {...rest} />
      </div>
    </div>
  );
};

Icon.propTypes = {
  SvgComponent: PropTypes.element.isRequired,
  height: PropTypes.string,
  width: PropTypes.string
};

export default Icon;
