<template>
    <div class="carousel">
      <client-only>
        <div>
            <button
                v-if="slider"
                type="button"
                :class="{
                    'slick-arrow slick-prev': isPopup,
                    'slick-popup slick-prev': !isPopup,
                }"
                @click="showPrev"
            ></button>
            <div v-else-if="comments" class="pr-4 pb-2">
              <v-icon 
                color="red"
                @click="showNext"
              >
                mdi-arrow-left-bold
              </v-icon>
            </div>
            <vue-slick-carousel
                v-if="slider"
                ref="carousel"
                :arrows="!isMobile && !permanentArrows"
                :dots="isMobile"
                :settings="settings"
                :slides-to-show="1"
                :slides-to-scroll="1"
                :adaptive-height="adaptiveHeight"
                :initial-slide="savingSlide ? savedSlide : 0"
                :autoplay="true"
                :autoplaySpeed="5000"
                @afterChange="afterChange"
                @beforeChange="beforeChange"
                >
                <template #customPaging="page">
                    <button
                    v-if="
                        !(
                        items.length > 4 &&
                        currentActive === items.length - 1 &&
                        page === items.length - 5
                        ) &&
                        page < currentActive + 4 &&
                        !(currentActive === 2 && page === currentActive + 3) &&
                        !showBool(currentActive, page, items) &&
                        !(
                            currentActive > 2 &&
                            page > currentActive + 2 &&
                            items.length > 5
                        )
                    "
                    :id="carouselName"
                    :class="{
                        whitex: whiteStyle === true,
                        btnsmalllast:
                        (currentActive === 0 && page === 3) ||
                        (currentActive > 0 &&
                            page === currentActive + 2 &&
                            items.length < 5) ||
                        (currentActive > 0 &&
                            items.length - currentActive !== 2 &&
                            page === items.length - 1 &&
                            items.length === 4) ||
                        (currentActive > 1 &&
                            page === currentActive - 2 &&
                            items.length === 4 &&
                            currentActive !== 3) ||
                        (items.length < 5 && currentActive === 3 && page === 0) ||
                        (items.length > 4 && currentActive > 0 && page === 0) ||
                        (items.length > 4 &&
                            currentActive < items.length - 2 &&
                            page === items.length - 1) ||
                        (items.length > 4 &&
                            currentActive === items.length - 2 &&
                            page === items.length - 1) ||
                        (items.length > 4 &&
                            currentActive === items.length - 1 &&
                            page === items.length - 4) ||
                        (items.length > 4 &&
                            currentActive === 1 &&
                            currentActive < items.length - 3 &&
                            page === currentActive + 3) ||
                        (items.length > 4 &&
                            currentActive > 1 &&
                            currentActive < items.length - 3 &&
                            page === currentActive + 2) ||
                        (items.length > 5 &&
                            currentActive > 1 &&
                            currentActive < items.length - 3 &&
                            page === currentActive - 2) ||
                        (items.length > 5 &&
                            currentActive > 1 &&
                            items.length - currentActive < 4 &&
                            currentActive !== items.length - 2 &&
                            page === currentActive - 3) ||
                        (items.length > 5 &&
                            currentActive > 1 &&
                            items.length - currentActive < 4 &&
                            page === currentActive - 3) ||
                        (items.length > 5 &&
                            currentActive > 1 &&
                            items.length - currentActive === 3 &&
                            page === currentActive - 2),
                    }"
                    :disabled="isPopup ? false : true"
                    >
                    <span :class="`customPaging${page}`">{{ page }}</span>
                    <div class="ball">1</div>
                    </button>
                    <span v-esle>{{ page }}</span>
                </template>
                <div v-for="slide in items" :key="slide.id" class="content-wrap">
                    <slot :data="slide" />
                </div>
            </vue-slick-carousel>
            <vue-slick-carousel
                v-else-if="comments"
                ref="awards"
                :arrows="!isMobile && !permanentArrows"
                :dots="isMobile"
                :settings="settings"
                :slides-to-show="4"
                :slides-to-scroll="4"
                :adaptive-height="adaptiveHeight"
                :initial-slide="savingSlide ? savedSlide : 0"
                :autoplay="true"
                :autoplaySpeed="5000"
                @afterChange="afterChange"
                @beforeChange="beforeChange"
                >
                <template #customPaging="page">
                    <button
                    v-if="
                        !(
                        items.length > 4 &&
                        currentActive === items.length - 1 &&
                        page === items.length - 5
                        ) &&
                        page < currentActive + 4 &&
                        !(currentActive === 2 && page === currentActive + 3) &&
                        !showBool(currentActive, page, items) &&
                        !(
                            currentActive > 2 &&
                            page > currentActive + 2 &&
                            items.length > 5
                        )
                    "
                    :id="carouselName"
                    :class="{
                        whitex: whiteStyle === true,
                        btnsmalllast:
                        (currentActive === 0 && page === 3) ||
                        (currentActive > 0 &&
                            page === currentActive + 2 &&
                            items.length < 5) ||
                        (currentActive > 0 &&
                            items.length - currentActive !== 2 &&
                            page === items.length - 1 &&
                            items.length === 4) ||
                        (currentActive > 1 &&
                            page === currentActive - 2 &&
                            items.length === 4 &&
                            currentActive !== 3) ||
                        (items.length < 5 && currentActive === 3 && page === 0) ||
                        (items.length > 4 && currentActive > 0 && page === 0) ||
                        (items.length > 4 &&
                            currentActive < items.length - 2 &&
                            page === items.length - 1) ||
                        (items.length > 4 &&
                            currentActive === items.length - 2 &&
                            page === items.length - 1) ||
                        (items.length > 4 &&
                            currentActive === items.length - 1 &&
                            page === items.length - 4) ||
                        (items.length > 4 &&
                            currentActive === 1 &&
                            currentActive < items.length - 3 &&
                            page === currentActive + 3) ||
                        (items.length > 4 &&
                            currentActive > 1 &&
                            currentActive < items.length - 3 &&
                            page === currentActive + 2) ||
                        (items.length > 5 &&
                            currentActive > 1 &&
                            currentActive < items.length - 3 &&
                            page === currentActive - 2) ||
                        (items.length > 5 &&
                            currentActive > 1 &&
                            items.length - currentActive < 4 &&
                            currentActive !== items.length - 2 &&
                            page === currentActive - 3) ||
                        (items.length > 5 &&
                            currentActive > 1 &&
                            items.length - currentActive < 4 &&
                            page === currentActive - 3) ||
                        (items.length > 5 &&
                            currentActive > 1 &&
                            items.length - currentActive === 3 &&
                            page === currentActive - 2),
                    }"
                    :disabled="isPopup ? false : true"
                    >
                    <span :class="`customPaging${page}`">{{ page }}</span>
                    <div class="ball">1</div>
                    </button>
                    <span v-esle>{{ page }}</span>
                </template>
                <div v-for="slide in items" :key="slide.id" class="content-wrap">
                    <slot :data="slide" />
                </div>
            </vue-slick-carousel>
            <button
                v-if="slider"
                type="button"
                :class="{
                    'slick-arrow slick-next': isPopup,
                    'slick-popup slick-next': !isPopup,
                }"
                @click="showNext"
            ></button>
            <div v-else-if="comments" class="pr-4 pt-2">
              <v-icon 
                color="red"
                @click="showNext"
              >
                mdi-arrow-right-bold
              </v-icon>
            </div>
            <!-- <button
                v-else-if="comments"
                type="button"
                class=""
                icon
                @click="showNext"
            >
            <v-icon color="red">mdi-close</v-icon>
          </button> -->
        </div>
      </client-only>
    </div>
  </template>

