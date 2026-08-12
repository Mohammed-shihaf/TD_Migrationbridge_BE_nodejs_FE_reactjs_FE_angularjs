"use strict";
const express = require("express");
const path = require("path");
const widgetsRouter = require("./routes/widgets");
const auditRouter = require("./routes/audit");

const app = express();
app.use(express.json());

app.use("/api/widgets", widgetsRouter);
app.use("/api/audit", auditRouter);
app.get("/health", (req, res) => res.json({ status: "ok" }));

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
