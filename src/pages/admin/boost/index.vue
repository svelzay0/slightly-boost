<template>
  <div class="main-home">
    <div class="home order">
      <div class="order-blur"></div> 
      <div v-if="orderPage < 2" class="blue-blur-order"></div>
      <div v-else class="blue-blur-order-last"></div>
      <div class="order-content">
        <h1 class="slider-title">MAKE AN ORDER</h1>
      </div>
      <element-carousel
        class="pt-8 order-slider"
        v-model="orderPage"
        :items="slides"
        :slides-to-scroll="1"
        :per-page="1"
        :order-slides="true"
        permanent-arrows
        @changed="changeIndex($event)"
      >
        <template #default="{data}">
          <div :ref="`${data.photoClass}`" :class="`${data.photoClass}`">
            <div v-if="data.id === 1" class="order-cover"/>
            <div v-else :class="
              {
                'order-cover-2': orderPage === data.id - 1,
                'order-cover-2-disable': orderPage !== data.id - 1,
              }"
            />
            <div class="order-inside pr-13 pl-13 pt-11 pb-11">
              <div class="d-flex">
                <div class="order-number">
                  <div :class="data.class" />
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
                        :select-items-to="selectItemsTo"
                        :select-items-from="selectItemsFrom"
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
                      <input
                        v-model="eloFrom"
                        class="elo-input-from"
                        placeholder="Current ELO"
                      />
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
                        :select-items-to="selectItemsTo"
                        :select-items-from="selectItemsFrom"
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
                      <input
                        v-model="eloTo"
                        class="elo-input-to" 
                        placeholder="Desired ELO"
                      />
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
                <div class="order-input-title pt-6">
                  ADD EXTRA OPTIONS
                </div>
                <div class="job-title">
                  <v-switch
                    v-model="lobbyDuo"
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
                    v-model="steamOffline"
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
                    v-model="priorityOrder"
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
                <div class="d-flex order-footer">
                  <div class="order-title">
                    TOTAL
                  </div>
                  <div class="order-price pl-2">
                    {{ currency.text }}{{ price }} 
                  </div>
                </div>
                <div class="d-flex pt-6">
                  <v-btn
                    rounded
                    x-large
                    class="main-btn"
                    dark
                    :disabled="price < 1"
                    @click="toTab(1)"
                  >
                    <span class="main-btn-text">
                      NEXT STEP
                    </span>
                  </v-btn>
                </div>
              </div>
              <div v-if="data.id === 2" class="first-order-tab">
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  class="pt-8 main-form"
                  @submit.prevent="onSubmit"
                >
                  <v-row class="order-row-from-tab-2">
                    <v-col
                      cols="12"
                      sm="4"
                    >
                      <div class="job-title">
                        <div class="award-title">YOUR NAME</div>
                      </div>
                      <v-text-field
                        v-model="formData.name"
                        outlined
                        :rules="nameRules"
                        placeholder="Your real name"
                        color="#fff"
                        :append-icon="formData.name.length ? '' : 'mdi-asterisk'"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="4"
                    >
                      <div class="job-title">
                        <div class="award-title">PAYMENT METHOD</div>
                      </div>
                      <v-select
                        class="order-select-tab-2"
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
                        return-object
                      ></v-select>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="4"
                    >
                      <div class="job-title">
                        <div class="award-title">PROMOCODE</div>
                      </div>
                      <v-text-field
                        v-model="formData.promocode"
                        outlined
                        placeholder="Promocode"
                        color="#fff"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                    >
                      <div class="job-title">
                        <div class="award-title pr-2">HOW CAN WE CONTACT YOU?</div>
                        <element-tooltip 
                          :text="tooltipFirst"
                        />
                      </div>
                      <v-text-field
                        v-model="formData.contact"
                        outlined
                        :rules="nameRules"
                        placeholder="Telegram, Discord, Whatsapp, etc.."
                        color="#fff"
                        :append-icon="formData.contact.length ? '' : 'mdi-asterisk'"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      class="pt-16 mt-7"
                    >
                      <div class="d-flex">
                        <div class="order-title">
                          TOTAL
                        </div>
                        <div class="order-price pl-2">
                          {{ currency.text }}{{ price }} 
                        </div>
                      </div>
                    </v-col>
                    <v-col
                      cols="3"
                      class="d-flex"
                    >
                      <v-btn
                        rounded
                        x-large
                        class="main-btn"
                        dark
                        :disabled="formData.name && !formData.contact"
                        type="submit"
                      >
                        <span class="main-btn-text justify-center">
                          CHECKOUT
                        </span>
                      </v-btn>
                    </v-col>
                    <v-col
                      cols="6"
                      class="d-flex"
                    >
                      <v-btn
                        rounded
                        x-large
                        class="main-btn-back"
                        dark
                        @click="toTab(0)"
                      >
                        <span class="main-btn-text justify-center">
                          BACK
                        </span>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </div>
              <div v-if="data.id === 3" class="last-order-tab">
                <div class="pl-8">
                  <div class="csgo-icon ml-16"></div>
                </div>
                <div class="job-title-finish">
                  <div class="award-title pr-2">{{ thanks }}</div>
                  <v-icon color="red" class="pr-2">mdi-heart</v-icon>
                </div>
                <div class="thanks-text">
                  {{ thanskDesc }}
                </div>
                <div class="operation-id" @click="copyOppId">
                  <element-tooltip
                    :other="true"
                    :text="copyText"
                    :opp-id="operationId"
                  />
                </div>
              </div>
              <div class="order-more-btn">
                <v-btn
                  v-if="data.id === 3"
                  rounded
                  x-large
                  class="main-btn"
                  dark
                  @click="toTab(0, true)"
                >
                  <span class="main-btn-text justify-center">
                    ORDER MORE
                  </span>
                </v-btn>
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
import { mapGetters, mapMutations } from "vuex";
import { boostSlides } from '../../../../static/boost-slides';
import { boostAwards } from '../../../../static/boost-awards';
import { boostComments } from '../../../../static/boost-comments';
import { boostSelectedItemsFrom } from '../../../../static/boost-selected-items-from';
import { boostSelectedItemsTo } from '../../../../static/boost-selected-items-to';
import { paymentItems } from '../../../../static/payment-items';
import ElementCarousel from '../../../elements/carousel.vue';
import ElementSelect from '../../../elements/select.vue';
import ElementTooltip from '../../../elements/tooltip.vue';
import axios from "axios";
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
      valid: true,
      tooltipFirst: 'Leave your discord<br/> telegram, whatsapp or<br/> anything to contact you',
      operationId: 0,
      copyText: 'Click to copy',
      formData: {
        name: '',
        payment: '',
        promocode: '',
        contact: '',
      },
      nameRules: [
        v => v.length >= 1 || 'This field required!'
      ],
      toWatch: true,
      index: 0,
      eloFrom: '',
      eloTo: '',
      lobbyDuo: false,
      steamOffline: true,
      priorityOrder: false,
      thanks: 'THANKS FOR MAKING ORDER',
      thanskDesc: 'Our manager will contact you as soon as possible. Save your order number, so manager can prove he is not fake!',
      tooltipswitch1: 'You can play with</br> booster without giving</br> your account',
      tooltipswitch2: 'Our booster will play in</br> invisible mode on your</br> steam account',
      tooltipswitch3: 'Your order will</br> be prioritized and</br> started ASAP',
      slides: boostSlides,
      awards: boostAwards,
      comments: boostComments,
      selectItemsFrom: boostSelectedItemsFrom,
      selectItemsTo: boostSelectedItemsTo,
      paymentItems,
      settings: {
        index: 0,
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      finalPrice: 0,
      defaultTemplateFrom: {
        id: 0,
        text: '0',
        icon: 'level-0',
        eloMin: 'Current ELO',
        eloMax: 'Desired ELO',
      },
      defaultTemplateTo: {
        id: 0,
        text: '0',
        icon: 'level-0',
        eloMin: 'Current ELO',
        eloMax: 'Desired ELO',
      },
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
      paymentDefaultSelected: {
        id: 1,
        text: 'Cryptocurrency',
      },
    }
  },
  computed: {
    ...mapGetters("shared", ["currency", "orderPage"]),
    price () {
      if (this.eloFrom === this.eloTo) {
        return 0;
      }
      if ((this.defaultSelectedTo.text === '0' && this.defaultSelectedFrom.text === '0') && (this.eloFrom >= this.eloTo)) {
        return 0;
      } else {
        let sum = 0;
        if (typeof this.eloFrom !== 'string' && typeof this.eloTo !== 'string') {
          for (var currentElo = this.eloFrom; currentElo < this.eloTo; currentElo += 25) {
            sum += this.getPriceTag(currentElo);
          }
          if (this.lobbyDuo) {
            sum += sum * 0.8;
          }
          if (this.priorityOrder) {
            sum += sum * 0.15;
          }
          if (this.paymentDefaultSelected.id === 2) {
            sum += sum * 0.30;
          }
        }
        return sum.toFixed(2);   
      }
    },
  },
  watch: {
    price(newVal) {
      this.finalPrice = newVal;
    },
    eloFrom(newVal) {
      if (this.toWatch) {
        if (newVal.length) {
          this.eloFrom = Math.abs(parseInt(newVal))
          this.changeEloFrom(this.eloFrom)
        } else if (typeof this.eloFrom !== 'number') {
          this.eloFrom = ''
          this.defaultSelectedFrom = this.defaultTemplateFrom
        }
      }
      if (isNaN(this.eloFrom)) {
        this.eloFrom = '';
        this.defaultSelectedFrom = this.defaultTemplateFrom
      }
      if (this.eloFrom > 3500) {
        this.eloFrom = 3499;
      }
    },
    eloTo(newVal) {
      if (this.toWatch) {
        if (newVal.length && typeof newVal === 'string') {
          this.eloTo = Math.abs(parseInt(newVal))
          this.changeEloTo(this.eloTo)
        } else if (typeof this.eloTo !== 'number') {
          this.eloTo = ''
          this.defaultSelectedTo = this.defaultTemplateTo
        }
      }
      if (isNaN(this.eloTo)) {
        this.eloTo = '';
        this.defaultSelectedTo = this.defaultTemplateTo
      }
      if (this.eloTo > 3500) {
        this.eloTo = 3500;
      }
    },
    orderPage(newVal) {
      this.$eventBus.$emit("changeFromParent", newVal);
      let firstTab = this.$refs['order-tab-1'];
      if (newVal > 0) {
        firstTab.setAttribute('style', 'display: none;');
      } else {
        firstTab.setAttribute('style', 'display: block;');
      }
    },
  },
  methods: {
    ...mapMutations("shared", ["setOrderPage"]),
    getPriceTag(elo) {
      let priceTag = 0;
      if (elo >= 0 && elo < 951) {
        if (this.currency.id === 2) {
          priceTag = 1.72
        } else priceTag = 1.72 * 0.91;
      } else if (elo >= 951 && elo < 1251) {
        if (this.currency.id === 2) {
          priceTag = 2.14
        } else priceTag = 2.14 * 0.91;
      } else if (elo >= 1251 && elo < 1551) {
        if (this.currency.id === 2) {
          priceTag = 2.47
        } else priceTag = 2.47 * 0.91;
      } else if (elo >= 1551 && elo < 1701) {
        if (this.currency.id === 2) {
          priceTag = 3.43
        } else priceTag = 3.43 * 0.91;
      } else if (elo >= 1701 && elo < 1851) {
        if (this.currency.id === 2) {
          priceTag = 4.4
        } else priceTag = 4.4 * 0.91;
      } else if (elo >= 1851 && elo < 2001) {
        if (this.currency.id === 2) {
          priceTag = 5.79
        } else priceTag = 5.79 * 0.91;
      } else if (elo >= 2001 && elo < 2200) {
        if (this.currency.id === 2) {
          priceTag = 6.97
        } else priceTag = 6.97 * 0.91;
      } else if (elo >= 2200 && elo < 2300) {
        if (this.currency.id === 2) {
          priceTag = 7.5
        } else priceTag = 7.5 * 0.91;
      } else if (elo >= 2300 && elo < 2400) {
        if (this.currency.id === 2) {
          priceTag = 8.9
        } else priceTag = 8.9 * 0.91;
      } else if (elo >= 2400 && elo < 2500) {
        if (this.currency.id === 2) {
          priceTag = 9.33
        } else priceTag = 9.33 * 0.91;
      } else if (elo >= 2500 && elo < 2600) {
        if (this.currency.id === 2) {
          priceTag = 10.08
        } else priceTag = 10.08 * 0.91;
      } else if (elo >= 2600 && elo < 2700) {
        if (this.currency.id === 2) {
          priceTag = 11.47
        } else priceTag = 11.47 * 0.91;
      } else if (elo >= 2700 && elo < 2800) {
        if (this.currency.id === 2) {
          priceTag = 12
        } else priceTag = 12 * 0.91;
      } else if (elo >= 2800 && elo < 2900) {
        if (this.currency.id === 2) {
          priceTag = 12.86
        } else priceTag = 12.86 * 0.91;
      } else if (elo >= 2900 && elo < 3000) {
        if (this.currency.id === 2) {
          priceTag = 14.04
        } else priceTag = 14.04 * 0.91;
      } else if (elo >= 3000 && elo < 3100) {
        if (this.currency.id === 2) {
          priceTag = 14.58
        } else priceTag = 14.58 * 0.91;
      } else if (elo >= 3100 && elo < 3200) {
        if (this.currency.id === 2) {
          priceTag = 15.33
        } else priceTag = 15.33 * 0.91;
      } else if (elo >= 3200 && elo < 3199) {
        if (this.currency.id === 2) {
          priceTag = 16.72
        } else priceTag = 16.72 * 0.91;
      } else if (elo >= 3300 && elo < 3400) {
        if (this.currency.id === 2) {
          priceTag = 17.47
        } else priceTag = 17.47 * 0.91;
      } else if (elo >= 3400 && elo < 3500) {
        if (this.currency.id === 2) {
          priceTag = 17.9
        } else priceTag = 17.9 * 0.91;
      }
      return priceTag;
    },
    changeIndex(index) {
      this.setOrderPage(index);
    },
    getText(item) {
      return `${item.icon} - ${item.text}`;
    },
    toTab(index, reset = false) {
      this.$eventBus.$emit("changeFromParent", index);
      if (reset) {
        this.formData = {
          name: '',
          payment: '',
          promocode: '',
          contact: '',
        }
        this.copyText = 'Click to copy'
        this.eloFrom = ''
        this.eloTo = ''
        this.lobbyDuo = false
        this.steamOffline = true
        this.priorityOrder = false
        this.finalPrice = 0
        this.defaultSelectedFrom = this.defaultTemplateFrom
        this.defaultSelectedTo = this.defaultTemplateTo
      }
    },
    async setLevel(data) {
      this.toWatch = false;
      if (data.way === 'from') {
        this.defaultSelectedFrom = this.selectItemsFrom[data.index];
        if (data.index === 0) {
          this.eloFrom = 500;
        } else {
          this.eloFrom = this.selectItemsFrom[data.index].eloMin;
        }
      }
      if (data.way === 'to') {
        this.defaultSelectedTo = this.selectItemsTo[data.index];
        if (data.index === 0) {
          this.eloTo = 800;
        } else {
          this.eloTo = this.selectItemsTo[data.index].eloMin;
        }
      }
      this.toWatch = await true;  
    },
    changeEloFrom(elo) {
      if (elo >= 0 && elo < 801) {
        this.defaultSelectedFrom = this.selectItemsFrom[0]
      } else if (elo >= 801 && elo < 951) {
        this.defaultSelectedFrom = this.selectItemsFrom[1]
      } else if (elo >= 951 && elo < 1101) {
        this.defaultSelectedFrom = this.selectItemsFrom[2]
      } else if (elo >= 1101 && elo < 1251) {
        this.defaultSelectedFrom = this.selectItemsFrom[3]
      } else if (elo >= 1251 && elo < 1401) {
        this.defaultSelectedFrom = this.selectItemsFrom[4]
      } else if (elo >= 1401 && elo < 1551) {
        this.defaultSelectedFrom = this.selectItemsFrom[5]
      } else if (elo >= 1551 && elo < 1701) {
        this.defaultSelectedFrom = this.selectItemsFrom[6]
      } else if (elo >= 1701 && elo < 1851) {
        this.defaultSelectedFrom = this.selectItemsFrom[7]
      } else if (elo >= 1851 && elo < 2001) {
        this.defaultSelectedFrom = this.selectItemsFrom[8]
      } else if (elo >= 2001) {
        this.defaultSelectedFrom = this.selectItemsFrom[9]
      }
    },
    changeEloTo(elo) {
      if (elo >= 0 && elo < 801) {
        this.defaultSelectedTo = this.selectItemsTo[0]
      } else if (elo >= 801 && elo < 951) {
        this.defaultSelectedTo = this.selectItemsTo[1]
      } else if (elo >= 951 && elo < 1101) {
        this.defaultSelectedTo = this.selectItemsTo[2]
      } else if (elo >= 1101 && elo < 1251) {
        this.defaultSelectedTo = this.selectItemsTo[3]
      } else if (elo >= 1251 && elo < 1401) {
        this.defaultSelectedTo = this.selectItemsTo[4]
      } else if (elo >= 1401 && elo < 1551) {
        this.defaultSelectedTo = this.selectItemsTo[5]
      } else if (elo >= 1551 && elo < 1701) {
        this.defaultSelectedTo = this.selectItemsTo[6]
      } else if (elo >= 1701 && elo < 1851) {
        this.defaultSelectedTo = this.selectItemsTo[7]
      } else if (elo >= 1851 && elo < 2001) {
        this.defaultSelectedTo = this.selectItemsTo[8]
      } else if (elo >= 2001) {
        this.defaultSelectedTo = this.selectItemsTo[9]
      }
    },
    async changeElo(data) {
      this.toWatch = await false;
      if (typeof this.eloFrom !== 'string' || (this.eloFrom.length || typeof this.eloFrom === 'number')) {
        this.eloFrom = parseInt(this.eloFrom)
        if (data.way === 'from') {
          if(data.to === 'minus') {
            if (this.eloFrom >= 25) {
              this.eloFrom -= 25;
            } else {
              this.eloFrom = 0;
            }
          }
          if(data.to === 'plus') {
            this.eloFrom += 25;
          }
        }
      } else if (data.way === 'from') {
        this.eloFrom = 949;
      }
      if (typeof this.eloTo !== 'string' || (this.eloTo.length || typeof this.eloTo === 'number')) {
        this.eloTo = parseInt(this.eloTo)
        if (data.way === 'to') {
          if(data.to === 'minus') {
            if (this.eloTo >= 25) {
              this.eloTo -= 25;
            } else {
              this.eloTo = 0;
            }
          }
          if(data.to === 'plus') {
            this.eloTo += 25;
          }
        }
      } else  if (data.way === 'to') {
        this.eloTo = 1025;
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
      this.toWatch = await true;
    },
    async onSubmit() {
      if (this.$refs.form.validate()) {
        try {
          this.formData.lobbyDuo = this.lobbyDuo
          this.formData.steamOffline = this.steamOffline
          this.formData.priorityOrder = this.priorityOrder
          this.formData.price = this.finalPrice
          this.formData.accInfo = 
            { eloFrom: this.eloFrom, eloTo: this.eloTo, price: this.price, currency: this.currency }
          if (this.formData.payment === '') {
            this.formData.payment = this.paymentDefaultSelected
          }
          this.formData.payment = this.formData.payment.text
          this.formData.operationId = await Math.floor(Math.random() * 9999999);
          this.operationId = this.formData.operationId;
          this.formData.typeOfOrder = 'boost';
          await axios.post('https://sheet.best/api/sheets/3e3aed18-8465-4bdd-8ad2-8df2b0a21059', [this.formData]).then(response => {
            console.log(response);
          })
          this.toTab(2, true);
        } catch (err) {
          console.log(err)
        }
      }
    },
    copyOppId() {
      navigator.clipboard.writeText(this.operationId)
      .then(() => {
        console.log('copied!');
        this.copyText = 'Copied!'
      })
      .catch(err => {
        console.log('Something went wrong', err);
      });
    }
  }
};
</script>