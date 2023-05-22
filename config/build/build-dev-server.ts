import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,

    // автоматически открывает приложение в браузере при запуске
    open: true,

    // для работы с SPA
    // Позволяет выполнять прокси-запросы через указанную индексную страницу (по умолчанию 'index.html ')
    historyApiFallback: true,
  };
}
