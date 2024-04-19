import { GITHUB_TOKEN } from './config.mjs'
import axios from "axios";

export async function fetchFromGitHub(url, callback) {
  const response = await axios.get(url, {
    headers: {
      'User-Agent': 'Node.js',
      'Authorization': `token ${GITHUB_TOKEN}`
    }
  });

  return response.data;
}