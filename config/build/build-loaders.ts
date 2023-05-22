import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  // в поле test указываем рег. выражение, по которому нужно найти файл с необходимым расширением
  // в поле use указываем какой loader необходимо использовать
  // exclude - исключения

  // если не используем typescript - нужен babel-loader для использования jsx
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [typescriptLoader, cssLoader, scssLoader];
}
