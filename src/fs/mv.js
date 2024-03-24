import { getAbsolutePath } from '../utils/getAbsolutePath.js';
import { cp } from './cp.js';
import { rm } from 'fs/promises';
import { CONSOLE_COLORS } from '../utils/consoleColors.js';
import path from 'path';
import { isDirectory } from '../utils/isDirectory.js';

export const mv = async (fileToMove, newDestination) => {
  try {
    const isDir = await isDirectory(newDestination);
    let pathToCopy = newDestination;
    if (isDir) {
      pathToCopy = path.join(pathToCopy, path.basename(fileToMove));
    }
    cp(fileToMove, pathToCopy);
    const absolutePath = getAbsolutePath(fileToMove);
    await rm(absolutePath);
    console.log(
      CONSOLE_COLORS.green,
      `File ${fileToMove} was successfully moved to ${newDestination}`
    );
  } catch (err) {
    console.error(CONSOLE_COLORS.red, `Operation failed! ${err}`);
  }
};
