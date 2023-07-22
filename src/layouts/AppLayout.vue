<template>
  <v-app>
    <header-menu />
    <v-main class="app">
      <scroller id="visible" />
      <v-container fluid style="width: 1240px;">
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
  created () {
    document.title = "slightlyboost - Faceit CSGO Boosting | Faceit CSGO Accounts";
  }
}
</script>