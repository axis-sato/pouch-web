<template>
  <nuxt-link :to="{ name: 'articles-id', params: { id: article_id }}">
    <b-icon
      icon="edit"
      pack="fa"
      custom-size="fa-1x"
      size="is-medium">
    </b-icon>
  </nuxt-link>
</template>

<script>
export default {
  props: ['article_id']
}
</script>
