const https = require('https')
const fs = require('fs')
const path = require('path')

function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env')

  try {
    const data = fs.readFileSync(envPath, 'utf8')

    data.split('\n').forEach(line => {
      line = line.trim()

      if (line && !line.startsWith('#')) {
        const [key, value] = line.split('=')
        process.env[key.trim()] = value.trim()
      }
    })
  } catch (err) {
    console.error('Error loading .env file', err)
  }
}

loadEnv()

async function fetchFromGitHub(url, callback) {
  https
    .get(
      url,
      {
        headers: {
          'User-Agent': 'Node.js',
          // NOTE: Create .env file and add GITHUB_TOKEN=your_token
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      },
      res => {
        let data = ''

        res.on('data', chunk => {
          data += chunk
        })

        res.on('end', () => {
          const parsedData = JSON.parse(data)
          // console.log('parsedData:', parsedData)
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

      function adjustPathForMarkdown(filePath) {
        const parts = filePath.split('/')

        if (parts?.length === 1) return filePath
        if (filePath.includes('README.md')) return filePath

        if (parts[parts.length - 1].endsWith('.md')) {
          parts.splice(parts.length - 2, 1)
        }

        return parts.join('/')
      }

      const filePath = path.join(basePath, adjustPathForMarkdown(relativePath))

      if (file.type === 'file') {
        await downloadAndSaveFile(file.download_url, filePath)
      } else if (file.type === 'dir') {
        await fetchDirectoryContents(file.url, basePath, prefixToRemove)
      }
    }
  })
}

function enhanceMarkdownWithBulletPointsCorrected(input) {
  // Split the input text into lines
  const lines = input.split('\n')
  // Initialize an array to hold the extracted fields
  let extractedFields = []
  // Initialize variables to track the frontmatter and contributors section
  let inFrontMatter = false
  let inContributors = false
  let contributorsLines = [] // Holds contributors lines

  // Process each line
  const outputLines = lines.map(line => {
    if (line.trim() === '---') {
      inFrontMatter = !inFrontMatter
      if (!inFrontMatter && contributorsLines.length) {
        // We're exiting frontmatter; time to add contributors
        extractedFields.push(`contributors:\n${contributorsLines.join('\n')}`)
        contributorsLines = [] // Reset for safety
      }
      return line // Keep the frontmatter delimiters
    }

    if (inFrontMatter) {
      if (line.startsWith('contributors:')) {
        inContributors = true // Entering contributors section
      } else if (inContributors) {
        if (line.startsWith('  -')) {
          contributorsLines.push(line.trim()) // Add contributors line
        } else {
          // Exiting contributors section
          inContributors = false
          extractedFields.push(`contributors:\n${contributorsLines.join('\n')}`)
          contributorsLines = [] // Reset
        }
      } else {
        const match = line.match(/(status|category|editor):(.*)/)
        if (match) {
          extractedFields.push(line.trim())
        }
      }
    }

    return line // Return the line unmodified
  })

  // Find the index of the second frontmatter delimiter
  const endOfFrontMatterIndex = outputLines.findIndex(
    (line, index) => line.trim() === '---' && index > 0,
  )

  // Insert the extracted fields as capitalized bullet points after the frontmatter
  const bulletPoints = extractedFields
    .map(field => {
      // Capitalize the first letter of the label and ensure proper formatting for multi-line fields
      if (field.includes('\n')) {
        const [label, ...values] = field.split('\n')
        return `- ${label.charAt(0).toUpperCase() +
          label.slice(1)}:\n  ${values.join('\n  ')}`
      } else {
        return `- ${field.charAt(0).toUpperCase() + field.slice(1)}`
      }
    })
    .join('\n')
  outputLines.splice(endOfFrontMatterIndex + 1, 0, bulletPoints)

  // Join the lines back into a single string and return
  return outputLines.join('\n')
}

function parseSlugFromFrontmatter(content) {
  const frontmatterMatch = content.match(/---\s*\n([\s\S]*?)\n---/)
  if (frontmatterMatch) {
    const frontmatterContent = frontmatterMatch[1]

    function extractNumberFromTitle(content) {
      const parts = content.split('/')
      return parseInt(parts[0].split(' ')[1], 10)
    }

    const number = extractNumberFromTitle(frontmatterContent)
    return number
  }
  return 1 // Return null if not found
}

function unescapeHtmlComments(htmlString) {
  return htmlString.replace(/\\<\!--/g, '\n<!--').replace(/--\\>/g, '-->\n')
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

        function updateMarkdownImagePath(content, number) {
          const regex = /(!\[.*?\]\(\.\/)images/g

          return content.replace(regex, `$1${number}/images`)
        }

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

          content = unescapeHtmlComments(content)

          // // parse sidebarPosition from the slug in the frontmatter
          const sidebarPosition = parseSlugFromFrontmatter(content) || 1

          content = enhanceMarkdownWithBulletPointsCorrected(content)

          content = updateMarkdownImagePath(content, sidebarPosition)

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
            // console.error('Error saving file:', err.message)
            return
          }
          // console.log('Downloaded and saved:', filePath)
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
    // console.log(`Synced ${dirName}`)
  })
})
