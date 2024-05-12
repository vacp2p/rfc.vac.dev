const {
  isIndexDocument,
  getRFCOccurrenceMapKey
} = require("./helpers");
const { isNumber } = require('./utils')

// By convention, Docusaurus considers some docs are "indexes":
// - index.md
// - readme.md
// - <folder>/<folder>.md
//
// This function is the default implementation of this convention
//
// Those index docs produce a different behavior
// - Slugs do not end with a weird "/index" suffix
// - Auto-generated sidebar categories link to them as intro
const isCategoryIndex = (rfcOccurrenceMap) => ({
  fileName,
  directories,
  extension
}) => {
  const isIndexByName = isIndexDocument(fileName, directories[0]);
  const isRFCWithMultipleVersions = isVersionedRFC(fileName, directories, extension, rfcOccurrenceMap);

  return (isIndexByName || isRFCWithMultipleVersions)
}

function isVersionedRFC(fileName, directories, extension, rfcOccurrenceMap) {
  if (extension.toLowerCase() !== ".md") {
    return false;
  }

  if (!isNumber(directories[0])) {
    return false;
  }

  if (rfcOccurrenceMap) {
    const key = getRFCOccurrenceMapKey(fileName, extension, directories.reverse().join("/"));

    if (rfcOccurrenceMap[key] >= 2) {
      return true
    }
  }

  return false;
}

module.exports = {
  isCategoryIndex
}