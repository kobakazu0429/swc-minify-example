const path = require("node:path");

module.exports = {
  mode: "none",

  entry: {
    alias: "./src/alias.mjs",
    named: "./src/named.mjs",
  },

  output: {
    path: path.resolve(__dirname, "bundled"),
  },

  optimization: {
    providedExports: true,
    usedExports: true,
    mangleExports: "deterministic",
  },
};
