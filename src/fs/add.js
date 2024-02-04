import { writeFile } from 'fs/promises';
import { getAbsolutePath } from '../utils/getAbsolutePath.js';
import { CONSOLE_COLORS } from '../utils/consoleColors.js';

export const add = async (userPath) => {
  const absolutePath = getAbsolutePath(userPath);
  try {
    await writeFile(absolutePath, '');
    console.log(
      CONSOLE_COLORS.green,
      `File ${userPath} was successfully created.`
    );
  } catch (err) {
    console.log(CONSOLE_COLORS.red, `Operation failed! ${err}`);
  }
};
