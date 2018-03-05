export const state = () => ({
  list: []
})

export const getters = {
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
  }
}

export const mutations = {
  set(state, articles) {
    state.list = articles
  },
  add(state, title, url) {
    state.list.push({
      id: 1,
      title: title,
      url: url,
      image_path: ''
    })
  }
}
