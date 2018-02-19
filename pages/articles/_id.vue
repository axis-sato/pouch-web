<template>
  <section class="container">
    <a :href="article.url" target="_blank" class="title">{{article.title}}</a>
    <img :src="article.image_path" alt="">
    <tag-field />
    <comment-field />
  </section>
</template>

<script>
import TagField from '~/components/TagField.vue'
import CommentField from '~/components/CommentField.vue'
export default {
  name: 'article',
  async asyncData() {
    return {
      article: {
        id: 1,
        title: 'Modern Android development with Kotlin Part 4 – ProAndroidDev',
        url:
          'https://proandroiddev.com/modern-android-development-with-kotlin-part-4-4ac18e9868cb',
        image_path:
          'https://cdn-images-1.medium.com/max/1200/1*BFnx6_XDCQbIRR9xPSlijQ.jpeg'
      }
    }
  },
  head() {
    return {
      title: `${this.article.title}`
    }
  },
  components: {
    TagField,
    CommentField
  }
}
</script>

<style scoped>
.container {
  max-width: 840px;
  padding-left: 20px;
  padding-right: 20px;
}
.title {
  font-size: 2rem;
  font-weight: 600;
}
img {
  max-width: 800px;
  position: relative;
  width: 100%;
  margin: 20px auto;
  display: block;
}
tag-field comment-field {
  margin: 10px;
}
</style>
