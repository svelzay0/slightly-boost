<template>
  <transition name="fade">
    <div v-if="buttonShow" class="button-top" @click="clickTop">
      <div class="arrow-top" />
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Scroller',
  data: () => ({
    buttonShow: false,
  }),
  mounted() {
    this.checkScrollPosition();
    window.addEventListener('scroll', this.checkScrollPosition);
  },
  methods: {
    checkScrollPosition() {
      this.buttonShow = window.pageYOffset > 10;
    },
    clickTop() {
      scroll({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
