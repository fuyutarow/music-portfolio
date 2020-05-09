// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
// import InstagramEmbed from 'vue-instagram-embed'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@/assets/scss/style.scss'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/auth'

/* Fontawesomeのインストールここから */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
/* Fontawesomeのインストールここまで */
// Vue.component(InstagramEmbed)

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueYouTubeEmbed)

const firebaseConfig = {
  apiKey: 'AIzaSyAnU04He62KPgpw2dprE-qzrOwwaMb2E1A',
  authDomain: 'music-portfolio-a9bd8.firebaseapp.com',
  databaseURL: 'https://music-portfolio-a9bd8.firebaseio.com',
  projectId: 'music-portfolio-a9bd8',
  storageBucket: 'music-portfolio-a9bd8.appspot.com',
  messagingSenderId: '560627509501',
  appId: '1:560627509501:web:792c6376a80cac95a4f694'
}
firebase.initializeApp(firebaseConfig)

export default firebase

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
