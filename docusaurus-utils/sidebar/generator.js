const { compose } = require("./utils");
const {
  positionDefaultReadmeToTop,
  removeRFCNumberedDirectories,
  separateFoldersAndFilesOrder,
  orderAlphabeticallyAndByNumber
} = require("./modifiers")

async function sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
  const defaultSidebarItems = await defaultSidebarItemsGenerator(args);

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