<script>
/* eslint-disable */
export default {
  name: "ElementCarousel",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 567,
    },
    isPopup: {
      type: Boolean,
      default: true,
    },
    permanentArrows: {
      type: Boolean,
      default: false,
    },
    adaptiveHeight: {
      type: Boolean,
      default: false,
    },
    savingSlide: {
      type: Boolean,
      default: false,
    },
    slider: {
      type: Boolean,
      default: false,
    },
    comments: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      index: 0,
      currentActive: 0,
      debounce: null,
      settings: {
        index: 5,
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      activeElem: [],
    };
  },
  mounted() {
    if (this.slider) {
      this.$eventBus.$on("changeFromParent", (data) => {
        this.$refs.carousel.goTo(data);
      });
    }
    
  },
  computed: {
    isMobile() {
      return !(
        this.$vuetify.breakpoint.xl ||
        this.$vuetify.breakpoint.lg ||
        this.$vuetify.breakpoint.md
      );
    },
    perPageCount() {
      if (
        (this.mainTop || this.mainNews) &&
        this.$vuetify.breakpoint.width < 1420 &&
        this.$vuetify.breakpoint.width > 1040
      ) {
        return 2;
      }
      if (this.$vuetify.breakpoint.xl || this.$vuetify.breakpoint.lg) {
        return this.perPage;
      }
      return 1;
    },
    slidesToCount() {
      if (
        (this.mainTop || this.mainNews) &&
        this.$vuetify.breakpoint.width < 1420 &&
        this.$vuetify.breakpoint.width > 1040
      ) {
        return 2;
      }
      if (this.$vuetify.breakpoint.xl || this.$vuetify.breakpoint.lg) {
        return this.slidesToScroll;
      }
      return 1;
    },
  },
  methods: {
    showPrev() {
      if (this.slider) {
        this.$refs.carousel.prev();
      } else if (this.comments) {
        this.$refs.awards.prev();
      }
    },
    showNext() {
      if (this.slider) {
        this.$refs.carousel.next();
      } else if (this.comments) {
        this.$refs.awards.next();
      }
    },
    afterChange(index) {
        return;
    },
    beforeChange(old, newest) {
        if (this.slider) {
          this.$emit('changed', newest);
        }
        return;
    },
  }
}
</script>