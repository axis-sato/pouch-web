<template>
  <additional-article-filed>
    <form action="">
      <div class="modal-card">
        <section class="modal-card-body">
          <b-field label="URL">
            <b-input
              type="url"
              placeholder="http://..."
              required>
            </b-input>
          </b-field>
          <button class="button">追加</button>
        </section>
      </div>
    </form>
  </additional-article-filed>
</template>

<script>
export default {}
</script>

<style scoped>
.modal-card {
  width: 400px;
}
</style>
