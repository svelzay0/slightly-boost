<template>
  <div class="photo-back">
    <div class="main-contacts">
      <img alt="Главная" :src="require('@/assets/bg_image1.png')" />
      <div class="home">
        <div class="order-blur"></div>
        <div class="blue-blur"></div>  
        <div class="order-content">
          <h1 class="slider-title">OUR CONTACTS</h1>
        </div>
        <div 
          v-for="(social, key) in socials"
          :key="key" 
          class="contacts pt-4"
          @click="copyOppId(social.text)"
          @mouseleave="mouseLeave()"
        >
          <v-tooltip right>
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
                    {{ social.text }}
                  </v-btn>
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <span>
              {{ copyText }}
            </span>
          </v-tooltip>
        </div>
        <div class="contacts-desc mt-12">
          <div class="box">
            <div class="text">
              <v-icon class="pa-4" color="red">mdi-alert-outline</v-icon>
              <div class="contacts-text pt-4 pb-4 pr-4">{{ text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="blue-blur-bot"></div>
  </div>
</template>

<script>
import { socials } from '../../../../static/socials';

export default {
  name: "Contacts",
  data() {
    return {
      url: '1',
      socials,
      text: 'Our manager always starts a conversation with your order number. Check the discord tag, number or email that you are dealing with. Be careful and don’t get scammed by impersonators',
      copyText: 'Click to copy',
    }
  },
  mounted() {
    this.url = window.location.href.split('/').pop();
  },
  methods: {
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
  },
};
</script>