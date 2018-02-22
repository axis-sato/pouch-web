<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~/assets/img/logo.png" alt="logo" />
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div v-if="isHeaderShown" class="field is-grouped">
            <b-input placeholder="Search..."
                     type="search"
                     icon="search">
            </b-input>
            <b-dropdown position="is-bottom-left">
              <a class="button" slot="trigger">
                <b-icon
                  icon="sync-alt"
                  custom-class="fa-plus">
                </b-icon>
              </a>

              <b-dropdown-item custom paddingless>
                <additional-article-field />
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import AdditionalArticleField from '~/components/AdditionalArticleField.vue'

export default {
  components: { AdditionalArticleField },
  computed: {
    isHeaderShown() {
      return this.$route.name === 'index'
    }
  }
}
</script>
