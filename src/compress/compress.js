import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';
import { invalidInputMessage } from '../utils/invalidInputMessage.js';
import { checkPaths } from '../utils/checkPaths.js';
import { CONSOLE_COLORS } from '../utils/consoleColors.js';

export const compress = async (fileToCompress, newDestination) => {
  try {
    const filename = fileToCompress.replace(/^.*[\\\/]/, '');
    const paths = await checkPaths(fileToCompress, newDestination, filename);
    if (paths) {
      const { absolutePath, newAbsolutePath } = paths;
      const fileToCompress = createReadStream(absolutePath);
      const writableStream = createWriteStream(newAbsolutePath + '.br');
      const brotli = zlib.createBrotliCompress();

      fileToCompress.pipe(brotli).pipe(writableStream);
      console.log(
        CONSOLE_COLORS.green,
        `The file ${absolutePath} was successfully compressed to ${newAbsolutePath}.br.`
      );
    } else {
      invalidInputMessage();
    }
  } catch (err) {
    console.log(CONSOLE_COLORS.red, `Operation failed! ${err}`);
  }
};
