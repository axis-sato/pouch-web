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
          <div class="field is-grouped">
            <b-input placeholder="Search..."
                     type="search"
                     icon="search">
            </b-input>
            <a class="button">
              <b-icon
                icon="sync-alt"
                custom-class="fa-plus">
              </b-icon>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
