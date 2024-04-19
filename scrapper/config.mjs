import 'dotenv/config';

const {
  GITHUB_TOKEN
} = process.env;

if (!GITHUB_TOKEN) {
  throw new Error("Please provide the GITHUB_TOKEN")
}

export {
  GITHUB_TOKEN
}