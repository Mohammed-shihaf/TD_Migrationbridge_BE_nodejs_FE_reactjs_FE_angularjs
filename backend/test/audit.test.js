"use strict";
const { expect } = require("chai");
const request = require("supertest");
const app = require("../src/app");

describe("GET /api/audit", () => {
  it("returns the migration event log", async () => {
    const res = await request(app).get("/api/audit");
    expect(res.status).to.equal(200);
    expect(res.body.events.length).to.be.at.least(2);
  });
});

describe("POST /api/audit", () => {
  it("records a new migration event", async () => {
    const res = await request(app).post("/api/audit").send({ route: "/reports", action: "migrated" });
    expect(res.status).to.equal(201);
    expect(res.body.route).to.equal("/reports");
  });

  it("400s without route or action", async () => {
    const res = await request(app).post("/api/audit").send({});
    expect(res.status).to.equal(400);
  });
});
