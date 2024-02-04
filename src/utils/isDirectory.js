import fs from 'fs/promises';

export const isDirectory = async (path) => {
  try {
    const stats = await fs.stat(path);
    return stats.isDirectory();
  } catch (error) {
    console.error(error);
    return false;
  }
}