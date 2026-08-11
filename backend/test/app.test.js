"use strict";

const { expect } = require("chai");
const request = require("supertest");
const app = require("../src/app");

describe("GET /api/widgets", () => {
  it("returns the widget list", async () => {
    const res = await request(app).get("/api/widgets");
    expect(res.status).to.equal(200);
    expect(res.body.widgets).to.have.length(1);
  });
});

describe("GET /", () => {
  it("reports the migration routes", async () => {
    const res = await request(app).get("/");
    expect(res.status).to.equal(200);
    expect(res.body.legacy_app).to.equal("/legacy (Angular)");
    expect(res.body.new_app).to.equal("/app (React)");
  });
});

describe("GET /health", () => {
  it("reports ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).to.equal(200);
  });
});
