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

    return extractNumberFromTitle(frontmatterContent)
  }
  return 1 // Return null if not found
}

function unescapeHtmlComments(htmlString) {
  return htmlString.replace(/\\<\!--/g, '\n<!--').replace(/--\\>/g, '-->\n')
}

function updateMarkdownLinksToExcludeMD(content) {
  function replaceLinks(match, p1, p2, p3) {
    let url = p2.replace(/\.md$/, ''); // Remove .md extension from URL
    let anchor = p3.replace(/^\//, ''); // Remove preceding '/' from anchor if exists
    return `[${p1}](${url}${anchor ? '#' + anchor : ''})`;
  }

  const regex = /\[((?:(?!\]).)+)\]\(([^)]*?\.md)(?:\/#|\/#)?([^)]*)\)/g

  return content.replace(regex, replaceLinks)
}

export function vacMarkdownToDocusaurusMarkdown(fileContent) {
  let convertedContent = fileContent;

  // Remove 'tags' line from frontmatter because the format is wrong
  convertedContent = convertedContent.replace(/tags:.*\n?/, '')

  // Replace <br> with <br/>
  convertedContent = convertedContent.replace(/<br>/g, '<br/>')

  // Escape < and > with \< and \>, respectively
  // Be cautious with this replacement; adjust as needed based on your context
  convertedContent = convertedContent.replace(/</g, '\\<').replace(/>/g, '\\>')

  // NEW: Remove 'slug' line from frontmatter
  convertedContent = convertedContent.replace(/^slug:.*\n?/m, '')

  // Replace empty Markdown links with placeholder URL
  convertedContent = convertedContent.replace(/\[([^\]]+)\]\(\)/g, '[$1](#)')

  convertedContent = unescapeHtmlComments(convertedContent)

  convertedContent = enhanceMarkdownWithBulletPointsCorrected(convertedContent)

  convertedContent = updateMarkdownLinksToExcludeMD(convertedContent)

  return convertedContent;
}

export function adjustPathForMarkdown(filePath) {
  const parts = filePath.split('/')

  if (parts?.length === 1) return filePath
  if (filePath.includes('README.md')) return filePath

  if (parts[parts.length - 1].endsWith('.md')) {
    parts.splice(parts.length - 2, 1)
  }

  return parts.join('/')
}