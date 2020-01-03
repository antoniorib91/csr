import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/config/firebase'
import '@/config/fontawesome';
import '@/config/styles';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
