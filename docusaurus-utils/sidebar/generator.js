const { compose } = require("./utils");
const {
  positionDefaultReadmeToTop,
  removeRFCNumberedDirectories,
  separateFoldersAndFilesOrder,
  orderAlphabeticallyAndByNumber
} = require("./modifiers")
const { isCategoryIndex } = require("./classifiers")
const { rawDocsToRFCOccurrenceMap } = require("./helpers")

async function sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
  const rfcOccurrenceMap = rawDocsToRFCOccurrenceMap(args.docs)
  const defaultSidebarItems = await defaultSidebarItemsGenerator({
    ...args,
    isCategoryIndex: isCategoryIndex(rfcOccurrenceMap)
  });

  /*
  We'll have multiple O(N) passes through the items depending on the reducer implementation,
  but we'll sacrifice very small performance for sake of easier maintainability
  */
  const sidebarModifier = compose(
    positionDefaultReadmeToTop,
    separateFoldersAndFilesOrder,
    removeRFCNumberedDirectories,
    orderAlphabeticallyAndByNumber
  )

  return sidebarModifier(defaultSidebarItems)
}

module.exports = {
  sidebarItemsGenerator
}