<template>
  <v-app>
    <v-main class="pa-0 ma-0">
      <router-view />
      <!-- <v-text-field
        v-if="tgAuth === false"
        class="tg-input"
        v-model="phoneCode"
        outlined
        placeholder="TELEGRAM PHONE CODE"
        color="#fff"
      ></v-text-field> -->
    </v-main>
  </v-app>
</template>

<script>
  import { mapGetters, mapMutations } from "vuex";
  import telegramApi from './plugins/telegram';

  export default {
    name: "App",
    computed: {
      ...mapGetters("shared", ["error"]),
    },
    data() {
      return {
        phoneNumber: '+79510535250', //main
        phoneCode: '',
        phoneCodeHash: '',
        tgAuth: false,
      }
    },
    async mounted() {
      if (!localStorage.getItem("tokenCreated")) {
        this.createBase64Token();
      }
      // await this.getTgStatus();
      // if (this.tgAuth === false) {
      //   await this.getTgCode();
      // }
    },
    watch: {
      error() {
        if (this.error) {
          this.$toast.error(`${this.error}`);
        }
      },
      phoneCode() {
        console.log('length ', this.phoneCode.length)
        if (this.phoneCode.length > 4) {
          this.checkTg();
        }
      },
    },
    methods: {
      ...mapMutations("user", ["createBase64Token"]),
      getTgCode() {
        console.log('getTgCode...')
        telegramApi.sendCode(this.phoneNumber).then((sent_code) => {
          this.phoneCodeHash = sent_code.phone_code_hash;
        });
      },
      async checkTg() {
        console.log(this.phoneNumber)
        // console.log(this.phoneCodeHash)
        // console.log(this.phoneCode)
        await telegramApi.signIn(this.phoneNumber, this.phoneCodeHash, this.phoneCode).then(() => {
          console.log('Sign in complete');
          this.tgAuth = true;
          document.querySelector('.tg-input').setAttribute('style', 'display: none;');
        })
      },
      getTgStatus() {
        console.log('getUserInfo...')
        telegramApi.getUserInfo().then((user) => {
          if (user.id) {
            console.log('info ', user);
            this.tgAuth = true;
          } else {
            console.log('logged out ', user);
            this.tgAuth = false;
          }
        });
      }
    },
  };
</script>
