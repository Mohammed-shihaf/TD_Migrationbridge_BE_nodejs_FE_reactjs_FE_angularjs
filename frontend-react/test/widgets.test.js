import { expect } from "chai";
import { formatWidgetCount } from "../src/widgets.js";

describe("formatWidgetCount", () => {
  it("uses singular for 1", () => {
    expect(formatWidgetCount(1)).to.equal("1 widget");
  });
  it("uses plural for other counts", () => {
    expect(formatWidgetCount(0)).to.equal("0 widgets");
    expect(formatWidgetCount(3)).to.equal("3 widgets");
  });
});
