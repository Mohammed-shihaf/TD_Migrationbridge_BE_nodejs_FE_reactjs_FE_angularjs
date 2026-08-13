"use strict";
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ widgets: [{ id: 1, label: "Migration-bridge proof widget" }] });
});

module.exports = router;
