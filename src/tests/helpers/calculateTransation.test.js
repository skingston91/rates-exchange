import { calculateTransaction } from "../../helpers";

// TODO handling floating values as could likely cause them to fail

describe("calculateTransaction", () => {
  it("should handle dealing with rates below 1 when converting to", () => {
    expect(calculateTransaction(100, 0.7919, true)).toEqual(126.27857052658163);
  });

  it("should handle dealing with rates above 1 when converting to", () => {
    expect(calculateTransaction(100, 0.7919, false)).toEqual(79.19);
  });
});
