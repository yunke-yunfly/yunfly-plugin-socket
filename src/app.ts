
import Socket from './index'
import logger from '@yunflyjs/loggers';

interface SocketPluginOptions {
  server: any;
  pluginConfig: SocketPluginConfig;
}

export interface SocketPluginConfig {
  enable: boolean;
  type: 'worker' | 'all';
  path?: string; // default  '/socket.io'
  [props: string]: any;
}

/**
 * socket plugin
 *
 * @export
 * @param {SocketPluginOptions} {
 *   server,
 *   pluginConfig,
 * }
 * @return {*}  {void}
 */
export default function socketPlugin({
  server,
  pluginConfig,
}: SocketPluginOptions): void {
  if (!pluginConfig.enable) {
    return;
  }
  if(!server) {
    logger.window().error('init socket error.');
  }
  // init socket service
  new Socket({ config: pluginConfig, server: server }).ready();
}
