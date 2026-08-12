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

// __BUILD_TIME__/__GIT_BRANCH__ are injected by webpack's DefinePlugin
// (backend/webpack.config.js) only in the bundled dist/app.bundle.js;
// undefined when running the source directly via `npm run dev`.
app.get("/build-info", (req, res) => {
  res.json({
    buildTime: typeof __BUILD_TIME__ !== "undefined" ? __BUILD_TIME__ : null,
    gitBranch: typeof __GIT_BRANCH__ !== "undefined" ? __GIT_BRANCH__ : null,
    bundled: typeof __BUILD_TIME__ !== "undefined",
  });
});

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
