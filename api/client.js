import axios from 'axios'

const endpoint = 'http://localhost:8888/v1'

export default class APIClient {
  /**
   * @param {int|null} firstCursor
   * @param {int} limit
   * @returns {Promise<array>}
   */
  async fetchArticles(firstCursor = null, limit = 10) {
    const url =
      firstCursor !== null
        ? `${endpoint}/articles?first_cursor=${firstCursor}&limit=${limit}`
        : `${endpoint}/articles?limit=${limit}`
    const { data } = await axios.get(url)
    console.log(data)
    return data
  }
}
