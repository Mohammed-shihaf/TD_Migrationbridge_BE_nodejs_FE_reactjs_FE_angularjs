"use strict";
const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/app");

describe("GET /build-info", () => {
  it("reports unbundled when running from source (dev mode)", async () => {
    const res = await request(app).get("/build-info");
    expect(res.body.bundled).to.equal(false);
    expect(res.body.buildTime).to.be.null;
  });
});
