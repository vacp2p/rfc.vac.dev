import path from "path";

import { fetchFromGitHub } from "./github.mjs";
import axios from 'axios'

import { createDirectory, readFile, writeFile, writeLargeFile } from './file.mjs'
import { adjustPathForMarkdown, vacMarkdownToDocusaurusMarkdown } from './markdown-convertor.mjs'

async function downloadFile(url, fullFilePath) {
  const request = await axios.get(url, {
    responseType: "stream"
  });

  const directory = path.dirname(fullFilePath)
  await createDirectory(directory)
  await writeLargeFile(fullFilePath, request.data)
}

async function downloadAndModifyFile(url, filePath) {
  const fullFilePath = path.join(process.cwd(), filePath)

  await downloadFile(url, fullFilePath);

  const fileExtension = path.extname(filePath)
  if (fileExtension === '.md' || fileExtension === '.mdx') {
    const fileBuffer = await readFile(fullFilePath);
    const fileContent = fileBuffer.toString();
    const convertedFileContent = vacMarkdownToDocusaurusMarkdown(fileContent, filePath);

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
      const filePath = path.join(basePath, adjustPathForMarkdown(relativePath))

      if (file.type === 'file') {
        await downloadAndModifyFile(file.download_url, filePath)
      } else if (file.type === 'dir') {
        await fetchDirectoryContents(file.url, basePath, prefixToRemove)
      }
    }
  } catch (e) {
    console.error('Error fetching files:', e)
  }
}