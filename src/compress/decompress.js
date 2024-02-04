import { createReadStream, createWriteStream } from 'fs';
import { lstat } from 'fs/promises';
import zlib from 'zlib';
import { invalidInputMessage } from '../utils/invalidInputMessage.js';
import { checkPaths } from '../utils/checkPaths.js';
import { CONSOLE_COLORS } from '../utils/consoleColors.js';

export const decompress = async (fileToDecompress, newDestination) => {
  try {
    if (fileToDecompress.slice(-3) !== '.br') {
      invalidInputMessage(
        `${fileToDecompress} is not a valid compressed file. Specify a file with a valid extention ".br"`
      );
    } else {
      const filename = fileToDecompress.slice(0, -3).replace(/^.*[\\\/]/, '');
      const paths = await checkPaths(
        fileToDecompress,
        newDestination,
        filename
      );
      if (paths) {
        const { absolutePath, newAbsolutePath } = paths;
        const stat = await lstat(newAbsolutePath);
        if (stat.isFile()) {
          const fileToDecompress = createReadStream(absolutePath);
          const writableStream = createWriteStream(newAbsolutePath);
          const brotli = zlib.createBrotliDecompress();

          fileToDecompress.pipe(brotli).pipe(writableStream);

          console.log(
            CONSOLE_COLORS.green,
            `The file was successfully decompressed to ${newAbsolutePath}.`
          );
        } else {
          console.log(
            CONSOLE_COLORS.red,
            `${newAbsolutePath} is a directory. Specify a valid path to the file to decompress.`
          );
        }
      } else {
        invalidInputMessage();
      }
    }
  } catch (err) {
    console.log(CONSOLE_COLORS.red, `Operation failed! ${err}`);
  }
};
