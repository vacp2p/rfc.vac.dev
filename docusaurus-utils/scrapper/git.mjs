// import clone from "git-clone/promise.js"

import { purgeOldFiles } from './file.mjs'
import gitDownload from "clone-git-repo"

async function clone(repoUrl, toDir) {
  return new Promise((resolve, reject) => {
    gitDownload(repoUrl, toDir, {}, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

export async function pullWithGit(repoUrl, toDir) {
  // If any old temp files that weren't removed are present
  await purgeOldFiles(undefined, toDir)

  await clone(repoUrl, toDir)
}