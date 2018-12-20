import React from "react";
import renderer from "react-test-renderer";
import Icon from "./index";

import { ReactComponent as Close } from "../../assets/icons/x.svg";

const closeIcon = {
  SvgComponent: Close,
  stroke: "black"
};

test("Icon renders correctly", () => {
  const tree = renderer.create(<Icon {...closeIcon} />).toJSON();
  expect(tree).toMatchSnapshot();
});
