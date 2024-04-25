const { isNumber } = require('./utils')
const {
  isIndexDocument
} = require("./helpers")

function orderAlphabeticallyAndByNumber(sidebarItems) {
  let newSidebarItems = [...sidebarItems]

  for (let i = 0; i < newSidebarItems.length; i++) {
    const sidebarItem = newSidebarItems[i];

    if (sidebarItem.type === 'category' && sidebarItem.items && sidebarItem.items.length > 1) {
      newSidebarItems[i] = {
        ...sidebarItem,
        items: orderAlphabeticallyAndByNumber(sidebarItem.items)
      }
    }
  }

  const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
  const compareFunction = (a, b) => {
    return collator.compare(a.label, b.label)
  }

  return newSidebarItems.sort(compareFunction)
}

function removeRFCNumberedDirectories(sidebarItems) {
  let newSidebarItems = []

  sidebarItems.forEach(sidebarItem => {
    if (sidebarItem.type === 'category') {
      const isRFCNumberedCategory = isNumber(sidebarItem.label);

      if (isRFCNumberedCategory) {
        newSidebarItems = [...newSidebarItems, ...sidebarItem.items]
      } else {
        const newSidebarItem = {
          ...sidebarItem,
          items: removeRFCNumberedDirectories(sidebarItem.items)
        }
        newSidebarItems = [...newSidebarItems, newSidebarItem]
      }
    } else {
      newSidebarItems = [...newSidebarItems, sidebarItem]
    }
  })

  return newSidebarItems
}

function separateFoldersAndFilesOrder(sidebarItems) {
  let categories = [];
  let pages = [];

  sidebarItems.forEach(sidebarItem => {
    if (sidebarItem.type === 'category') {
      categories = [...categories, sidebarItem]
    } else {
      pages = [...pages, sidebarItem]
    }
  })

  return [
    ...categories,
    ...pages
  ]
}

function positionDefaultReadmeToTop(sidebarItems) {
  let newSidebarItems = []

  sidebarItems.forEach(sidebarItem => {
    if (sidebarItem.type === "doc" && isIndexDocument(sidebarItem.id)) {
      newSidebarItems = [sidebarItem, ...newSidebarItems]
    } else {
      newSidebarItems = [...newSidebarItems, sidebarItem]
    }
  })

  return newSidebarItems
}

module.exports = {
  orderAlphabeticallyAndByNumber,
  removeRFCNumberedDirectories,
  separateFoldersAndFilesOrder,
  positionDefaultReadmeToTop,
}