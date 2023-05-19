import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const config: webpack.Configuration = {
  // мод приложения - development или production
  mode: "development",

  // стартовая точка приложения
  entry: path.resolve(__dirname, "src", "index.ts"),

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
    path: path.resolve(__dirname, "dist"),

    // удаляет предыдущие файлы бандла при обновлении
    clean: true,
  },

  // плагины - дополнения для webpack, которые позволяют ему расширять свои возможности
  plugins: [
    // отображает прогресс сборки приложения
    new webpack.ProgressPlugin(),

    // HTMLWebpackPlugin генерирует HTML-файл для приложения и автоматически
    // вставляет все сгенерированные .js файлы в него
    new HTMLWebpackPlugin({
      // шаблон для html файла
      // нужно чтобы html файл создавался с div.root
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],

  // здесь настраиваем loaders - обрабатывает файлы, которые не являются .js или json
  module: {
    // в поле test указываем рег. выражение, по которому нужно найти файл с необходимым расширением
    // в поле use указываем какой loader необходимо использовать
    // exclude - исключения
    rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
  },

  // настройка разрешений модулей
  // например, можно настроить alias или возможность не указывать расширения файлов
  resolve: {
    // позволяет при импорте не указывать расширения
    // например, import Component from "./component" можно не добавлять в component .ts
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default config;
