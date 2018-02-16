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
        <articles :articles_array="articles_array" />
      </div>
    </div>
  </section>
</template>

<script>
// import axios from '~/plugins/axios'
import Tags from '~/components/Tags.vue'
import Articles from '~/components/Articles.vue'

export default {
  async asyncData() {
    const articlesArray = [
      [
        { id: 1, title: 'title1', url: 'https://google.com', image_path: '' },
        { id: 2, title: 'title2', url: 'https://facebook.com', image_path: '' },
        { id: 3, title: 'title3', url: 'https://yahoo.com', image_path: '' }
      ],
      [
        { id: 4, title: 'title4', url: 'https://twitter.com', image_path: '' },
        { id: 5, title: 'title5', url: 'https://instagram.com', image_path: '' }
      ]
    ]
    const tags = [
      { id: 1, name: 'tag1' },
      { id: 2, name: 'tag2' },
      { id: 3, name: 'tag3' }
    ]
    return { articles_array: articlesArray, tags: tags }
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
