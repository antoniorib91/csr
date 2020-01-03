import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(faInstagram, faFacebook, faWhatsapp);

Vue.component('font-awesome-icon', FontAwesomeIcon);