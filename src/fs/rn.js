import { rename } from 'fs/promises';
import { doesExist } from '../utils/doesExist.js';
import { getAbsolutePath } from '../utils/getAbsolutePath.js';
import { CONSOLE_COLORS } from '../utils/consoleColors.js';

export const rn = async (fileToRename, newName) => {
  try {
    const absolutePath = getAbsolutePath(fileToRename);
    const doesExistPath = await doesExist(absolutePath);
    if (doesExistPath) {
      await rename(absolutePath, getAbsolutePath(newName));
      console.log(
        CONSOLE_COLORS.green,
        `${fileToRename} was successfully renamed to ${newName}`
      );
    } else {
      console.log(CONSOLE_COLORS.red, `No such file ${fileToRename} exists!`);
    }
  } catch (err) {
    console.error(CONSOLE_COLORS.red, `Operation failed! ${err}`);
  }
};
