<template>
  <div class="main-home">
    <div class="home">
      <div class="order-blur"></div> 
      <div class="order-content">
        <h1 class="slider-title">MAKE AN ORDER</h1>
      </div>
      <element-carousel
        class="pt-8"
        v-model="orderSlideIndex"
        :items="slides"
        :slides-to-scroll="1"
        :per-page="1"
        :order-slides="true"
        permanent-arrows
        @changed="changeIndex($event)"
      >
        <template #default="{data}">
          <div :class="`${data.photoClass}`">
            <div v-if="data.id === 1" class="order-cover"/>
            <div class="order-inside pr-13 pl-13 pt-11 pb-11">

              <div class="d-flex">
                <div class="order-number">
                  <div :class="data.class">
                    <!-- {{ data.id }} -->
                  </div>
                </div>
                <div class="order-title">{{ data.title }}</div>
              </div>
              <div v-if="data.id === 1" class="first-order-tab">
                <div class="order-input-title">
                  ENTER YOUR RATING OR LEVEL
                </div>
                <div class="calcs d-flex">
                  <div class="elo-calc">
                    <div class="acc-selector">
                      <v-select
                        :items="selectItems"
                        item-text="text"
                        item-value="id"
                        v-model="defaultSelected"
                        outlined
                        dense
                        @change="checkSelect"
                      ></v-select>
                    </div>
                  </div>
                  <v-icon color="white" class="pl-8 pr-8">
                    mdi-chevron-right
                  </v-icon>
                  <div class="elo-calc"></div>
                </div>
                <div class="order-input-title">
                  ADD EXTRA OPTIONS
                </div>
                <v-switch
                  v-model="switch1"
                  inset
                  dense
                  color="red"
                  value="red"
                  :label="`Switch 1: switch1`"
                ></v-switch>
                <v-switch
                  v-model="switch2"
                  inset
                  dense
                  color="red"
                  value="red"
                  :label="`Switch 2: switch1`"
                ></v-switch>
              </div>
            </div>
          </div>
        </template>
      </element-carousel>
      <div class="us-content mt-8">
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
            <div :class="`${item.icon}-icon`" />
            <div class="award-text pt-1">
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
import ElementCarousel from '../../../elements/carousel.vue';
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
      orderSlideIndex: 0,
      index: 0,
      switch1: false,
      switch2: true,
      slides: [
        {
          id: 1,
          title: 'CALCULATE BOOST',
          photoClass: 'order-tab-1',
          class: 'one',
        },
        {
          id: 2,
          title: 'YOUR INFORMATION',
          photoClass: 'order-tab-2',
          class: 'two',
        },
        {
          id: 3,
          title: 'COMPLETING',
          photoClass: 'order-tab-3',
          class: 'three',
        },
      ],
      awards: [
        {
          id: 1,
          title: '5 YEARS OF EXPERIENCE',
          desc: 'We have over five years of experience and we know how to do a great job and make our customers satisfied.',
          // icon: 'mdi-numeric-5',
          icon: 'years',
        },
        {
          id: 2,
          title: 'PROFESSIONAL BOOSTERS',
          desc: 'Our team consists of legit and high-elo players. We stick with only CS:GO services and we do it professionally.',
          // icon: 'mdi-check',
          icon: 'csgo',
        },
        {
          id: 3,
          title: 'SAFETY',
          desc: 'All of our boosters are time-tested and appreciate their work. You dont have to worry about your steam inventory.',
          // icon: 'mdi-security',
          icon: 'shield',
        },
        {
          id: 4,
          title: '24/7 AVAILIABILITY',
          desc: 'You will get a personal manager who is always in touch. He will solve any question or problem you have.',
          // icon: 'mdi-clock-outline',
          icon: 'clock',
        },
        {
          id: 5,
          title: 'PRIVACY',
          desc: 'No one will know that you have taken advantage of our help. We always play in offline mode and use your country VPN.',
          // icon: 'mdi-account-check',
          icon: 'user',
        },
        {
          id: 6,
          title: 'BONUSES AND DISCOUNTS',
          desc: 'You will definitely get a discount for a big order. For regular customers we always give bonuses and promo codes.',
          // icon: 'mdi-gift-outline',
          icon: 'gift',
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
      defaultSelected: {
        id: 1,
        text: '1',
      },
      // index: 0,
      selectItems: [
        {
          id: 1,
          text: '2',
        },
        {
          id: 2,
          text: '3',
        },
      ],
    }
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
    },
    checkSelect() {
      console.log(this.defaultSelected)
    },
  }
};
</script>
