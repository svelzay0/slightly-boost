<template>
  <v-footer padless>
    <v-row
      class="foot-bg"
      justify="center"
      no-gutters
    >
    <v-col cols="12">
      <v-row
        align="center"
        justify="center"
      > 
        <div 
          v-for="(link, key) in links"
          :key="link.text"
        >
          <v-btn
            color="white"
            text
            rounded
            class="menu_options"
            @click="goToContacts"
          > 
            <div :class="`c${key + 1} pr-5`" />
            {{ link.text }}
          </v-btn>
        </div>
      </v-row>
    </v-col>
      <v-col
        class="py-4 text-center white--text"
        cols="12"
      >
        <div class="footer-style">{{ footerFirst }}</div> 
        <div class="footer-style">{{ footerSecond }}</div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>

export default {
  name: 'FooterMenu',
  data() {
    return {
      footerFirst: 'Counter-Strike: Global Offensive is a registered trademark of Valve Corporation Company. We are in no way affiliated with, associated with or endorsed by Valve Corporation.',
      footerSecond: '© Slightlyboost 2022. All rights reserved.',
      links: [
        { icon: 'mdi-cloud-upload', text: 'Info@slightlyboost.com' },
        { icon: 'mdi-phone-hangup', text: '+7 (999) 888-55-44' },
        { icon: 'mdi-cloud-upload', text: 'Slightlyboost' },
        { icon: 'mdi-phone-hangup', text: 'Slightlyboost#6666' },
      ],
    }
  },
  methods: {
    checkUrl() {
      if (window.location.href.split('/').pop() === 'contacts') {
        return true;
      } else return false;
    },
    goToContacts() {
      return this.$router.push({ name: 'contacts' });
    }
  }
}
</script>