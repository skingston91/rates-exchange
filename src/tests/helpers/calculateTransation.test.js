import { calculateTransaction } from "../../helpers";

describe("calculateTransaction", () => {
  it("should handle dealing with rates below 1 when converting to", () => {
    expect(calculateTransaction(100, 0.7919, true).toFixed(2)).toEqual(
      "126.28"
    );
  });

  it("should handle dealing with rates above 1 when converting to", () => {
    expect(calculateTransaction(100, 0.7919, false).toFixed(2)).toEqual(
      "79.19"
    );
  });
});
