"use strict";
const express = require("express");
const { listEvents, recordEvent } = require("../data/audit");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ events: listEvents() });
});

router.post("/", (req, res) => {
  const { route, action } = req.body;
  if (!route || !action) return res.status(400).json({ error: "route and action are required" });
  res.status(201).json(recordEvent(route, action));
});

module.exports = router;
