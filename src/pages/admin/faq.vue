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
        @click="setShow(key)"
      >
        <div class="faq-item">
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
export default {
  name: "faq",
  data() {
    return {
      index: 0,
      comments: [
        {
          id: 1,
          title: "How it works?",
          desc: "Once you fill the form with your current elo and desired elo and click purchase, you get a personal manager who will accompany you during the boost. You can ask him whatever you want and whenever you want. Setup the time which will fill your day scheudle (for duo/party boost) or ask us to start later/earlier (for solo boost). The boost starts right after your payment.",
          show: false,
        },
        {
          id: 2,
          title: "What is solo boost?",
          desc: "The easiest and faster way to boost your account. You share your steam and faceit account with us and we start the boost right away. If you feel scared about your accout and skins - then choose the duo option.",
          show: false,
        },
        {
          id: 3,
          title: "What is duo boost?",
          desc: "You play on your account by yourself and we assist you during the boost. You get 1-3 boosters in your party and the boost starts. This method is longer and more expensive, but it's only your choice which method you would use.",
          show: false,
        },
        {
          id: 4,
          title: "Are you services safe? Can i get banned for that?",
          desc: "We guarantee safety for your account during and after the boost. Our boosters gets an updated guide how to avoid any possible bans (with VPN, HWID&MAC changers and many other things). We do not use any kinds of cheats/software, never. It's not necessary when you have 1000 or 2000 elo diffirence compared to your enemies. You can be safe with us and your account will not get banned.",
          show: false,
        },
        {
          id: 5,
          title: "How long will boost take? And which solo or duo boost is faster?",
          desc: "It depends how many elo your order and your current elo. Our boosters capable to do ~200-300 elo per day and trying to finish every order as fast as possible. Solo boost is easier, cheaper and much faster for us. Since we won't have to wait for customer and play whenever booster wants. :)",
          show: false,
        },
        {
          id: 6,
          title: "Who will boost my account?",
          desc: "Your account will be boosted by high-elo (3500-4000) boosters. We have a small team and do not hire random people, you can be sure your acoount is in the right hands.",
          show: false,
        },
        {
          id: 7,
          title: "I have a lot of skins on my account. Are they safe?",
          desc2: "so your booster can run only CS:GO and do nothing else. Anyways, nothing will happen to your skins since you have steam guard enabled.",
          show: false,
          desc1: "You can setup a family view",
          link: "https://help.steampowered.com/ru/faqs/view/6B1A-66BE-E911-3D98",
        },
        {
          id: 8,
          title: "What original e-mail is?",
          desc: "This is the email that was used to create the account. If you lost account but still haves access to original email - then you can contact steam support and they will help you get it back. If you don't have - they probably won't unless you have other proofs that you're owner of account (such as proof of purchase, number that was used on account, credit cards, paypal etc.).",
          show: false,
        },
        {
          id: 9,
          title: "What proof of purchase is?",
          desc: "That's a receipt you get after yyou buy any product in Steam. That's one of couple proofs that you can send to steam support and get your account back if you lost. Read more:",
          show: false,
          link: "https://help.steampowered.com/en/faqs/view/40A0-8B4B-B54B-C51A",
        },
      ],
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
