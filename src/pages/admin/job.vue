<template>
  <div class="main-contacts">
    <img alt="Главная" :src="require('@/assets/bg_image1.png')" />
    <div class="main-home">
      <div class="home">
        <div class="order-blur"></div>
        <div class="blue-blur"></div> 
        <div class="order-content">
          <h1 class="slider-title">APPLY FOR JOB</h1>
        </div>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="pt-8 main-form"
          @submit.prevent="onSubmit"
        >
          <v-row>
            <v-col
              cols="12"
              sm="6"
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
              sm="6"
            >
              <div class="job-title">
                <div class="award-title">HOW CAN WE CONTACT YOU?</div>
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
              sm="6"
            >
              <div class="job-title">
                <div class="award-title">FACEIT PROFILE LINK</div>
              </div>
              <v-text-field
                v-model="formData.faceit"
                outlined
                :rules="nameRules"
                placeholder="https://www.faceit.com/en/players/slightlyboss"
                color="#fff"
                :append-icon="formData.faceit.length ? '' : 'mdi-asterisk'"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <div class="job-title">
                <div class="award-title">STEAM PROFILE LINK</div>
              </div>
              <v-text-field
                v-model="formData.steam"
                outlined
                :rules="nameRules"
                placeholder="https://steamcommunity.com/id/slightlyboss"
                color="#fff"
                :append-icon="formData.steam.length ? '' : 'mdi-asterisk'"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
            >
              <div class="job-title">
                <div class="award-title pr-2">HOW MUCH TIME CAN U DEVOTE TO THE GAME?</div>
                <element-tooltip 
                  :text="tooltipFirst"
                />
              </div>
              <v-text-field
                v-model="formData.workTime"
                outlined
                :rules="nameRules"
                placeholder="Your work time in hours"
                color="#fff"
                :append-icon="formData.workTime.length ? '' : 'mdi-asterisk'"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
            >
              <div class="job-title">
                <div class="award-title pr-2">TELL US ABOUT YOURSELF</div>
                <element-tooltip 
                  :text="tooltipSecond"
                />
              </div>
              <v-textarea
                v-model="formData.aboutYou"
                outlined
                :rules="nameRules"
                placeholder="Country, experience, any other information about you.."
                color="#fff"
                auto-grow
                :append-icon="formData.aboutYou.length ? '' : 'mdi-asterisk'"
              ></v-textarea>
            </v-col>
            <v-col
              cols="12"
              class="d-flex"
            >
              <v-btn
                rounded
                x-large
                class="main-btn"
                dark
                type="submit"
              >
                <span class="main-btn-text justify-center">
                  SUBMIT
                </span>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </div>
    <v-dialog v-model="popupJobShow" :overlay-opacity="0.8">
      <popup-job
        :key="formKeyJob"
        @close="closeJob()"
      />
    </v-dialog>
  </div>
</template>

<script>
import ElementTooltip from '../../elements/tooltip.vue';
import popupJob from '../../overlays/popup-job.vue';
import axios from "axios";

export default {
  name: "job",
  components: {
    ElementTooltip,
    popupJob,
  },
  data() {
    return {
      popupJobShow: false,
      formKeyJob: 1,
      valid: true,
      peerId1: 5634750271,
      peerId2: 825901593,
      message: 'test',
      tooltipFirst: 'Tell how much hours you<br/> can spend in the game<br/> (ex. 4,6,8,12 or more...)',
      tooltipSecond: 'Any other information<br/> about you, experience in<br/> CS:GO, country etc...',
      formData: {
        name: '',
        contact: '',
        faceit: '',
        steam: '',
        workTime: '',
        aboutYou: '',
        typeOfOrder: 'job',
      },
      nameRules: [
        v => v.length >= 1 || 'This field required!'
      ],
      index: 0,
      currentIndex: 0,
    }
  },
  methods: {
    showPopupJob () {
      this.popupJobShow = true;
    },
    closePopupJob () {
      this.popupJobShow = false;
    },
    async onSubmit() {
      
      if (this.$refs.form.validate()) {
        try {
          console.log('valid')
          await axios.post('https://sheet.best/api/sheets/3e3aed18-8465-4bdd-8ad2-8df2b0a21059', [this.formData]).then(response => {
            console.log(response);
            this.formData = {
              name: '',
              contact: '',
              faceit: '',
              steam: '',
              workTime: '',
              aboutYou: '',
              typeOfOrder: 'job',
            }
          })
          await this.showPopupJob();
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
};
</script>