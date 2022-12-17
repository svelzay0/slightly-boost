<template>
  <div class="main-home">
    <div class="home">
      <div class="order-blur"></div> 
      <div class="order-content">
        <h1 v-if="(typeof defaultSelected === 'object') || defaultSelected === 1" class="slider-title">ACCOUNTS STORE</h1>
        <h1 v-else class="slider-title">ACCOUNT DETAILS</h1>
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
        <div v-if="(typeof defaultSelected === 'object') || defaultSelected === 1" class="pt-8">
          <v-row>
            <v-col 
              v-for="(item, key) in comments" 
              :key="key"
              cols="12" 
              sm="3"
            >
              <div class="acc-tab" @click="handleSelect('boost')">
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
                  @click="toTab(currentIndex)"
                >
                  <span class="main-btn-text">
                    {{ item.text }}
                  </span>
                </v-btn>
                <v-btn
                  v-else
                  rounded
                  x-large
                  class="main-btn-dis"
                  dark
                  disabled
                  @click="toTab(currentIndex)"
                >
                  <span class="main-btn-text-dis pl-2">
                    {{ item.text }}
                  </span>
                </v-btn>
              </div>
            </v-col>
          </v-row> 
        </div>
        <div v-else>
          <div class="back-btn">
            <v-btn
              color="#979797"
              text
              rounded
              max-width="240"
              class="menu_options"
              @click="setSelectToDefault"
            > 
              <v-icon class="pr-2">
                mdi-arrow-left
              </v-icon>
                BACK TO STORE
            </v-btn>
          </div>
          <h1 v-if="defaultSelected === 2" class="slider-title pt-12 mt-12">MORE STUFF</h1>
          <div v-if="defaultSelected === 2" class="pt-8">
            <v-row>
              <v-col 
                v-for="(item, key) in staff" 
                :key="key"
                cols="12" 
                sm="3"
              >
                <div class="acc-tab" @click="handleSelect('boost')">
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
                    @click="toTab(currentIndex)"
                  >
                    <span class="main-btn-text">
                      {{ item.text }}
                    </span>
                  </v-btn>
                  <v-btn
                    v-else
                    rounded
                    x-large
                    class="main-btn-dis"
                    dark
                    disabled
                    @click="toTab(currentIndex)"
                  >
                    <span class="main-btn-text-dis pl-2">
                      {{ item.text }}
                    </span>
                  </v-btn>
                </div>
              </v-col>
            </v-row> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "accounts",
  data() {
    return {
      defaultSelected: {
        id: 1,
        text: 'Feature',
      },
      index: 0,
      items: [
        {
          id: 1,
          text: 'Feature',
        },
        {
          id: 2,
          text: 'Account Details',
        },
      ],
      comments: [
        {
          id: 1,
          level: 10,
          color: 'red',
          title: "FACEIT ACCOUNT LEVEL 10 (2170 ELO)",
          desc: "Includes steam and original e-mail. 712 Matches, Winrate 55%, K/D Ratio 1.3, Behaviour index: positive (1100+), 3213 hours..",
          sold: true,
          text: "BUY FOR €60",
        },
        {
          id: 2,
          level: 3,
          color: 'green',
          title: "FACEIT ACCOUNT READY TO PLAY",
          desc: "Steam accounts with hours, services for registration, and mobile verification of the faceit account.",
          sold: true,
          text: "BUY FOR €5",
        },
        {
          id: 3,
          level: 11,
          color: 'grey',
          title: "FACEIT ACCOUNT LEVEL 10 (4100 ELO)",
          desc: "228 Matches, Winrate 75%, K/D Ratio 1.4 Behaviour index: positive (1100+), 8253 hours..",
          sold: false,
          text: "SOLD OUT",
        },
        {
          id: 4,
          level: 1,
          color: 'white',
          title: "FACEIT ACCOUNT LEVEL 1 (390 ELO)",
          desc: "Includes steam and original e-mail. 15 Matches, Winrate 5%, K/D Ratio 0.45, Behaviour index: positive (1100+), 3213 hours..",
          sold: true,
          text: "BUY FOR €7",
        },
        {
          id: 5,
          level: 7,
          color: 'yellow',
          title: "FACEIT ACCOUNT LEVEL 7 (1560 ELO)",
          desc: "Includes steam and original e-mail. 25 Matches, Winrate 57%, K/D Ratio 1.7, Behaviour index: positive (1100+), 98 hours..",
          sold: true,
          text: "BUY FOR €60",
        },
        {
          id: 6,
          level: 10,
          color: 'red',
          title: "FACEIT ACCOUNT LEVEL 10 (2020 ELO)",
          desc: "Includes steam and original e-mail. 90 Matches, Winrate 53%, K/D Ratio 1.43, Behaviour index: positive (1100+), 253 hours..",
          sold: true,
          text: "BUY FOR €1.2K",
        },
        {
          id: 7,
          level: 1,
          color: 'white',
          title: "FACEIT ACCOUNT LEVEL 1 (580 ELO)",
          desc: "Includes steam and original e-mail. 3 Matches, Winrate 100%, K/D Ratio 0.35, Behaviour index: positive (1100+), 95 hours..",
          sold: true,
          text: "BUY FOR €10",
        },
        {
          id: 8,
          level: 9,
          color: 'orange',
          title: "FACEIT ACCOUNT LEVEL 9 (1860 ELO)",
          desc: "Includes steam and original e-mail. 35 Matches, Winrate 55%, K/D Ratio 1.3, Behaviour index: positive (1100+), 148 hours..",
          sold: true,
          text: "BUY FOR €37",
        },
      ],
      staff: [
        {
          id: 1,
          level: 10,
          color: 'red',
          title: "FACEIT ACCOUNT LEVEL 10 (2170 ELO)",
          desc: "Includes steam and original e-mail. 712 Matches, Winrate 55%, K/D Ratio 1.3, Behaviour index: positive (1100+), 3213 hours..",
          sold: true,
          text: "BUY FOR €60",
        },
        {
          id: 6,
          level: 10,
          color: 'red',
          title: "FACEIT ACCOUNT LEVEL 10 (2020 ELO)",
          desc: "Includes steam and original e-mail. 90 Matches, Winrate 53%, K/D Ratio 1.43, Behaviour index: positive (1100+), 253 hours..",
          sold: true,
          text: "BUY FOR €1.2K",
        },
        {
          id: 3,
          level: 11,
          color: 'grey',
          title: "FACEIT ACCOUNT LEVEL 10 (4100 ELO)",
          desc: "228 Matches, Winrate 75%, K/D Ratio 1.4 Behaviour index: positive (1100+), 8253 hours..",
          sold: false,
          text: "SOLD OUT",
        },
        {
          id: 8,
          level: 9,
          color: 'orange',
          title: "FACEIT ACCOUNT LEVEL 9 (1860 ELO)",
          desc: "Includes steam and original e-mail. 35 Matches, Winrate 55%, K/D Ratio 1.3, Behaviour index: positive (1100+), 148 hours..",
          sold: true,
          text: "BUY FOR €37",
        },
      ],
    }
  },
  methods: {
    handleSelect(route) {
      console.log(route)
      // return this.$router.push({ name: route });
    },
    toTab(data) {
      console.log(data)
    },
    checkSelect() {
      console.log(this.defaultSelected)
    },
    setSelectToDefault() {
      this.defaultSelected = 1;
    }
    // changeIndex(index) {
    //   this.currentIndex = index;
    // },
    // setShow(key) {
    //   this.comments[key].show = !this.comments[key].show;
    // }
  }
};
</script>
