"use strict";

const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// Shared API — both the legacy Angular app and the new React app call
// this same backend during the migration window.
app.get("/api/widgets", (req, res) => {
  res.json({ widgets: [{ id: 1, label: "Migration-bridge proof widget" }] });
});

app.get("/health", (req, res) => res.json({ status: "ok" }));

// Real route-based traffic split: this is what makes the branch a
// genuine "migration bridge", not two disconnected apps. /legacy/*
// serves the old Angular app; /app/* serves the new React app. A real
// org would route a percentage of traffic or specific user cohorts to
// each during an incremental migration - this static path split is the
// minimal, real version of that mechanism.
app.use("/legacy", express.static(path.join(__dirname, "..", "legacy-static")));
app.get("/legacy/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "legacy-static", "index.html"));
});

app.use("/app", express.static(path.join(__dirname, "..", "app-static")));
app.get("/app/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "app-static", "index.html"));
});

app.get("/", (req, res) => {
  res.json({
    message: "Migration in progress",
    legacy_app: "/legacy (Angular)",
    new_app: "/app (React)",
  });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`migrationbridge-backend listening on ${port}`));
}

module.exports = app;
