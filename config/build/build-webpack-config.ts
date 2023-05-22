import webpack from "webpack";
import path from "path";

import { BuildOptions } from "./types/config";

import { buildPlugins } from "./build-plugins";
import { buildLoaders } from "./build-loaders";
import { buildResolvers } from "./build-resolvers";

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  return {
    // мод приложения - development или production
    mode: options.mode,

    // стартовая точка приложения
    entry: options.paths.entry,

    // можно entry делать так
    // entry: {
    //   // файл в dist будет называться random при использования шаблона [name] в output
    //   random: path.resolve(__dirname, 'src', 'index.ts'),
    // },

    // настройка куда и как будет происходить сборка приложения
    output: {
      // имя файла бандла
      //
      // [name] - это шаблон для динамического названия файлов
      // например, у нас есть несколько точек входа (entry)
      // [name] берет название файла из entry (по умолчанию называется main)
      //
      // [contenthash] позволяет дополнять названия для бандл файлов, генерируя ему уникальный ключ в название
      // это нужно для того, чтобы браузер понимал, что мы обновили наше приложение
      // браузер по умолчанию хеширует файлы, взятые с сервера, для оптимизации
      // если не добавлять [contenthash], то браузер не будет понимать, что мы обновили наше приложение
      // и будет брать файлы из кеша
      filename: "[name].[contenthash].js",

      // где будет расположен бандл
      path: options.paths.build,

      // удаляет предыдущие файлы бандла при обновлении
      clean: true,
    },

    // плагины - дополнения для webpack, которые позволяют ему расширять свои возможности
    plugins: buildPlugins(options),

    // здесь настраиваем loaders - обрабатывает файлы, которые не являются .js или json
    module: {
      rules: buildLoaders(),
    },

    // настройка разрешений модулей
    // например, можно настроить alias или возможность не указывать расширения файлов
    resolve: buildResolvers(),
  };
}
