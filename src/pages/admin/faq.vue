<template>
  <div class="main-home">
    <div class="home">
      <div class="order-blur"></div> 
      <div class="order-content">
        <h1 class="slider-title">FAQ</h1>
      </div>
      <div
        v-for="(item, key) in comments"
        :key="key"
        class="faq-block"
      >
        <div class="faq-item" @click="setShow(key)">
          <div class="faq-title">
            <div class="faq-text">
              {{ item.title }}
            </div>
          </div>
          <div class="faq-icon">
            <button
              type="button"
              :class="{
                'slick-arrow faq-disable':
                  item.show === false,
                'slick-arrow faq-active':
                  item.show === true,
              }"
            />
          </div>
        </div>
        <div v-show="item.show" class='comments-desc pb-8 pl-9 pr-16 to-text-left'>
          <div v-if="item.id !== 7 && item.id !== 9">{{ item.desc }}</div>
          <div v-else-if="item.id === 7">
            <span>
              {{ item.desc1 }}
            </span>
            (
            <a 
              class="main-link" 
              :href="item.link"
              target="_blank"
            >
              {{ item.link }}
            </a>
            )
            <span>
              {{ item.desc2 }}
            </span>
          </div>
          <div v-else-if="item.id === 9">
            {{ item.desc }}
            <a 
              class="main-link" 
              :href="item.link"
              target="_blank"
            >
              {{ item.link }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { faqComments } from '../../../static/faq-comments';

export default {
  name: "faq",
  data() {
    return {
      index: 0,
      comments: faqComments,
      currentIndex: 0,
    }
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
    },
    setShow(key) {
      this.comments[key].show = !this.comments[key].show;
    }
  }
};
</script>
