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
    await store.dispatch('articles/fetchArticles')
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
      existsNext: 'articles/existsNext'
    }),
    isScrollDisabled() {
      return !this.existsNext
    }
  },
  methods: {
    async moreArticles() {
      await this.$store.dispatch('articles/fetchArticles')
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px 0px;
}
</style>
