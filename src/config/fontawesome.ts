import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faFacebook, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';

library.add(faInstagram, faFacebook, faWhatsapp, faGoogle, faFileUpload);

Vue.component('font-awesome-icon', FontAwesomeIcon);