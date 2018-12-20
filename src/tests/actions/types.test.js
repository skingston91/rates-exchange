import {
  FETCH_CURRENCY_DONE,
  FETCH_CURRENCY_FAILED
} from "../../redux/actions/types";

describe("action types", () => {
  describe("Fetch Currency types", () => {
    it("FETCH_CURRENCY_DONE has the correct type", () => {
      expect("FETCH_CURRENCY_DONE").toEqual(FETCH_CURRENCY_DONE);
    });

    it("FETCH_CURRENCY_FAILED has the correct type", () => {
      expect("FETCH_CURRENCY_FAILED").toEqual(FETCH_CURRENCY_FAILED);
    });
  });
});
