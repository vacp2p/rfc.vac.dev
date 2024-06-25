import path from 'path'
import { purgeOldFiles } from './file.mjs'
import {
  ALL_FETCH_MODES,
  FETCH_MODE,
  GIT_ORG_NAME,
  GIT_SOURCE_REPO_NAME,
  GIT_TEMP_DIR_NAME,
  INCLUDED_DIRS,
} from './config.mjs'
import { copyAndParseLocally, fetchDirectoryContents } from './fetch-content.mjs'
import { pullWithGit } from './git.mjs'


async function main() {
  switch (FETCH_MODE) {
    case ALL_FETCH_MODES.GIT: {
      const tempDirPath = path.join(process.cwd(), GIT_TEMP_DIR_NAME);

      await pullWithGit(`${GIT_ORG_NAME}/${GIT_SOURCE_REPO_NAME}`, tempDirPath)
      await sync(ALL_FETCH_MODES.GIT)

      // Removes raw MDs so docusaurus doesn't parse them as well
      await purgeOldFiles(GIT_TEMP_DIR_NAME, tempDirPath)

      break;
    }
    case ALL_FETCH_MODES.GITHUB: {
      await sync(ALL_FETCH_MODES.GITHUB)

      break;
    }
  }
}

async function sync(mode) {
  for (let i = 0; i < INCLUDED_DIRS.length; i++) {
    const dirName = INCLUDED_DIRS[i];
    await purgeOldFiles(dirName)

    if (mode === ALL_FETCH_MODES.GITHUB) {
      const baseUrl = `https://api.github.com/repos/${GIT_ORG_NAME}/${GIT_SOURCE_REPO_NAME}/contents/${dirName}`
      const baseSavePath = `./${dirName}/`
      const prefixToRemove = dirName + '/'

      await fetchDirectoryContents(baseUrl, baseSavePath, prefixToRemove)
    } else if (mode === ALL_FETCH_MODES.GIT) {
      const rawFilePath = path.join(process.cwd(), GIT_TEMP_DIR_NAME, dirName);
      await copyAndParseLocally(dirName, rawFilePath);
    }

    console.log(`Synced ${dirName}`)
  }
}

main();