const path = require("path");

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
};
