import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  // в поле test указываем рег. выражение, по которому нужно найти файл с необходимым расширением
  // в поле use указываем какой loader необходимо использовать
  // exclude - исключения

  // общее использование для css и scss loader
  const cssLoaderUse: (string | webpack.RuleSetRule)[] = [
    options.mode === "development"
      ? "style-loader"
      : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules: {
          // проверяет, есть ли в названии .module.
          // если есть, то задает ему уникальный хэш
          auto: /\.module./gm,

          // каким образом будет хэшироваться
          localIdentName:
            options.mode === "development"
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
        },
      },
    },
  ];

  const loaders: Record<string, webpack.RuleSetRule> = {
    // если не используем typescript - нужен babel-loader для использования jsx
    typescript: {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
    css: {
      test: /\.css$/i,
      use: cssLoaderUse,
    },
    scss: {
      test: /\.s[ac]ss$/i,
      use: [...cssLoaderUse, "sass-loader"],
    },
  };

  return [...Object.values(loaders)];
}
