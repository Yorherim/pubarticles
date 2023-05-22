import path from "path";
import webpack from "webpack";

import { buildWebpackConfig } from "./config/build/build-webpack-config";

const config: webpack.Configuration = buildWebpackConfig({
  mode: "development",
  paths: {
    html: path.resolve(__dirname, "public", "index.html"),
    build: path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "index.ts"),
  },
});

export default config;
