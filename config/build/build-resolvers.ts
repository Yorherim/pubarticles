import path from "path";
import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    // позволяет при импорте не указывать расширения
    // например, import Component from "./component" можно не добавлять в component .ts
    extensions: [".tsx", ".ts", ".js"],

    // абсолютные пути в приоритете
    preferAbsolute: true,

    alias: {
      configBuild: path.resolve(__dirname, "src/config/build"),
      Templates: path.resolve(__dirname, "src/templates/"),
    },

    // файл, к которому нужно обращаться за экспортом в первую очередь
    mainFiles: ["index"],

    // указываем абсолютные пути
    modules: [options.paths.src, "node_modules"],
  };
}
