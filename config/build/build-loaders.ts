import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  // в поле test указываем рег. выражение, по которому нужно найти файл с необходимым расширением
  // в поле use указываем какой loader необходимо использовать
  // exclude - исключения
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader];
}
