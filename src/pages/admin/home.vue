<template>
  <div class="main-home">
    <img
      alt="Главная"
      class="home-bg-1"
      :src="require('@/assets/bg_image1.png')" 
    />
    <img
      alt="Главная"
      class="home-bg-2"
      :src="require('@/assets/bg_image2.png')" 
    />
    <div class="home">
      <div class="home-slider">
        <div class="slider-blur"></div>  
        <element-carousel
          v-model="index"
          :items="slider"
          :slides-to-scroll="1"
          :per-page="1"
          permanent-arrows
          :slider="true"
          @changed="changeIndex($event)"
        >
          <template #default="{data}">
            <div class="main-content-static">
              <div class="main-info">
                <h1 class="slider-title">{{ data.title }}</h1>
                <div class="main-slider-desc">
                  {{ data.text }}
                </div>
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
          <div v-if="currentIndex === 1" class="left-red" />
          <div v-else class="left-grey" @click="changeSlide(1)" />
          <div v-if="currentIndex === 0" class="right-red" />
          <div v-else class="right-grey" @click="changeSlide(0)" />
        </div>
      </div>
      <div class="home-content">
        <h1 class="slider-title">OUR OFFERS</h1>
      </div>
      <v-row class="home-tabz">
        <v-col cols="12" sm="6">
          <div class="home-menu-tab-1" @click="handleSelect('boost')">
            <div class="blue-blur-home-tab-1"></div>
            <span class="big-white-title">FACEIT BOOST</span  >
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="home-menu-tab-2" @click="handleSelect('accounts')">
            <div class="blue-blur-home-tab-2"></div>
            <span class="big-white-title">ACCOUNTS STORE</span>
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
import { mapMutations } from "vuex";
import { homeAwards } from '../../../static/home-awards';
import { homeSlider } from '../../../static/home-slider';
import { homeComments } from '../../../static/home-comments';
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
      awards: homeAwards,
      slider: homeSlider,
      comments: homeComments,
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
  mounted() {
    console.log('new');
    this.changeIndex(0);
  },
  methods: {
    ...mapMutations("shared", ["setHomeSliderIndex"]),
    async handleSelect(route) {
      await scroll({
        top: 0,
        behavior: 'smooth',
      });
      return this.$router.push({ name: route });
    },
    changeSlide (key) {
      this.$eventBus.$emit("changeFromParent", key);
    },
    async changeIndex(index) {
      await this.setHomeSliderIndex(index);
      if (index === 1) {
        await document.querySelector('.home-bg-1').setAttribute('style', 'animation: none; z-index: 1');
        await document.querySelector('.home-bg-2').setAttribute('style', 'animation: 1s show ease; z-index: 2');
      } else {
        await document.querySelector('.home-bg-2').setAttribute('style', 'animation: none; z-index: 1');
        await document.querySelector('.home-bg-1').setAttribute('style', 'animation: 1s show ease; z-index: 2');
      }
      this.currentIndex = index;
    },
    toTab(index) {
      let firstBg = null;
      let secondBg = null;
      firstBg = document.querySelector('.home-bg-1');
      secondBg = document.querySelector('.home-bg-2');
      if (firstBg) {
        firstBg.setAttribute('style', 'animation: clear 0.4s infinite alternate;');
        secondBg.setAttribute('style', 'animation: clear 0.4s infinite alternate;');
      }
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
        if (index === 0) {
          return this.$router.push({ name: 'boost' });
        } 
        else {
          return this.$router.push({ name: 'accounts' });
        }
      }, 400);
    },
  }
};
</script>