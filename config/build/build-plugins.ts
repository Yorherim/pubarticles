import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

import { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    // отображает прогресс сборки приложения
    new webpack.ProgressPlugin(),

    // HTMLWebpackPlugin генерирует HTML-файл для приложения и автоматически
    // вставляет все сгенерированные .js файлы в него
    new HTMLWebpackPlugin({
      // шаблон для html файла
      // нужно чтобы html файл создавался с div.root
      template: paths.html,
    }),
  ];
}
