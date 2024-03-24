import os from 'os';
import { CONSOLE_COLORS } from './consoleColors.js';

export const cwdMessage = () => {
  const cwd = process.cwd();
  console.log(CONSOLE_COLORS.cyan, `You are currently in ${cwd}${os.EOL}`);
}
