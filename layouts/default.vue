<template>
  <div>
    <pouch-header/>
    <nuxt class="main"/>
    <pouch-footer/>
  </div>
</template>

<script>
import PouchHeader from '~/components/Header.vue'
import PouchFooter from '~/components/Footer.vue'

export default {
  components: {
    PouchHeader,
    PouchFooter
  }
}
</script>

<style scoped>
.main {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
