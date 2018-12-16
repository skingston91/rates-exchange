import React from "react";

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

export default Icon;
