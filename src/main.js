import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/styles.scss'
import vuetify from './plugins/vuetify'

import './plugins/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
