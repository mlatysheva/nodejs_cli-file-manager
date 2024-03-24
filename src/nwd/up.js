import { EOL } from 'os';
import path from 'path';
import { CONSOLE_COLORS } from '../utils/consoleColors.js';

export const up = (cwd) => {
  const root = path.resolve('/');
  if (cwd === root) {
    console.log(
      CONSOLE_COLORS.yellow,
      `You are already in the root directory: ${root}${
        EOL
      }Enter command or type "help":`
    );
    return cwd;
  } else {
    const newCwd = path.join(cwd, '..');
    process.chdir(newCwd);
    return newCwd;
  }
};
