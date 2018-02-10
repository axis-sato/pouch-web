<template>
  <div>
    <pouch-header/>
    <nuxt/>
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
