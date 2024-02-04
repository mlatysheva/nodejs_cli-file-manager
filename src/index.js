#!/usr/bin/env node
import { parseUserArgs } from './cli/parseUserArgs.js';
import { homedir } from 'os';
import { cwdMessage } from './utils/cwdMessage.js';
import { listenForCommands } from './utils/listenForCommands.js';
import { capitalizeFirstLetter } from './utils/capitaliseFirstLetter.js';
import { CONSOLE_COLORS } from './utils/consoleColors.js';

const userArgs = parseUserArgs();
if (userArgs.username) {
  console.log(
    CONSOLE_COLORS.cyan,
    `Welcome to the File Manager, ${capitalizeFirstLetter(userArgs.username)}!`
  );
} else {
  console.log(
    CONSOLE_COLORS.cyan,
    `Welcome to the File Manager, Beautiful Stranger!\nYou haven't specified your username, so we'll call you that.`
  );
}

const userHomedir = homedir();
process.chdir(userHomedir);
cwdMessage();
console.log(CONSOLE_COLORS.yellow, `Enter a command or type "help" to see available commands.`);
listenForCommands(userArgs.username, userHomedir);
