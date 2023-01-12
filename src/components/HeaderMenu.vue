<template>
  <v-app-bar app>
    <v-row
      align="center"
      justify="center"
      class="header-head-empty"
      ref="top-head"
    >
      <v-col cols="12">
        <v-row
          align="center"
          justify="center"
          class="pt-12"
        >
          <v-col cols="auto">
            <div 
              class="main-logo"
              @click="handleSelect('home')"
            >
              <div class="big_s">S</div>
              <div class="logo">
                LIGHTLY 
                <span class="pl-1">
                  BOOST
                </span>
              </div>
            </div>
          </v-col>
          <div 
            v-for="link in links"
            :key="link.route" 
          >
            <v-btn
              v-if="url !== link.route"
              color="white"
              text
              rounded
              @click="handleSelect(link.route)"
            >
              {{ link.url }}
            </v-btn>
            <v-btn
              v-else
              color="#fd0000"
              text
              rounded
              @click="handleSelect(link.route)"
            >
              {{ link.url }}
            </v-btn>
          </div>
          <v-col cols="auto">
            <div class="money">
              <div class="currency-tab">
                <v-select
                  :items="paymentItems"
                  item-text="text"
                  item-value="id"
                  v-model="paymentDefaultSelected"
                  color="red"
                  light
                  label="Outlined style"
                  menu-props="auto"
                  hide-details
                  single-line
                  outlined
                  dense
                  return-object
                  @change="checkSelect"
                ></v-select>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <!-- <v-col cols="auto">
        <v-app-bar-nav-icon />
      </v-col> -->
      
      <!-- <v-col
        cols="auto"
        class="col__borders ma-4 pb-2"
      >
        <notification-dropdown />
      </v-col> -->
      <!-- <v-col cols="auto" class="avatar">
        <v-avatar >
          <img
            :src="require('@/assets/user-avatar.jpg')"
            alt="User"
          >
        </v-avatar>
        <span class="pr-10 pl-3">Admin</span>
        <user-menu />
      </v-col> -->
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
// import NotificationDropdown from './NotificationDropdown'
// import UserMenu from './UserMenu'

export default {
  name: 'HeaderMenu',
  data: () => ({
    url: 'home',
    links: [
      { url: 'FACEIT BOOST', route: 'boost' },
      { url: 'ACCOUNTS', route: 'accounts' },
      { url: 'CONTACTS', route: 'contacts' },
      { url: 'GET A JOB', route: 'job' },
      { url: 'FAQ', route: 'faq' },
    ],
    paymentDefaultSelected: {
      id: 1,
      text: '€',
    },
    paymentItems: [
      {
        id: 1,
        text: '€',
      },
      {
        id: 2,
        text: '$'
      },
    ],
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  computed: {
    ...mapGetters("shared", ["homeSliderIndex"]),
  },
  methods: {
    ...mapMutations("shared", ["setCurrency"]),
    handleSelect(route) {
      let firstBg = null;
      let secondBg = null;
      // console.log(this.url)
      if (this.url === 'home') {
        firstBg = document.querySelector('.home-bg-1');
        secondBg = document.querySelector('.home-bg-2');
        if (firstBg) {
          firstBg.setAttribute('style', 'animation: clear 0.4s infinite alternate;');
          secondBg.setAttribute('style', 'animation: clear 0.4s infinite alternate;');
        }
      }
      this.url = route;
      document.querySelector('.home').setAttribute('style', 'animation: movedown 0.4s infinite alternate;');
      setTimeout(() => {
        document.querySelector('.home').setAttribute('style', 'animation: moveup 0.4s linear alternate;');
        if (firstBg) {
          if (this.homeSliderIndex === 0) {
            firstBg.setAttribute('style', 'display: block; animation: backfromclear 0.4s linear alternate; z-index: 2');
            secondBg.setAttribute('style', 'display: block; animation: backfromclear 0.4s linear alternate; z-index: 1');
          } else {
            firstBg.setAttribute('style', 'display: block; animation: backfromclear 0.4s linear alternate; z-index: 1');
            secondBg.setAttribute('style', 'display: block; animation: backfromclear 0.4s linear alternate; z-index: 2');
          }
        }
        return this.$router.push({ name: route });
      }, 400);
    },
    handleScroll() {
      if (window.pageYOffset < 80) {
        this.$refs['top-head'].className = 'row header-head-empty align-center justify-center';
      } else if (window.pageYOffset > 79 && window.pageYOffset < 140) {
        this.$refs['top-head'].className = 'row header-head-semi align-center justify-center';
      } else if (window.pageYOffset > 139 && window.pageYOffset < 210) {
        this.$refs['top-head'].className = 'row header-head-semi2 align-center justify-center';
      } else if (window.pageYOffset > 209 && window.pageYOffset < 280) {
        this.$refs['top-head'].className = 'row header-head-semi3 align-center justify-center';
      } else if (window.pageYOffset > 279 && window.pageYOffset < 350) {
        this.$refs['top-head'].className = 'row header-head-full align-center justify-center';
      } else if (window.pageYOffset > 349) {
        this.$refs['top-head'].className = 'row header-head-death align-center justify-center';
      }
    },
    async checkSelect() {
      console.log(this.paymentDefaultSelected)
      await this.setCurrency(this.paymentDefaultSelected);
    },
  },
  // components: {
  //   NotificationDropdown,
  //   UserMenu
  // }
}
</script>
