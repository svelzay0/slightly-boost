<template>
  <v-app>
    <header-menu />
    <v-main class="app">
      <scroller id="visible" />
      <v-container fluid>
        <keep-alive>
          <router-view />
        </keep-alive>
      </v-container>
    </v-main>
    <footer-menu />
  </v-app>
</template>

<script>
import HeaderMenu from '../components/HeaderMenu'
import FooterMenu from '../components/FooterMenu'
import Scroller from '../elements/scroller.vue';

export default {
  name: 'AppLayout',
  components: {
    HeaderMenu,
    FooterMenu,
    Scroller,
  },
}
</script>