<template>
  <div class="main-home">
    <div class="home">
      <div class="order-blur"></div> 
      <div class="order-content">
        <h1 class="slider-title">APPLY FOR JOB</h1>
      </div>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="request-form inputs selects"
        @submit.prevent="onSubmit"
      >
        <div class="main-form__form">
          <v-container fluid class="page-block">
            <v-row class="main-form__form_row">
              <v-col
                ref="fio"
                sm="12"
                lg="3"
                md="3"
                class="subscribe__form_item-input pr-md-4 pb-0"
              >
                <element-input
                  v-model.trim="formData.fio"
                  class="input_validate input_fio"
                  title="Фамилия Имя*"
                  placeholder="Иванов Олег"
                  maxlength="60"
                  required
                  :height="50"
                ></element-input>
              </v-col>
              <v-col
                ref="post"
                sm="12"
                lg="3"
                md="3"
                class="subscribe__form_item-input pl-md-4 pb-0"
              >
                <element-input
                  v-model.trim="formData.post"
                  class="input_validate input_fio"
                  title="Должность*"
                  placeholder="Аналитик"
                  maxlength="200"
                  required
                  :height="50"
                ></element-input>
              </v-col>
            </v-row>
            <v-row class="main-form__form_row">
              <v-col sm="12" lg="6" md="6" class="subscribe__form_item-input">
                <v-textarea
                  v-model="formData.message"
                  class="input_validate"
                  maxlength="2000"
                  :height="150"
                  title="Комментарий"
                  placeholder="Напишите сопроводительное письмо"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <!-- <div class="main-form__actions">
          <v-container fluid class="page-block">
            <div class="main-form__actions_item">
              <div class="main-form__actions_item__checkbox">
                <element-checkbox v-model="formData.news">
                  <template #default>
                    <div class="main-form__actions_item-text">
                      Подписаться на cобытия и новости
                    </div>
                  </template>
                </element-checkbox>
              </div>
            </div>
            <div class="main-form__actions_item">
              <div class="main-form__actions_item__checkbox">
                <element-checkbox
                  v-model="formData.agree"
                  agree
                  :rules="conditionsRule"
                >
                  <template #default>
                    <div class="main-form__actions_item-text">
                      Я даю
                      <a href="/policy" target="_blank" @click.stop>
                        согласие
                      </a>
                      на обработку моих персональных данных и подтверждаю, что<br />
                      ознакомлен с
                      <a
                        href="https://sovcombank.ru/about/pages/policy-personal-data"
                        target="_blank"
                        @click.stop
                      >
                        Политикой
                      </a>
                      обработки персональных данных
                    </div>
                  </template>
                </element-checkbox>
              </div>
            </div>
            <div class="main-form__actions_item">
              <element-button
                size="large"
                class="main-form__actions_item-button button button_primary v-btn--large"
                text="Откликнуться"
                type="submit"
                :disabled="isDisabled"
              />
            </div>
          </v-container>
        </div> -->
      </v-form>
    </div>
  </div>
</template>

<script>
import elementInput from '../../elements/input.vue';

export default {
  name: "job",
  components: {
    elementInput,
  },
  data() {
    return {
      valid: true,
      formData: {
        fio: '',
        post: '',
        birthday: '',
        phone: '',
        email: '',
        citizenship: '',
        resume: [],
        agree: false,
        profiles: '',
        comment: '',
        news: 'unchecked',
        vacancies: 'unchecked',
      },
      index: 0,
      currentIndex: 0,
    }
  },
  methods: {
    // changeIndex(index) {
    //   this.currentIndex = index;
    // },
  }
};
</script>
