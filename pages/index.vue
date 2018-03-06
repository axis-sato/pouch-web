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
        <articles v-infinite-scroll="moreArticles" infinite-scroll-disabled="isScrollDisabled" infinite-scroll-distance="10"/>
      </div>
    </div>
  </section>
</template>

<script>
import Tags from '~/components/Tags.vue'
import Articles from '~/components/Articles.vue'
import APIClient from '~/api/client'
import { mapGetters } from 'vuex'

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
    store.commit('articles/push', articles)
  },
  head() {
    return {
      title: 'Top'
    }
  },
  components: {
    Tags,
    Articles
  },
  computed: {
    ...mapGetters({
      nextArticleId: 'articles/nextArticleId',
      existsNext: 'articles/existsNext'
    }),
    isScrollDisabled() {
      return !this.existsNext
    }
  },
  methods: {
    async moreArticles() {
      const apiClient = new APIClient()
      const articles = await apiClient.fetchArticles(this.nextArticleId)
      this.$store.commit('articles/push', articles)
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px 0px;
}
</style>
