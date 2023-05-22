import path from "path";
import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
  return {
    // позволяет при импорте не указывать расширения
    // например, import Component from "./component" можно не добавлять в component .ts
    extensions: [".tsx", ".ts", ".js"],

    alias: {
      configBuild: path.resolve(__dirname, "src/config/build"),
      Templates: path.resolve(__dirname, "src/templates/"),
    },
  };
}
