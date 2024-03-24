import { CONSOLE_COLORS } from './consoleColors.js';

export const invalidInputMessage = (message = 'Invalid input! Specify a valid path') => {
  console.log(CONSOLE_COLORS.red, message);
}
