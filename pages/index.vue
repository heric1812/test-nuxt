<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">Test Nuxt</h1>
      <h2 class="subtitle">Blog project</h2>
      <div class="links">
        <nuxt-link to="/about" class="button--green">About</nuxt-link>
        <nuxt-link to="/users" class="button--green">Users</nuxt-link>
        <nuxt-link :to="{name: 'auth-login'}" class="button--green">Login</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: { AppLogo }
}
</script>
