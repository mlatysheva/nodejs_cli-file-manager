import path from 'path';
import { doesExist } from '../utils/doesExist.js';
import os from 'os';
import { CONSOLE_COLORS } from '../utils/consoleColors.js';

export const cd = async (cwd, paths) => {
  try {
    const newCwd = path.join(cwd, paths.join(' '));
    const pathDoesExist = await doesExist(newCwd);
    if (pathDoesExist) {
      process.chdir(newCwd);
      return newCwd;
    } else {
      console.log(CONSOLE_COLORS.red, `Directory ${newCwd} does not exist.`);
      return cwd;
    }
  } catch (error) {
    console.log(CONSOLE_COLORS.red, `An error has occurred:${os.EOL} ${error}`);
    console.log(CONSOLE_COLORS.yellow, `Enter a command or type "help"`);
  }
};
