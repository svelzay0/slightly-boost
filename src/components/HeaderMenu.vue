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
              color="white"
              text
              rounded
              class="menu_options"
              @click="handleSelect(link.route)"
            >
              {{ link.url }}
            </v-btn>
          </div>
          <v-col cols="auto">
            <div class="pl-16 ml-16">
              <div class="currency">
                <div class="pr-6">
                  €
                </div>
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
// import NotificationDropdown from './NotificationDropdown'
// import UserMenu from './UserMenu'

export default {
  name: 'HeaderMenu',
  data: () => ({
    links: [
      { url: 'FACEIT BOOST', route: 'boost' },
      { url: 'ACCOUNTS', route: 'accounts' },
      { url: 'CONTACTS', route: 'contacts' },
      { url: 'GET A JOB', route: 'job' },
      { url: 'FAQ', route: 'faq' },
    ],
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleSelect(route) {
      return this.$router.push({ name: route });
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
      } else if (window.pageYOffset > 279) {
        this.$refs['top-head'].className = 'row header-head-full align-center justify-center';
      }
    },
  },
  // components: {
  //   NotificationDropdown,
  //   UserMenu
  // }
}
</script>
