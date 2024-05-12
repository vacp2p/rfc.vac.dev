const path = require("path")

function isIndexDocument(documentId, parentDirectory) {
  if (!documentId) {
    return false
  }

  return (
    documentId.toUpperCase() === "README" ||
    documentId.toUpperCase() === "INDEX" ||
    (!!parentDirectory && documentId.toUpperCase() === parentDirectory.toUpperCase())
  )
}

function rawDocsToRFCOccurrenceMap(rawDocs) {
  /*
  Map containing occurrences of items
  The key is made of (Root Numbered Folder + lowercase(Filename + Extension))
  The value is number of occurrences
   */
  const occurrenceMap = {}

  rawDocs.forEach(rawDoc => {
    const { name, ext } = path.parse(rawDoc.source)
    const key = getRFCOccurrenceMapKey(name, ext, rawDoc.sourceDirName)

    if (key) {
      occurrenceMap[key] = (occurrenceMap[key] || 0) + 1;
    }
  })

  return occurrenceMap
}

function getRFCOccurrenceMapKey(fileName, ext, dir) {
  const parsedDir = dir[0] !== "/" ? `/${dir}` : dir.toString();
  const parsedExt = ext[0] === "." ? ext.slice(1) : ext;

  const match = parsedDir.match(/.*\/\d+(?=\/|$)/)
  if (match) {
    const rootNumberedRFC = match[0]
    return `${rootNumberedRFC}/${fileName.toLowerCase()}.${parsedExt.toLowerCase()}`
  } else {
    return undefined
  }
}

module.exports = {
  isIndexDocument,
  getRFCOccurrenceMapKey,
  rawDocsToRFCOccurrenceMap
}