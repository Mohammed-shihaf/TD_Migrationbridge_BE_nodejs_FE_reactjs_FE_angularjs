const path = require("path");
const webpack = require("webpack");
const { execSync } = require("child_process");

function gitBranch() {
  try {
    return execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
  } catch {
    return "unknown";
  }
}

module.exports = {
  mode: "production",
  target: "node",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
    library: { type: "commonjs2" },
  },
  externalsPresets: { node: true },
  externals: { express: "commonjs express" },
  plugins: [
    // Real build-time metadata baked into the bundle - identifies which
    // migration-stage build is actually deployed, genuinely useful for
    // a migration bridge tracking incremental rollout.
    new webpack.DefinePlugin({
      __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
      __GIT_BRANCH__: JSON.stringify(gitBranch()),
    }),
  ],
};
