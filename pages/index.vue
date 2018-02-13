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
        <div v-for="articles in articles_array" class="tile is-ancestor">
          <div v-for="article in articles" class="tile is-parent is-4">
            <article class="tile is-child box">
              <p class="title">
                <a :href="article.url" target="_blank">
                  {{article.title}}
                </a>
              </p>
              <p class="subtitle">With an image</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png">
              </figure>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import axios from '~/plugins/axios'
import Tags from '~/components/Tags.vue'

export default {
  async asyncData() {
    const articlesArray = [
      [
        { title: 'title1', url: 'https://google.com', image_path: '' },
        { title: 'title2', url: 'https://facebook.com', image_path: '' },
        { title: 'title3', url: 'https://yahoo.com', image_path: '' }
      ],
      [
        { title: 'title4', url: 'https://twitter.com', image_path: '' },
        { title: 'title5', url: 'https://instagram.com', image_path: '' }
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
    Tags
  }
}
</script>

<style scoped>
.container {
  padding: 10px 0px;
}

/* disable links coloring */
a {
  color: inherit;
  text-decoration: none;
}
</style>
