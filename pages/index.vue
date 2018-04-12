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
  data () {
    return {
      list: []
    }
  }
}
</script>
