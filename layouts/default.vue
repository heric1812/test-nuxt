<template>
  <v-app dark>
    <v-navigation-drawer
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          router
          exact
          :to="item.to"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ title}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: true,
        drawer: true,
        items: [
          { icon: 'home', title: 'Home', to: {name: 'index'} },
          { icon: 'bubble_chart', title: 'About', to: {name: 'about'} }
        ],
        title: 'Blog Nuxt'
      }
    }
  }
</script>