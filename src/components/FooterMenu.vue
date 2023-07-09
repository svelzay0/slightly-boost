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
          @click="copyOppId(link.text)"
          @mouseleave="mouseLeave()"
        >
          <v-tooltip top>
            <template #activator="{ on, attrs }">
              <v-list-item-content v-bind="attrs" v-on="on">
                <v-list-item-title>
                  <v-btn
                    color="white"
                    text
                    rounded
                    class="menu_options"
                  > 
                    <div :class="`c${key + 1} pr-5`" />
                    {{ link.text }}
                  </v-btn>
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <span>
              {{ copyText }}
            </span>
          </v-tooltip>
        </div>
      </v-row>
    </v-col>
      <v-col
        class="mt-4 mb-4 text-center white--text"
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
        { text: 'boss@slightlyboost.com' },
        { text: '+7 (917) 696-75-65' },
        { text: 'slightlyboss' },
        { text: 'slightlyboss#1580' },
      ],
      copyText: 'Click to copy',
    }
  },
  methods: {
    checkUrl() {
      if (window.location.href.split('/').pop() === 'contacts') {
        return true;
      } else return false;
    },
    copyOppId(text) {
      navigator.clipboard.writeText(text)
      .then(() => {
        console.log('copied!');
        this.copyText = 'Copied!'
      })
      .catch(err => {
        console.log('Something went wrong', err);
      });
    },
    mouseLeave() {
      this.copyText = 'Click to copy';
    },
  }
}
</script>
