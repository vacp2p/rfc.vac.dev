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

module.exports = {
  isIndexDocument
}