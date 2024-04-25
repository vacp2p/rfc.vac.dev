import { fetchDirectoryContents } from './fetch-content.mjs'

const directoriesToSync = ['codex', 'nomos', 'status', 'vac', 'waku']

async function main() {
  for (let i = 0; i < directoriesToSync.length; i++) {
    const dirName = directoriesToSync[i];

    const baseUrl = `https://api.github.com/repos/vacp2p/rfc-index/contents/${dirName}`

    const baseSavePath = `./${dirName}/`
    const prefixToRemove = dirName + '/'

    await fetchDirectoryContents(baseUrl, baseSavePath, prefixToRemove)
    console.log(`Synced ${dirName}`)
  }
}

main();