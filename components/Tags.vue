<template>
  <ul>
    <li v-for="tag in tags">
      {{tag.name}}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['tags']
}
</script>

<style scoped>

</style>
