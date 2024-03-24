import os from 'os';
import { CONSOLE_COLORS } from '../utils/consoleColors.js';

export const osOptions = (osArg) => {
  switch (osArg) {
    case 'homedir': {
      console.log(CONSOLE_COLORS.green, os.homedir());
      break;
    }
    case 'architecture': {
      console.log(CONSOLE_COLORS.green, os.arch());
      break;
    }
    case 'cpus': {
      const cpuCores = os.cpus();
      console.log(CONSOLE_COLORS.green, `Total CPU cores: ${cpuCores.length}`);
      cpuCores.map((item) => {
        console.dir(item);
      });
      break;
    }
    case 'EOL': {
      console.log(JSON.stringify(os.EOL));
      break;
    }
    case 'username': {
      console.log(CONSOLE_COLORS.green, os.userInfo().username);
      break;
    }
    default: {
      console.log(
        CONSOLE_COLORS.red,
        `No such command ${osArg}. Type "help" to see available commands.`
      );
      break;
    }
  }
};
