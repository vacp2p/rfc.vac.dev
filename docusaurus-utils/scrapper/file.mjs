import { mkdirp } from 'mkdirp'
import fs from 'fs'
import util from 'util'
import stream from 'stream'

export function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    })
  });
}

export function writeFile(path, content)  {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, err => {
      if (err) {
        reject(err);
      }

      resolve();
    })
  })
}

export async function writeLargeFile(path, data) {
  const pipeline = util.promisify(stream.pipeline)

  // We need to handle backpressuring to not corrupt larger files, https://nodejs.org/en/learn/modules/backpressuring-in-streams
  return pipeline(data, fs.createWriteStream(path))
}

export function removeDirectory(path) {
  return new Promise((resolve, reject) => {
    fs.rm(path, {recursive: true}, err => {
      if (err) {
        reject(err)
      }

      resolve();
    })
  })
}

export function directoryExists(path) {
  return new Promise((resolve, _) => {
    const accessBitwiseOperator = fs.constants.F_OK | fs.constants.R_OK;

    fs.access(path, accessBitwiseOperator, err => {
      if (err) {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}

export async function createDirectory(path) {
  try {
    /*
    On Windows file systems, attempts to create a root directory (ie, a drive letter or root UNC path) will fail. If the root directory exists, then it will fail with EPERM. If the root directory does not exist, then it will fail with ENOENT.
    On posix file systems, attempts to create a root directory (in recursive mode) will succeed silently, as it is treated like just another directory that already exists. (In non-recursive mode, of course, it fails with EEXIST.)
    In order to preserve this system-specific behavior (and because it's not as if we can create the parent of a root directory anyway), attempts to create a root directory are passed directly to the fs implementation, and any errors encountered are not handled.

    That's why we're using the next library
     */
    return await mkdirp(path)
  } catch (error) {
    throw error;
  }
}