<template>
  <div class="main-home">
    <div class="home">
      <div class="order-blur"></div> 
      <div v-if="accountPage === 1" class="acc-content">
        <h1 class="slider-title">ACCOUNTS STORE</h1>
        <div class="acc-featured pt-6">
          <div class="acc-selector">
            <v-select
              :items="items"
              item-text="text"
              item-value="id"
              v-model="defaultSelected"
              color="red"
              light
              label="Outlined style"
              menu-props="auto"
              hide-details
              single-line
              outlined
              @change="checkSelect"
            ></v-select>
          </div>
        </div>
        <div class="pt-8"></div>
        <v-row>
          <v-col 
            v-for="(item, key) in comments" 
            :key="key"
            cols="12" 
            sm="3"
          >
            <div 
              :class="{
                'acc-tab': item.sold === false,
                'acc-tab-active': item.sold === true
              }"
            >
              <div class="acc-circle">
                <div class="level-circle">
                  <div :class="`colored-lvl${item.level}`">
                    <div :class="`lvl${item.level}`" />
                    <div :class="`digit${item.level}`" />
                  </div>
                </div>
              </div>
              <div class="acc-title">
                {{ item.title }}
              </div>
              <div class="acc-desc pt-8">
                {{ truncate(item.desc, 95) }}
              </div>
              <v-btn
                v-if="item.sold"
                rounded
                x-large
                class="main-btn"
                dark
                @click="toTab(2, item, true)"
              >
                <span class="main-btn-text">
                  {{ item.text }} {{ item.price === 0 ? '' : currency.text }}{{ setPrice(item.price) }}
                </span>
              </v-btn>
              <v-btn
                v-else
                rounded
                x-large
                class="main-btn-dis"
                dark
                disabled
              >
                <span class="main-btn-text-dis pl-2">
                  {{ item.text }} {{ item.price === 0 ? '' : currency.text }}{{ setPrice(item.price) }}
                </span>
              </v-btn>
            </div>
          </v-col>
        </v-row> 
      </div>
      <div v-else class="acc-content">
        <element-carousel
          v-model="accountSlideIndex"
          :items="slides"
          :slides-to-scroll="1"
          :per-page="1"
          :account-slides="true"
          permanent-arrows
          @changed="changeIndex($event)"
        >
          <template #default="{data}">
            <h1 class="slider-title">{{ data.title }}</h1>
            <div 
              v-if="accountSlideIndex === 0" 
              class="back-btn-acc pb-6" 
              @click="toTab(1)"
            >
              <div class="d-flex">
                <v-icon 
                  class="pr-2 pt-7"
                  color="#979797"
                >
                  mdi-arrow-left
                </v-icon>
                <span class="pt-7">BACK TO STORE</span>
              </div>
            </div>
            <div 
              v-if="accountSlideIndex > 0" 
              class="back-btn-acc pb-6"
              @click="toSlide(0)"
            >
              <div class="d-flex">
                <v-icon 
                  class="pr-2 pt-7"
                  color="#979797"
                >
                  mdi-arrow-left
                </v-icon>
                <span class="pt-7">BACK TO ACCOUNT DETAILS</span>
              </div>
            </div>
            <v-row v-if="data.id === 1">
              <v-col
                cols="12"
                sm="6"
              >
                <img 
                  class="acc-first-slide-img"
                  alt="account image"
                  :src="require(`@/assets/accounts/${defAccount.image}`)"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <div class="acc-card-setter pl-8">
                  <div class="job-title">
                    <div class="award-title">{{ defAccount.title }}</div>
                  </div>
                  <div class="acc-desc-card">
                    {{ defAccount.desc }}
                  </div>
                  <div class="absolute-acc-btn">
                    <v-btn
                      rounded
                      x-large
                      class="main-btn"
                      dark
                      @click="toSlide(1)"
                    >
                      <span class="main-btn-text">
                        {{ defAccount.text }} {{ currency.text }}{{ setPrice(defAccount.price) }}
                      </span>
                    </v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
            <div v-if="data.id === 2" class="acc-inside">
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
                      @change="checkSelect"
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
                    class="d-flex to-center"
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
                </v-row>
              </v-form>
            </div>
            <div v-if="data.id === 3" class="last-acc-tab">
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
              <v-btn
                rounded
                x-large
                class="main-btn ml-13 mt-10"
                dark
                @click="toSlide(0, true, true)"
              >
                <span class="main-btn-text justify-center">
                  ORDER MORE
                </span>
              </v-btn>
            </div>
          </template>
        </element-carousel>
        <h1 v-if="accountPage > 1" class="slider-title pt-12 mt-12">MORE STUFF</h1>
        <div v-if="accountPage > 1" class="pt-8">
          <v-row>
            <v-col 
              v-for="(item, key) in staff" 
              :key="key"
              cols="12" 
              sm="3"
            >
              <div class="acc-tab">
                <div class="acc-circle">
                  <div class="level-circle">
                    <div :class="`colored-lvl${item.level}`">
                      <div :class="`lvl${item.level}`" />
                      <div :class="`digit${item.level}`" />
                    </div>
                  </div>
                </div>
                <div class="acc-title">
                  {{ item.title }}
                </div>
                <div class="acc-desc pt-8">
                  {{ item.desc }}
                </div>
                <v-btn
                  v-if="item.sold"
                  rounded
                  x-large
                  class="main-btn"
                  dark
                  @click="toTab(2, item)"
                >
                  <span class="main-btn-text">
                    {{ item.text }} {{ item.price === 0 ? '' : currency.text }}{{ setPrice(item.price) }}
                  </span>
                </v-btn>
                <v-btn
                  v-else
                  rounded
                  x-large
                  class="main-btn-dis"
                  dark
                  disabled
                >
                  <span class="main-btn-text-dis pl-2">
                    {{ item.text }} {{ item.price === 0 ? '' : currency.text }}{{ setPrice(item.price) }}
                  </span>
                </v-btn>
              </div>
            </v-col>
          </v-row> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { accountsStaff } from '../../../../static/accounts-staff';
