import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Firebase } from './utils/firebase';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import 'vue-material/dist/vue-material.min.css'

Firebase.init();

library.add(faInstagram, faFacebook, faWhatsapp);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
