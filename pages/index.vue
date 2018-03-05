<template>
  <section class="container">
    <div class="columns">
      <div class="column is-2">
        <tags :tags="tags" />
      </div>
      <div class="column">
        <h1 class="title">
          My List
        </h1>
        <articles />
      </div>
    </div>
  </section>
</template>

<script>
import Tags from '~/components/Tags.vue'
import Articles from '~/components/Articles.vue'
import APIClient from '~/api/client'

export default {
  async asyncData({ store }) {
    const tags = [
      { id: 1, name: 'tag1' },
      { id: 2, name: 'tag2' },
      { id: 3, name: 'tag3' }
    ]
    return { tags: tags }
  },
  async fetch({ store, params }) {
    const apiClient = new APIClient()
    const articles = await apiClient.fetchArticles()
    store.commit('articles/set', articles)
  },
  head() {
    return {
      title: 'Top'
    }
  },
  components: {
    Tags,
    Articles
  }
}
</script>

<style scoped>
.container {
  padding: 10px 0px;
}
</style>
