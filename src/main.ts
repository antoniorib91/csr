import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/config/imports';
import '@/config/firebase';
import '@/config/fontawesome';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
