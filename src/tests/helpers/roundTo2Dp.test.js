import { roundNumberTo2Dp } from "../../helpers";

describe("roundNumberTo2Dp", () => {
  it("should round numbers down in the dp range", () => {
    expect(roundNumberTo2Dp(100.111)).toEqual(100.11);
  });

  it("shouldn't have the 2 decimal points in whole numbers", () => {
    expect(roundNumberTo2Dp(100)).toEqual(100);
  });
});
