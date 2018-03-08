import APIClient from '~/api/client'

export const state = () => ({
  list: []
})

export const getters = {
  /**
   * @param state
   * @return {array}
   */
  articlesList(state) {
    const articles = state.list
    const articleSizePerLine = 3
    let articlesList = []
    for (let i = 0; i < Math.ceil(articles.length / articleSizePerLine); i++) {
      const j = i * articleSizePerLine
      const slicedArticles = articles.slice(j, j + articleSizePerLine)
      articlesList.push(slicedArticles)
    }
    return articlesList
  },
  /**
   * @param state
   * @return {int}
   */
  currentArticleLength(state) {
    return state.list.length
  },
  /**
   * @param state
   * @param getters
   * @return {null|int}
   */
  currentLastArticleId(state, getters) {
    if (getters.currentArticleLength === 0) {
      return null
    }
    const lastArticle = state.list[getters.currentArticleLength - 1]
    return lastArticle.id
  },
  /**
   * @param state
   * @param getters
   * @return {null|int}
   */
  nextArticleId(state, getters) {
    if (getters.currentLastArticleId === null) {
      return null
    }
    const nextId = getters.currentLastArticleId - 1
    return nextId > 0 ? nextId : null
  },
  /**
   * @param state
   * @param getters
   * @return boolean
   */
  existsNext(state, getters) {
    return getters.nextArticleId !== null
  }
}

export const actions = {
  async fetchArticles({ commit, getters }) {
    const apiClient = new APIClient()
    const articles = await apiClient.fetchArticles(getters.nextArticleId)
    commit('push', articles)
  }
}

export const mutations = {
  push(state, articles) {
    state.list = state.list.concat(articles)
  }
}