import { paymentItems } from '../../../../static/payment-items';
import { accountsComments } from '../../../../static/accounts-comments';
import { accountsCommentsClone } from '../../../../static/accounts-comments-clone';
import { accountsSlides } from '../../../../static/accounts-slides';
import { accountsItems } from '../../../../static/accounts-items';
import cloneDeep from 'clone-deep'
import ElementCarousel from '../../../elements/carousel.vue';
import ElementTooltip from '../../../elements/tooltip.vue';
import axios from "axios";

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "accounts",
  components: {
    ElementCarousel,
    ElementTooltip,
  },
  data() {
    return {
      defaultSelected: {
        id: 1,
        text: 'Featured',
      },
      valid: true,
      tooltipFirst: 'Leave your discord<br/> telegram, whatsapp or<br/> anything to contact you',
      formData: {
        name: '',
        payment: '',
        promocode: '',
        contact: '',
      },
      operationId: 0,
      copyText: 'Click to copy',
      accountSlideIndex: 0,
      index: 0,
      thanks: 'THANKS FOR MAKING ORDER',
      thanskDesc: 'Our manager will contact you as soon as possible. Save your order number, so manager can prove he is not fake!',
      nameRules: [
        v => v.length >= 1 || 'This field required!'
      ],
      paymentDefaultSelected: {
        id: 1,
        text: 'Cryptocurrency',
      },
      paymentItems,
      items: accountsItems,
      slides: accountsSlides,
      comments: accountsComments,
      cloneComments: accountsCommentsClone,
      staff: accountsStaff,
      descForAll: 'After purchasing this product you will receive: Faceit+steam login and password, original e-mail address and password</br>Faceit matches: 712, Faceit phone: Verified, Faceit registered: 2017</br>Winrate: 55%, K/D ratio: 1.3, Behaviour index: Positive (1100+), Region: Free, ESEA/Esportal: Unregistered</br>MM rank: Global Elite, MM wins: 150, MM wingman rank: None, MM wingman wins: None</br>CS:GO hours: 128 h., Steam lvl: 0, Steam registered: 2015, Community / Vac / Trade banned: None',
      defAccount: {},
    }
  },
  computed: {
    ...mapGetters("shared", ["currency", "accountPage"]),
  },
  methods: {
    ...mapMutations("shared", ["setAccountPage"]),
    setPrice(price) {
      if (this.currency.id === 2) {
        if (price > 99) {
          return (price * 0.91).toFixed(0);
        } else if (price === 0) {
          return '';
        }
        return (price * 0.91).toFixed(1);
      } else {
        if (price === 0) {
          return '';
        }
        return price;
      }
    },
    setAccountToSell(item) {
      this.defAccount = item
      this.toSlide(0, true)
    },
    async toTab(data, item = {}, animation = false) {
      await scroll({
        top: 0,
        behavior: 'smooth',
      });
      if (animation) {
        let acc = document.querySelector('.acc-content');
        acc.setAttribute('style', 'animation: movedown 0.4s infinite alternate;');
        setTimeout(() => {
          acc.setAttribute('style', 'animation: moveup 0.4s linear alternate;');
          if (item.id) {
            this.setAccountToSell(item);
          }
          this.setAccountPage(data);
        }, 400);
      } else {
        if (item.id) {
          this.setAccountToSell(item);
        }
        this.setAccountPage(data);
      }
    },
    toSlide(index, clear = false, reload = false) {
      if (clear) {
        this.formData = {
          name: '',
          payment: '',
          promocode: '',
          contact: '',
        }
        this.operationId = 0
        this.copyText = 'Click to copy'
        this.lobbyDuo = false
        this.steamOffline = true
        this.priorityOrder = false
        this.price = 0
      }
      if (reload) {
        location.reload();
      } else {
        this.$eventBus.$emit("changeFromParent", index);
      }
    },
    async checkSelect() {
      if (this.defaultSelected === 1) {
        this.comments = cloneDeep(this.cloneComments);
      } else {
        this.comments = await this.comments.filter(el => el.sold === true);
        if (this.defaultSelected === 2) {
          await this.comments.sort((a, b) => a.price - b.price);
        } else if (this.defaultSelected === 3) {
          await this.comments.sort((a, b) => b.price - a.price);
        } else if (this.defaultSelected === 4) {
          await this.comments.sort((a, b) => a.elo - b.elo);
        } else if (this.defaultSelected === 5) {
          await this.comments.sort((a, b) => b.elo - a.elo);
        }
      }
    },
    truncate(str, num) {
      if (str !== null) {
        if (str.length > num) {
          return `${str.substring(num, 0)} ...`;
        }
      }
      return str;
    },
    async onSubmit() {
      if (this.$refs.form.validate()) {
        let acc = document.querySelector('.acc-content');
        acc.setAttribute('style', 'animation: movedown 0.4s infinite alternate;');
        setTimeout(() => {
          acc.setAttribute('style', 'animation: moveup 0.4s linear alternate;');
        }, 400);
        try {
          if (this.formData.payment === '') {
            this.formData.payment = this.paymentDefaultSelected
          }
          this.formData.accInfo = this.defAccount
          this.formData.payment = this.formData.payment.text
          this.formData.operationId = Math.floor(Math.random() * 9999999);
          this.operationId = this.formData.operationId
          await axios.post('https://sheet.best/api/sheets/4eceb24b-c49d-4fe0-a609-35cef69eb5ff', [this.formData]).then(response => {
            console.log(response);
          })
          this.toSlide(2);
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
    },
    changeIndex(index) {
      this.accountSlideIndex = index;
    },
  }
};
</script>