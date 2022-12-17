<template>
  <div class="main-home">
    <img alt="Главная" :src="require('@/assets/bg_image1.png')" />
    <div class="home">
      <div class="home-slider">
        <div class="slider-blur"></div>  
        <element-carousel
          v-model="index"
          :items="items"
          :slides-to-scroll="1"
          :per-page="1"
          permanent-arrows
          :slider="true"
          @changed="changeIndex($event)"
        >
          <template #default="{data}">
            <div class="main-info">
              <h1 class="slider-title">{{ data.title }}</h1>
              <div class="main-slider-desc">
                {{ data.text }}
              </div>
            </div>
          </template>
        </element-carousel>
        <div class="absolute-btn mt-16">
          <v-btn
            rounded
            x-large
            class="main-btn"
            dark
            @click="toTab(currentIndex)"
          >
            <span class="main-btn-text">
              START NOW
            </span>
          </v-btn>
        </div>
        <div class="light-clicker">
          <div v-if="currentIndex === 0" class="left-red" />
          <div v-else class="left-grey" @click="changeSlide(0)" />
          <div v-if="currentIndex === 1" class="right-red" />
          <div v-else class="right-grey" @click="changeSlide(1)" />
        </div>
      </div>
      <div class="home-content">
        <h1 class="slider-title">OUR OFFERS</h1>
      </div>
      <v-row>
        <v-col cols="12" sm="6">
          <div class="home-menu-tab-1" @click="handleSelect('boost')">
            <div class="big-white-title">FACEIT BOOST</div>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="home-menu-tab-2" @click="handleSelect('accounts')">
            <div class="big-white-title">ACCOUNTS STORE</div>
          </div>
        </v-col>
      </v-row>
      <div class="us-content">
        <h1 class="slider-title">WHY US?</h1>
      </div>
      <element-carousel
        v-model="index"
        :items="comments"
        :slides-to-scroll="4"
        :per-page="4"
        :comments="true"
        permanent-arrows
        @changed="changeIndex($event)"
      >
        <template #default="{data}">
          <div class="comments-block">
            <div class="comments-main-flex">
              <div class="stars">
                <div>
                  <button
                    type="button"
                    class="slick-arrow star-active"
                  />
                </div>
                <div>
                    <button
                      type="button"
                      class="slick-arrow star-active"
                    />
                </div>
                <div>
                  <button
                    type="button"
                    class="slick-arrow star-active"
                  />
                </div>
                <div v-if="data.stars > 3">
                  <button
                    type="button"
                    class="slick-arrow star-active"
                  />
                </div>
                <div v-if="data.stars > 4">
                  <button
                    type="button"
                    class="slick-arrow star-active"
                  />
                </div>
                <div v-else>
                  <button
                    type="button"
                    class="slick-arrow star-disable"
                  />
                </div>
              </div>
              <div class="comments-time">{{ data.time }}</div>
            </div>
            <div class="comments-name pt-4">
              {{ data.name }}
            </div>
            <div class="comments-title pt-4">
              {{ data.title }}
            </div>
            <div class="comments-desc pt-2">
              {{ data.desc }}
            </div>
          </div>
        </template>
      </element-carousel>
      <v-row class="before-footer pt-16">
        <v-col v-for="item in awards" :key="item.id" cols="12" sm="4">
          <div class="home-award">
            <div class="award-circle">
              <v-icon 
                class="icon-award"
                color="#FF3C3C"
              >
                {{ item.icon }}
              </v-icon>
            </div>
            <div class="award-text">
              <div class="award-title">{{ item.title }}</div>
              <div class="award-desc">{{ item.desc }}</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import ElementCarousel from '../../elements/carousel.vue';
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "home",
  components: {
    ElementCarousel,
  },
  data() {
    return {
      index: 0,
      awards: [
        {
          id: 1,
          title: '5 YEARS OF EXPERIENCE',
          desc: 'We have over five years of experience and we know how to do a great job and make our customers satisfied.',
          icon: 'mdi-numeric-5',
        },
        {
          id: 2,
          title: 'PROFESSIONAL BOOSTERS',
          desc: 'Our team consists of legit and high-elo players. We stick with only CS:GO services and we do it professionally.',
          icon: 'mdi-check',
        },
        {
          id: 3,
          title: 'SAFETY',
          desc: 'All of our boosters are time-tested and appreciate their work. You dont have to worry about your steam inventory.',
          icon: 'mdi-security',
        },
        {
          id: 4,
          title: '24/7 AVAILIABILITY',
          desc: 'You will get a personal manager who is always in touch. He will solve any question or problem you have.',
          icon: 'mdi-clock-outline',
        },
        {
          id: 5,
          title: 'PRIVACY',
          desc: 'No one will know that you have taken advantage of our help. We always play in offline mode and use your country VPN.',
          icon: 'mdi-account-check',
        },
        {
          id: 6,
          title: 'BONUSES AND DISCOUNTS',
          desc: 'You will definitely get a discount for a big order. For regular customers we always give bonuses and promo codes.',
          icon: 'mdi-gift-outline',
        },
      ],
      items: [
        {
          id: 1,
          title: 'FACEIT BOOST',
          text: 'Our team provides high-quality boosting service. You will never regret choosing us and now Ill explain why. Our team do not use any kind of software or cheats, everything is done by boosters hands. Other services creates an empty account with 0 matches and start boost right away - in result you end up with boosting service/smuring faceit ban and losing your money, account and time. We dont do the same, we ask for low-level accounts from our friends or customers and boost you. We always in touch with our customers through discord or any chat. In the end I hope you will have a great expirience with us.',
        },
        {
          id: 2,
          title: 'ACCOUNTS STORE',
          text: 'You can find any account you are looking for here. Some cheap ones to try out level 10 experience or more expensive ones to play on it as on a main account. We dont buy accounts from random people to resell, every account is made by member ofour team. Thats why we provide first e-mail, proof of purchase and lifetime warranty to make it safe for you. Got any questions left? Feel free to ask!.',
        },
      ],
      comments: [
        {
          id: 1,
          name: 'John',
          time: '6 hours ago',
          title: 'Amazing service',
          desc: 'Quickly boosted and best prices around, going to order more for..',
          stars: 5,
        },
        {
          id: 2,
          name: 'Robert',
          time: '18 hours ago',
          title: 'Great boost',
          desc: 'That was really fast and cheap, good service',
          stars: 4,
        },
        {
          id: 3,
          name: 'Anonymous',
          time: '1 day ago',
          title: 'Very good',
          desc: 'Booster answered all my questions and did the work quickly, recommend',
          stars: 5,
        },
        {
          id: 4,
          name: 'Henrey',
          time: '2 days ago',
          title: 'Wow',
          desc: 'Those guys are so professional, highly recommend them',
          stars: 5,
        },
        {
          id: 5,
          name: 'John',
          time: '3 days ago',
          title: 'Amazing service',
          desc: 'Quickly boosted and best prices around, going to order more for',
          stars: 4,
        },
        {
          id: 6,
          name: 'Robert',
          time: '6 days ago',
          title: 'Great boost',
          desc: 'That was really fast and cheap, good service',
          stars: 4,
        },
        {
          id: 7,
          name: 'Anonymous',
          time: '6 days ago',
          title: 'Very good',
          desc: 'Booster answered all my questions and did the work quickly, recommend',
          stars: 5,
        },
        {
          id: 8,
          name: 'Henrey',
          time: '1 week ago',
          title: 'Amazing service',
          desc: 'Quickly boosted and best prices around, going to order more for',
          stars: 4,
        },
      ],
      settings: {
        index: 0,
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      currentIndex: 0,
    }
  },
  methods: {
    handleSelect(route) {
      return this.$router.push({ name: route });
    },
    changeSlide (key) {
      this.$eventBus.$emit("changeFromParent", key);
    },
    changeIndex(index) {
      this.currentIndex = index;
    },
    toTab(index) {
      console.log(index)
      if (index === 0) {
        return this.$router.push({ name: 'boost' });
      } 
      else {
        return this.$router.push({ name: 'accounts' });
      }
    },
  }
};
</script>
