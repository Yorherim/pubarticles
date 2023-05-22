import path from "path";
import webpack from "webpack";

import { buildWebpackConfig } from "./config/build/build-webpack-config";
import { BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const config: webpack.Configuration = buildWebpackConfig({
    mode: env.mode || "development",
    paths: {
      html: path.resolve(__dirname, "public", "index.html"),
      build: path.resolve(__dirname, "dist"),
      entry: path.resolve(__dirname, "src", "index.tsx"),
    },
    port: env.port || 3000,
  });

  return config;
};
