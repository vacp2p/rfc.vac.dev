import path from "path";

import { fetchFromGitHub } from "./github.mjs";
import axios from 'axios'

import {
  copyDirectory,
  createDirectory,
  getDirFiles,
  readFile,
  writeFile,
  writeLargeFile
} from './file.mjs'
import { vacMarkdownToDocusaurusMarkdown } from './markdown-convertor.mjs'

async function downloadFile(url, fullFilePath) {
  const request = await axios.get(url, {
    responseType: "stream"
  });

  const directory = path.dirname(fullFilePath)
  await createDirectory(directory)
  await writeLargeFile(fullFilePath, request.data)
}

async function modifyFile(fullFilePath) {
  const fileExtension = path.extname(fullFilePath)
  if (fileExtension === '.md' || fileExtension === '.mdx') {
    const fileBuffer = await readFile(fullFilePath);
    const fileContent = fileBuffer.toString();
    const convertedFileContent = vacMarkdownToDocusaurusMarkdown(fileContent, fullFilePath);

    await writeFile(fullFilePath, convertedFileContent);
  }
}

export async function fetchDirectoryContents(dirUrl, basePath, prefixToRemove) {
  try {
    const files = await fetchFromGitHub(dirUrl);

    if (!files) {
      console.log('No files found', files)
      return
    }

    for (const file of files) {
      const prefixRemovalRegex = new RegExp(`^${prefixToRemove}`)
      const relativePath = file.path.replace(prefixRemovalRegex, '')
      // const filePath = path.join(basePath, adjustPathForMarkdown(relativePath))
      const filePath = path.join(basePath, relativePath)

      if (file.type === 'file') {
        const fullFilePath = path.join(process.cwd(), filePath)

        await downloadFile(file.download_url, fullFilePath);
        await modifyFile(fullFilePath)
      } else if (file.type === 'dir') {
        await fetchDirectoryContents(file.url, basePath, prefixToRemove)
      }
    }
  } catch (e) {
    console.error('Error fetching files:', e)
  }
}

export async function copyAndParseLocally(dirName) {
  try {
    const originalDir = path.join(process.cwd(), `../${dirName}`)
    const newDir = path.join(process.cwd(),`./${dirName}`)

    await copyDirectory(originalDir, newDir)
    const allFiles = getDirFiles(newDir, [])

    for (let i = 0; i < allFiles.length; i++) {
      await modifyFile(allFiles[i]);
    }
  } catch (e) {
    console.error('Error copying files:', e)
  }
}