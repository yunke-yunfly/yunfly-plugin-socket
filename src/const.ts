import * as path from 'path';
import { ENV_SRC } from '@yunflyjs/yunfly';

// socket middleware 文件夹
export const SOCKET_MIDDLEWARE_DIR = path
  .join(process.cwd(), `${ENV_SRC}/socket/middleware/`)
  .replace(/\\/g, '//');

// socket main 函数入口
export const SOCKET_CONTROLLER_MAIN = path
  .join(process.cwd(), `${ENV_SRC}/socket/controller/MainController`)
  .replace(/\\/g, '//');

