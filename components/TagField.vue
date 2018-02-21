<template>
  <b-field label="タグ">
    <b-taginput
      v-model="tags"
      icon="tag"
      :confirm-key-codes="[13,9]"
      placeholder="タグ追加">
    </b-taginput>
  </b-field>
</template>

<script>
export default {
  data() {
    return {
      tags: []
    }
  }
}
</script>
