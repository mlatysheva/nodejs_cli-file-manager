import { getAbsolutePath } from '../utils/getAbsolutePath.js';
import { rm } from 'fs/promises';
import { doesExist } from '../utils/doesExist.js';
import { CONSOLE_COLORS } from '../utils/consoleColors.js';

export const remove = async (fileToDelete) => {
  try {
    const absolutePath = getAbsolutePath(fileToDelete);
    if (await doesExist(absolutePath)) {
      await rm(absolutePath);
      console.log(
        CONSOLE_COLORS.green,
        `${fileToDelete} was successfully deleted`
      );
    } else {
      console.error(
        CONSOLE_COLORS.red,
        `Operation failed! The file ${fileToDelete} does not exist`
      );
    }
  } catch (err) {
    console.error(consoleColors.red, `Operation failed! ${err}`);
  }
};
