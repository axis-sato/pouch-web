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
import axios from '~/plugins/axios'
import Tags from '~/components/Tags.vue'
import Articles from '~/components/Articles.vue'

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
    const { data } = await axios.get(
      'http://localhost:8888/v1/articles?limit=4&first_cursor=5'
    )
    console.log(data)
    const articles = data
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
