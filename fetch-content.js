const https = require('https')
const fs = require('fs')
const path = require('path')

// NOTE: Replace YOUR_GITHUB_TOKEN with your GitHub token
async function fetchFromGitHub(url, callback) {
  https
    .get(
      url,
      {
        headers: {
          'User-Agent': 'Node.js',
          Authorization: `token {YOUR_GITHUB_TOKEN}`,
        },
      },
      res => {
        let data = ''

        res.on('data', chunk => {
          data += chunk
        })

        res.on('end', () => {
          const parsedData = JSON.parse(data)
          console.log('parsedData:', parsedData)
          callback(null, parsedData)
        })
      },
    )
    .on('error', err => {
      callback(err, null)
    })
}

async function fetchDirectoryContents(dirUrl, basePath, prefixToRemove) {
  fetchFromGitHub(dirUrl, async (err, files) => {
    if (err) {
      console.error('Error fetching files:', err.message)
      return
    }

    if (!files) {
      console.log('No files found', files)
      return
    }

    for (const file of files) {
      const relativePath = file.path.replace(
        new RegExp(`^${prefixToRemove}`),
        '',
      )
      const filePath = path.join(basePath, relativePath)

      if (file.type === 'file') {
        await downloadAndSaveFile(file.download_url, filePath)
      } else if (file.type === 'dir') {
        await fetchDirectoryContents(file.url, basePath, prefixToRemove)
      }
    }
  })
}

function parseSlugFromFrontmatter(content) {
  const frontmatterMatch = content.match(/---\s*\n([\s\S]*?)\n---/)
  if (frontmatterMatch) {
    const frontmatterContent = frontmatterMatch[1]
    const slugMatch = frontmatterContent.match(/^slug:\s*(\d+)/m)

    if (slugMatch) {
      return parseInt(slugMatch[1], 10)
    }
  }
  return 1 // Return null if not found
}

async function downloadAndSaveFile(url, filePath) {
  https
    .get(url, res => {
      let content = ''
      res.on('data', chunk => {
        content += chunk
      })

      res.on('end', () => {
        const fullFilePath = path.join(__dirname, filePath)
        const directory = path.dirname(fullFilePath)
        fs.mkdirSync(directory, { recursive: true })

        const fileExtension = path.extname(filePath)

        if (fileExtension === '.md' || fileExtension === '.mdx') {
          // Remove 'tags' line from frontmatter because the format is wrong
          content = content.replace(/tags:.*\n?/, '')

          // Replace <br> with <br/>
          content = content.replace(/<br>/g, '<br/>')

          // Escape < and > with \< and \>, respectively
          // Be cautious with this replacement; adjust as needed based on your context
          content = content.replace(/</g, '\\<').replace(/>/g, '\\>')

          // NEW: Remove 'slug' line from frontmatter
          content = content.replace(/^slug:.*\n?/m, '')

          // Replace empty Markdown links with placeholder URL
          content = content.replace(/\[([^\]]+)\]\(\)/g, '[$1](#)')

          // // parse sidebarPosition from the slug in the frontmatter
          const sidebarPosition = parseSlugFromFrontmatter(content) || 1

          // Insert sidebar_position at the end of frontmatter if it doesn't exist
          if (
            /^---\s*[\s\S]+?---/.test(content) &&
            !/sidebar_position: \d+/.test(content)
          ) {
            content = content.replace(
              /^---\s*([\s\S]+?)---/,
              `---\n$1sidebar_position: ${sidebarPosition}\n---`,
            )
          }
        }

        fs.writeFile(fullFilePath, content, err => {
          if (err) {
            console.error('Error saving file:', err.message)
            return
          }
          console.log('Downloaded and saved:', filePath)
        })
      })
    })
    .on('error', err => {
      console.error('Error downloading file:', err.message)
    })
}

const directoriesToSync = ['codex', 'nomos', 'status', 'vac', 'waku']

directoriesToSync.forEach(dirName => {
  const baseUrl = `https://api.github.com/repos/vacp2p/rfc-index/contents/${dirName}`
  const baseSavePath = `./${dirName}/`
  const prefixToRemove = dirName + '/'

  fetchDirectoryContents(baseUrl, baseSavePath, prefixToRemove).then(() => {
    console.log(`Synced ${dirName}`)
  })
})
