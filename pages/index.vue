<template>
  <section class="container">
    <v-layout row wrap>
      <v-flex class="text-xs-center">
        <app-logo/>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: { AppLogo },
  head () {
    return {
      title: 'Blog',
      meta: [
        {hid: 'description', name: 'description', content: 'Listado de Post\'s publicados.'}
      ]
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter index', to, from)
    console.log(to)
    console.log(from)
    next()
  },
  data () {
    return {
      list: []
    }
  }
}
</script>
