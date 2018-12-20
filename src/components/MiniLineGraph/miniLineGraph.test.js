import React from "react";
import renderer from "react-test-renderer";
import MiniLineGraph from "./index";

test("MiniLineGraph renders correctly", () => {
  const tree = renderer
    .create(<MiniLineGraph data={[5, 10, 5, 20, 8, 15, 5, 10, 5, 20, 8, 15]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
