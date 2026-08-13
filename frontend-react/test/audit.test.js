import { expect } from "chai";
import { formatEventTimestamp, sortEventsByTimestamp } from "../src/audit.js";

describe("formatEventTimestamp", () => {
  it("formats an ISO timestamp to a date string", () => {
    expect(formatEventTimestamp("2026-01-15T09:00:00Z")).to.equal("2026-01-15");
  });
});

describe("sortEventsByTimestamp", () => {
  it("sorts newest first without mutating input", () => {
    const input = [
      { id: 1, timestamp: "2026-01-01T00:00:00Z" },
      { id: 2, timestamp: "2026-02-01T00:00:00Z" },
    ];
    const sorted = sortEventsByTimestamp(input);
    expect(sorted.map((e) => e.id)).to.deep.equal([2, 1]);
    expect(input[0].id).to.equal(1);
  });
});
