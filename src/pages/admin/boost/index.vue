<template>
  <div class="main-home">
    <div class="home order">
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
                      <element-select 
                        :default-selected-from="defaultSelectedFrom"
                        :select-items="selectItemsFrom"
                        :elo-from="true"
                        @setLvl="setLevel($event)"
                      />
                    </div>
                    <div class="selector-content">
                      <v-btn
                        class="elo-btns ml-4"
                        icon
                        small
                        color="white"
                        @click="changeElo({ to: 'minus', way: 'from' })"
                      >
                        <div class="minus" />
                      </v-btn>
                      <div class="elo-input">
                        {{ eloFrom }}
                      </div>
                      <v-btn
                        class="elo-btns mr-4"
                        icon
                        small
                        color="white"
                        @click="changeElo({ to: 'plus', way: 'from' })"
                      >
                        <div class="plus" />
                      </v-btn>
                    </div>
                  </div>
                  <v-icon color="white" class="pl-8 pr-8">
                    mdi-chevron-right
                  </v-icon>
                  <div class="elo-calc">
                    <div class="acc-selector">
                      <element-select 
                        :default-selected-to="defaultSelectedTo"
                        :select-items="selectItemsTo"
                        :elo-to="true"
                        @setLvl="setLevel($event)"
                      />
                    </div>
                    <div class="selector-content">
                      <v-btn
                        class="elo-btns ml-4"
                        icon
                        small
                        color="white"
                        @click="changeElo({ to: 'minus', way: 'to' })"
                      >
                        <div class="minus" />
                      </v-btn>
                      <div class="elo-input">
                        {{ eloTo }}
                      </div>
                      <v-btn
                        class="elo-btns mr-4"
                        icon
                        small
                        color="white"
                        @click="changeElo({ to: 'plus', way: 'to' })"
                      >
                        <div class="plus" />
                      </v-btn>
                    </div>
                  </div>
                </div>
                <div class="order-input-title">
                  ADD EXTRA OPTIONS
                </div>
                <div class="job-title">
                  <v-switch
                    v-model="switch1"
                    inset
                    dense
                    color="red"
                    :value="false"
                  >
                    <template slot='label'>
                      <div class="switch-label">Lobby/Duo</div>
                    </template>
                  </v-switch>
                  <element-tooltip 
                    class="pt-5 pl-2"
                    :text="tooltipswitch1"
                  />
                  <v-switch
                    v-model="switch2"
                    class="pl-8"
                    inset
                    dense
                    color="red"
                    :value="true"
                  >
                    <template slot='label'>
                      <div class="switch-label">Steam offline mode</div>
                    </template>
                  </v-switch>
                  <element-tooltip 
                    class="pt-5 pl-2"
                    :text="tooltipswitch2"
                  />
                  <v-switch
                    v-model="switch3"
                    class="pl-8"
                    inset
                    dense
                    color="red"
                    :value="false"
                  >
                    <template slot='label'>
                      <div class="switch-label">Priority order</div>
                    </template>
                  </v-switch>
                  <element-tooltip 
                    class="pt-5 pl-2"
                    :text="tooltipswitch3"
                  />
                </div>
                <v-list-item class="mt-16 pt-8" />
                <div class="d-flex">
                  <div class="order-title">
                    TOTAL
                  </div>
                  <div class="order-price pl-2">
                    {{ currency }}{{ price }} 
                  </div>
                </div>
                <div class="d-flex pt-6">
                  <v-btn
                    rounded
                    x-large
                    class="main-btn"
                    dark
                    @click="toTab(currentIndex)"
                  >
                    <span class="main-btn-text">
                      NEXT STEP
                    </span>
                  </v-btn>
                </div>
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
import ElementSelect from '../../../elements/select.vue';
import ElementTooltip from '../../../elements/tooltip.vue';

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "orders",
  components: {
    ElementCarousel,
    ElementTooltip,
    ElementSelect
  },
  data() {
    return {
      orderSlideIndex: 0,
      index: 0,
      currency: '$',
      eloFrom: 'Current ELO',
      eloTo: 'Desired ELO',
      switch1: false,
      switch2: true,
      switch3: false,
      tooltipswitch1: 'You can play with</br> booster without giving</br> your account',
      tooltipswitch2: 'Our booster will play in</br> invisible mode on your</br> steam account',
      tooltipswitch3: 'Your order will</br> be prioritized and</br> started ASAP',
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
      defaultSelectedFrom: {
        id: 0,
        text: '0',
        icon: 'level-0',
        eloMin: 'Current ELO',
        eloMax: 'Desired ELO',
      },
      defaultSelectedTo: {
        id: 0,
        text: '0',
        icon: 'level-0',
        eloMin: 'Current ELO',
        eloMax: 'Desired ELO',
      },
      selectItemsFrom: [
        {
          id: 0,
          text: '1',
          icon: 'level-1',
          eloMin: 0,
          eloMax: 800,
        },
        {
          id: 1,
          text: '2',
          icon: 'level-2',
          eloMin: 801,
          eloMax: 950,
        },
        {
          id: 2,
          text: '3',
          icon: 'level-3',
          eloMin: 951,
          eloMax: 1100,
        },
        {
          id: 3,
          text: '4',
          icon: 'level-4',
          eloMin: 1101,
          eloMax: 1250,
        },
        {
          id: 4,
          text: '5',
          icon: 'level-5',
          eloMin: 1251,
          eloMax: 1400,
        },
        {
          id: 5,
          text: '6',
          icon: 'level-6',
          eloMin: 1401,
          eloMax: 1550,
        },
        {
          id: 6,
          text: '7',
          icon: 'level-7',
          eloMin: 1551,
          eloMax: 1700,
        },
        {
          id: 7,
          text: '8',
          icon: 'level-8',
          eloMin: 1701,
          eloMax: 1850,
        },
        {
          id: 8,
          text: '9',
          icon: 'level-9',
          eloMin: 1851,
          eloMax: 2000,
        },
        {
          id: 9,
          text: '10',
          icon: 'level-10',
          eloMin: 2001,
          eloMax: 2500,
        },
      ],
      selectItemsTo: [
        {
          id: 0,
          text: '1',
          icon: 'level-1',
          eloMin: 0,
          eloMax: 800,
        },
        {
          id: 1,
          text: '2',
          icon: 'level-2',
          eloMin: 801,
          eloMax: 950,
        },
        {
          id: 2,
          text: '3',
          icon: 'level-3',
          eloMin: 951,
          eloMax: 1100,
        },
        {
          id: 3,
          text: '4',
          icon: 'level-4',
          eloMin: 1101,
          eloMax: 1250,
        },
        {
          id: 4,
          text: '5',
          icon: 'level-5',
          eloMin: 1251,
          eloMax: 1400,
        },
        {
          id: 5,
          text: '6',
          icon: 'level-6',
          eloMin: 1401,
          eloMax: 1550,
        },
        {
          id: 6,
          text: '7',
          icon: 'level-7',
          eloMin: 1551,
          eloMax: 1700,
        },
        {
          id: 7,
          text: '8',
          icon: 'level-8',
          eloMin: 1701,
          eloMax: 1850,
        },
        {
          id: 8,
          text: '9',
          icon: 'level-9',
          eloMin: 1851,
          eloMax: 2000,
        },
        {
          id: 9,
          text: '10',
          icon: 'level-10',
          eloMin: 2001,
          eloMax: 2500,
        },
      ],
    }
  },
  computed: {
    price () {
      if ((this.defaultSelectedTo.text === '0' && this.defaultSelectedFrom.text === '0') && (this.eloFrom >= this.eloTo)) {
        return 0;
      } else {
        // let countOfGames = Math.ceil((this.eloTo - this.eloFrom) / 25);
        let lvlDiff = this.defaultSelectedTo.id - this.defaultSelectedFrom.id;
        let gamesToNextLevel;
        let sum = 0;
        let priceTag;
        let currentLvl = 0;
        // console.log('lvlDiff ', lvlDiff)
        console.log('currentLvl ', currentLvl)
        for (var i = 0; i <= lvlDiff; i++) {
          if (lvlDiff > 1) {
            if (currentLvl === this.defaultSelectedFrom.id + 1) {
              gamesToNextLevel = Math.ceil((this.defaultSelectedFrom.eloMax - this.eloFrom) / 25);
            }
            // gamesToNextLevel = Math.ceil((this.defaultSelectedFrom.eloMax - this.eloFrom) / 25);
            console.log('bug ', this.defaultSelectedFrom.eloMax, this.eloFrom)
          } else {
            gamesToNextLevel = Math.ceil((this.eloTo - this.eloFrom) / 25);
            console.log(this.eloTo, this.eloFrom)
          }
          lvlDiff -= 1;
          priceTag = 2;
          // if (this.defaultSelectedFrom.eloMax >= 0 && this.defaultSelectedFrom.eloMax < 951) {
          //   priceTag = 1.6;
          // } else if (this.defaultSelectedFrom.eloMax >= 951 && this.defaultSelectedFrom.eloMax < 1251) {
          //   priceTag = 2;
          // } else if (this.defaultSelectedFrom.eloMax >= 1251 && this.defaultSelectedFrom.eloMax < 1551) {
          //   priceTag = 2.3;
          // } else if (this.defaultSelectedFrom.eloMax >= 1551 && this.defaultSelectedFrom.eloMax < 1701) {
          //   priceTag = 3.2;
          // } else if (this.defaultSelectedFrom.eloMax >= 1701 && this.defaultSelectedFrom.eloMax < 1851) {
          //   priceTag = 4.1;
          // } else if (this.defaultSelectedFrom.eloMax >= 1851 && this.defaultSelectedFrom.eloMax < 2001) {
          //   priceTag = 5.4;
          // } else if (this.defaultSelectedFrom.eloMax >= 2001 && this.defaultSelectedFrom.eloMax < 2200) {
          //   priceTag = 6.5;
          // } else if (this.defaultSelectedFrom.eloMax >= 2200 && this.defaultSelectedFrom.eloMax < 2300) {
          //   priceTag = 7;
          // } else if (this.defaultSelectedFrom.eloMax >= 2300 && this.defaultSelectedFrom.eloMax < 2400) {
          //   priceTag = 8.3;
          // } else if (this.defaultSelectedFrom.eloMax >= 2400 && this.defaultSelectedFrom.eloMax < 2500) {
          //   priceTag = 8.7;
          // } else if (this.defaultSelectedFrom.eloMax >= 2500 && this.defaultSelectedFrom.eloMax < 2600) {
          //   priceTag = 9.4;
          // } else if (this.defaultSelectedFrom.eloMax >= 2600 && this.defaultSelectedFrom.eloMax < 2700) {
          //   priceTag = 10.7;
          // } else if (this.defaultSelectedFrom.eloMax >= 2700 && this.defaultSelectedFrom.eloMax < 2800) {
          //   priceTag = 11.2;
          // } else if (this.defaultSelectedFrom.eloMax >= 2800 && this.defaultSelectedFrom.eloMax < 2900) {
          //   priceTag = 12;
          // } else if (this.defaultSelectedFrom.eloMax >= 2900 && this.defaultSelectedFrom.eloMax < 3000) {
          //   priceTag = 13.1;
          // } else if (this.defaultSelectedFrom.eloMax >= 3000 && this.defaultSelectedFrom.eloMax < 3100) {
          //   priceTag = 13.6;
          // } else if (this.defaultSelectedFrom.eloMax >= 3100 && this.defaultSelectedFrom.eloMax < 3200) {
          //   priceTag = 14.3;
          // } else if (this.defaultSelectedFrom.eloMax >= 3200 && this.defaultSelectedFrom.eloMax < 3199) {
          //   priceTag = 15.6;
          // } else if (this.defaultSelectedFrom.eloMax >= 3300 && this.defaultSelectedFrom.eloMax < 3400) {
          //   priceTag = 16.3;
          // } else if (this.defaultSelectedFrom.eloMax >= 3400 && this.defaultSelectedFrom.eloMax < 3500) {
          //   priceTag = 16.7;
          // }
          currentLvl = this.defaultSelectedFrom.id + 1;
          sum += gamesToNextLevel * priceTag;
          console.log(this.defaultSelectedFrom.id + 1, 'currentLvl', this.defaultSelectedFrom)
          console.log(lvlDiff, 'lvldiff')
          console.log('gamesToNextLevel ', gamesToNextLevel)
          console.log('priceTag ', priceTag)
          console.log('current priceTag * gamesToNextLevel ', gamesToNextLevel * priceTag)
        }
        console.log('total ', sum)
        return sum.toFixed(2);   
      }
    },
    // priceTag () {
    //   // 0 - 951 - 1.6
    //   // 951 - 1251 - 2
    //   // 1251 - 1551 - 2.3
    //   // 1551 - 1701 - 3.2
    //   // 1701 - 1851 - 4.1
    //   // 1851 - 2001 - 5.4
    //   // 2001-2201 - 6.5
    //   // 2201-2301 - 7
    //   // 2301-2401 - 8.3
    //   // 2401-2501 - 8.7
    //   // 2501-2601 - 9.4
    //   // 2601-2701 - 10.7
    //   // 2701-2801 - 11.2
    //   // 2801-2901 - 12
    //   // 2901-3001 - 13.1
    //   // 3001-3101 - 13.6
    //   // 3101-3201 - 14.3
    //   // 3201-3301 - 15.6
    //   // 3301-3401 - 16.3
    //   // 3401-3501 - 16.7

    //   // if (this.eloFrom >= this.eloTo) {
    //   //   return 0;
    //   // } else {
    //   //   let countOfGames = Math.ceil((this.eloTo - this.eloFrom) / 25);
    //   //   console.log(countOfGames)
    //   //   return 0;
    //   // }
    //   return 1.6;
    // },
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
    },
    getText(item) {
      return `${item.icon} - ${item.text}`;
    },
    toTab(data) {
      console.log(data)
    },
    setLevel(data) {
      if (data.way === 'from') {
        this.defaultSelectedFrom = this.selectItemsFrom[data.index];
        if (data.index === 0) {
          this.eloFrom = 0;
        } else {
          this.eloFrom = this.selectItemsFrom[data.index].eloMin
        }
      }
      if (data.way === 'to') {
        this.defaultSelectedTo = this.selectItemsTo[data.index];
        if (data.index === 0) {
          this.eloTo = 800;
        } else {
          this.eloTo = this.selectItemsTo[data.index].eloMax
        }
      }
    },
    changeElo(data) {
      if (typeof this.eloFrom !== 'string') {
        if (data.way === 'from') {
          if(data.to === 'minus') {
            if (this.eloFrom > 1) {
              this.eloFrom -= 25;
            }
          }
          if(data.to === 'plus') {
            this.eloFrom += 25;
          }
        }
      }
      if (typeof this.eloTo !== 'string') {
        if (data.way === 'to') {
          if(data.to === 'minus') {
            if (this.eloTo > 1) {
              this.eloTo -= 25;
            }
          }
          if(data.to === 'plus') {
            this.eloTo += 25;
          }
        }
      }
      if (this.eloFrom >= 0 && this.eloFrom < 801) {
        this.defaultSelectedFrom = this.selectItemsFrom[0]
      } else if (this.eloFrom >= 801 && this.eloFrom < 951) {
        this.defaultSelectedFrom = this.selectItemsFrom[1]
      } else if (this.eloFrom >= 951 && this.eloFrom < 1101) {
        this.defaultSelectedFrom = this.selectItemsFrom[2]
      } else if (this.eloFrom >= 1101 && this.eloFrom < 1251) {
        this.defaultSelectedFrom = this.selectItemsFrom[3]
      } else if (this.eloFrom >= 1251 && this.eloFrom < 1401) {
        this.defaultSelectedFrom = this.selectItemsFrom[4]
      } else if (this.eloFrom >= 1401 && this.eloFrom < 1551) {
        this.defaultSelectedFrom = this.selectItemsFrom[5]
      } else if (this.eloFrom >= 1551 && this.eloFrom < 1701) {
        this.defaultSelectedFrom = this.selectItemsFrom[6]
      } else if (this.eloFrom >= 1701 && this.eloFrom < 1851) {
        this.defaultSelectedFrom = this.selectItemsFrom[7]
      } else if (this.eloFrom >= 1851 && this.eloFrom < 2001) {
        this.defaultSelectedFrom = this.selectItemsFrom[8]
      } else if (this.eloFrom >= 2001) {
        this.defaultSelectedFrom = this.selectItemsFrom[9]
      }

      if (this.eloTo >= 0 && this.eloTo < 801) {
        this.defaultSelectedTo = this.selectItemsTo[0]
      } else if (this.eloTo >= 801 && this.eloTo < 951) {
        this.defaultSelectedTo = this.selectItemsTo[1]
      } else if (this.eloTo >= 951 && this.eloTo < 1101) {
        this.defaultSelectedTo = this.selectItemsTo[2]
      } else if (this.eloTo >= 1101 && this.eloTo < 1251) {
        this.defaultSelectedTo = this.selectItemsTo[3]
      } else if (this.eloTo >= 1251 && this.eloTo < 1401) {
        this.defaultSelectedTo = this.selectItemsTo[4]
      } else if (this.eloTo >= 1401 && this.eloTo < 1551) {
        this.defaultSelectedTo = this.selectItemsTo[5]
      } else if (this.eloTo >= 1551 && this.eloTo < 1701) {
        this.defaultSelectedTo = this.selectItemsTo[6]
      } else if (this.eloTo >= 1701 && this.eloTo < 1851) {
        this.defaultSelectedTo = this.selectItemsTo[7]
      } else if (this.eloTo >= 1851 && this.eloTo < 2001) {
        this.defaultSelectedTo = this.selectItemsTo[8]
      } else if (this.eloTo >= 2001) {
        this.defaultSelectedTo = this.selectItemsTo[9]
      }
    }
  }
};
</script>
