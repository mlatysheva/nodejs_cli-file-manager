import os from 'os';
import path from 'path';
import { CONSOLE_COLORS } from '../utils/consoleColors.js';

export const up = (cwd) => {
  if (cwd === os.homedir()) {
    console.log(
      CONSOLE_COLORS.yellow,
      `You are already in your root directory: ${os.homedir()}${
        os.EOL
      }Enter command or type "help":`
    );
    return cwd;
  } else {
    const newCwd = path.join(cwd, '..');
    process.chdir(newCwd);
    return newCwd;
  }
};
