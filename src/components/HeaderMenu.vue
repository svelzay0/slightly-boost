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
          class="pt-12 semi-full"
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
          <v-spacer v-if="desktop" />
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
          <v-spacer v-if="desktop" />
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
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

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
    ...mapGetters("shared", ["homeSliderIndex", "accountPage", "orderPage"]),
    desktop() {
      return this.$vuetify.breakpoint.width > 600;
    },
  },
  methods: {
    ...mapMutations("shared", ["setCurrency", "setAccountPage", "setOrderPage"]),
    handleSelect(route) {
      scroll({
        top: 0,
        behavior: 'smooth',
      });
      let firstBg = null;
      let secondBg = null;
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
      if (route !== 'accounts') {
        this.setAccountPage(1);
      }
      if (route !== 'boost') {
        this.setOrderPage(0);
      }
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
      await this.setCurrency(this.paymentDefaultSelected);
    },
  },
}
</script>