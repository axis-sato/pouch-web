<template>
    <articles>
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
            <div class="article-menu">
              <edit-button :article_id="article.id" />
              <read-button />
            </div>
          </article>
        </div>
      </div>
    </articles>
</template>

<script>
import EditButton from '~/components/EditButton.vue'
import ReadButton from '~/components/ReadButton.vue'
export default {
  props: ['articles_array'],
  components: {
    EditButton,
    ReadButton
  }
}
</script>

<style scoped>
/* disable links coloring */
a {
  color: inherit;
  text-decoration: none;
}

.article-menu {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
