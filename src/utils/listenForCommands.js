import readline from 'readline';
import { help } from './help.js';
import { cwdMessage } from './cwdMessage.js';
import { capitalizeFirstLetter } from './capitaliseFirstLetter.js';
import { invalidInputMessage } from './invalidInputMessage.js';
import { CONSOLE_COLORS } from './consoleColors.js';

export const listenForCommands = (username, userHomedir) => {
  let cwd = userHomedir;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', async (line) => {
    try {
      const [command, ...args] = line.trim().split(' ');
      console.log('command', command);
      switch (command) {
        case 'exit':
        case '.exit':
        case process.exit: {
          console.log(
            CONSOLE_COLORS.cyan,
            `Thank you for using the File Manager, ${capitalizeFirstLetter(
              username
            )}!`
          );
          process.exit();
        }
        case 'help': {
          help();
          break;
        }
        default: {
          invalidInputMessage(
            'Invalid input! Type "help" to see available commands.'
          );
          break;
        }
      }
    } catch (error) {
      console.log(error);
      // invalidInputMessage(
      //   'Invalid input! Type "help" to see available commands.'
      // );
    } finally {
      cwdMessage();
    }
  }).on('close', () => {
    console.log(
      `Thank you for using File Manager, ${capitalizeFirstLetter(username)}!`
    );
  });
};
