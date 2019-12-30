import Vue from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(faInstagram, faFacebook, faWhatsapp);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCrD3JsZhpy1Vn_-WSh1IHGmqSu69f7RXM",
  authDomain: "csr-web.firebaseapp.com",
  databaseURL: "https://csr-web.firebaseio.com",
  projectId: "csr-web",
  storageBucket: "csr-web.appspot.com",
  messagingSenderId: "301602435301",
  appId: "1:301602435301:web:9b3b7e10b9eaae260b240c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
