export const state = () => ({
  list: []
})

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
