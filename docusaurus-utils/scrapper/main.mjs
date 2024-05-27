import { fetchDirectoryContents } from './fetch-content.mjs'
import path from 'path'
import { directoryExists, removeDirectory } from './file.mjs'

const directoriesToSync = ['codex', 'nomos', 'status', 'vac', 'waku']

async function main() {
  for (let i = 0; i < directoriesToSync.length; i++) {
    const dirName = directoriesToSync[i];

    const baseUrl = `https://api.github.com/repos/vacp2p/rfc-index/contents/${dirName}`

    const baseSavePath = `./${dirName}/`
    const prefixToRemove = dirName + '/'
    const directoryPath = path.join(process.cwd(), dirName);

    const shouldRemoveOldContent = await directoryExists(directoryPath);
    if (shouldRemoveOldContent) {
      await removeDirectory(directoryPath)
      console.log(`Removed old ${dirName}`)
    }

    await fetchDirectoryContents(baseUrl, baseSavePath, prefixToRemove)
    console.log(`Synced ${dirName}`)
  }
}

main();