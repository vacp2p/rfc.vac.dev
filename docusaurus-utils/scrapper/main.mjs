import { copyAndParseLocally, fetchDirectoryContents } from './fetch-content.mjs'
import path from 'path'
import { directoryExists, removeDirectory } from './file.mjs'
import { ALL_FETCH_MODES, FETCH_MODE, INCLUDED_DIRS } from './config.mjs'

async function main() {
  for (let i = 0; i < INCLUDED_DIRS.length; i++) {
    const dirName = INCLUDED_DIRS[i];

    const directoryPath = path.join(process.cwd(), dirName);
    const shouldRemoveOldContent = await directoryExists(directoryPath);
    if (shouldRemoveOldContent) {
      await removeDirectory(directoryPath)
      console.log(`Removed old ${dirName}`)
    }

    if (FETCH_MODE === ALL_FETCH_MODES.GITHUB) {
      const baseUrl = `https://api.github.com/repos/vacp2p/rfc-index/contents/${dirName}`
      const baseSavePath = `./${dirName}/`
      const prefixToRemove = dirName + '/'

      await fetchDirectoryContents(baseUrl, baseSavePath, prefixToRemove)
    } else if (FETCH_MODE === ALL_FETCH_MODES.GIT) {
      // @TODO git pull here

      // @TODO parameterize "from" path
      await copyAndParseLocally(dirName);
    }

    console.log(`Synced ${dirName}`)
  }
}

main();