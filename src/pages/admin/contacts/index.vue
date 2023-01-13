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
          v-for="(link, key) in links"
          :key="key" 
          class="contacts pt-4"
        >
          <v-btn
            color="white"
            text
            rounded
            class="menu_options"
          > 
            <div :class="`c${key + 1} pr-5`" />
            {{ link.text }}
          </v-btn>
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


export default {
  name: "Contacts",
  data() {
    return {
      url: '1',
      links: [
        { text: 'Info@slightlyboost.com' },
        { text: '+7 (999) 888-55-44' },
        { text: 'Slightlyboost' },
        { text: 'Slightlyboost#6666' },
      ],
      text: 'Our manager always starts a conversation with your order number. Check the discord tag, number or email that you are dealing with. Be careful and don’t get scammed by impersonators',
    }
  },
  mounted() {
    this.url = window.location.href.split('/').pop();
  },
  methods: {
    // formatDate (date) {
    //   return new Date(date).toLocaleString([], this.dateSettings);
    // },
    // getItemPerPage(val) {
    //   this.itemsPerPage = val;
    // }
  }
};
</script>