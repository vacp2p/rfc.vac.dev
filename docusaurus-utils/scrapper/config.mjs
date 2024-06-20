import 'dotenv/config';

const {
  FETCH_MODE,
  INCLUDED_DIRS,
  GITHUB_TOKEN
} = process.env;

export const ALL_FETCH_MODES = {
  GITHUB: "github",
  GIT: "git"
}

let parsedIncludedDirs = [];
if (!INCLUDED_DIRS) {
  throw new Error("Please provide the INCLUDED_DIRS")
} else {
  parsedIncludedDirs = INCLUDED_DIRS.split(",");
  if (parsedIncludedDirs.length < 1) {
    throw new Error("Please provide the INCLUDED_DIRS in a correct format")
  }
}

if (!FETCH_MODE) {
  throw new Error("Please provide the FETCH_MODE")
} else {
  if (!(FETCH_MODE === ALL_FETCH_MODES.GITHUB || FETCH_MODE === ALL_FETCH_MODES.GIT)) {
    throw new Error("Please provide the FETCH_MODE in a correct format")
  }
}

if (FETCH_MODE === ALL_FETCH_MODES.GITHUB && !GITHUB_TOKEN) {
  throw new Error("Please provide the GITHUB_TOKEN")
}

export {
  parsedIncludedDirs as INCLUDED_DIRS,
  FETCH_MODE,
  GITHUB_TOKEN
}