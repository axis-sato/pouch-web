<template>
  <div>
    <pouch-header/>
    <nuxt class="main"/>
  </div>
</template>

<script>
import PouchHeader from '~/components/Header.vue'

export default {
  components: {
    PouchHeader
  }
}
</script>

<style scoped>
.main {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
