<template>
  <article-additional>
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
  </article-additional>
</template>

<style scoped>
.modal-card {
  width: 400px;
}
</style>
