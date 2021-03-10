import Vue from 'vue'

import App from './App.vue'
import router from './router'
Vue.router = router

import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
Vue.use(VueAxios, axios)

import vClickOutside from 'v-click-outside'
Vue.use(vClickOutside)

import './assets/styles/index.css';

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBold, faItalic, faStrikethrough, faUnderline, faCode, faParagraph, faListUl, faListOl, faQuoteLeft, faUndoAlt, faRedoAlt, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBold, faItalic, faStrikethrough, faUnderline, faCode, faParagraph, faListUl, faListOl, faQuoteLeft, faUndoAlt, faRedoAlt, faChevronLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import auth from '@websanova/vue-auth/dist/v2/vue-auth.esm.js';
import driverAuthBearer from '@websanova/vue-auth/dist/drivers/auth/bearer.esm.js';
import driverHttpAxios from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm.js';
import driverRouterVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js';
Vue.use(auth, {
  plugins: {
    http: Vue.axios,
    router: Vue.router,
  },
  drivers: {
    auth: driverAuthBearer,
    http: driverHttpAxios,
    router: driverRouterVueRouter,
  },
  options: {
    rolesKey: 'type',
    notFoundRedirect: { name: 'user-account' },
    parseUserData: function (data) {
      return data;
    },
    registerData: {
      autoLogin: true
    }
  }
});

import Loading from 'src/web/components/Loading'
Vue.component('Loading', Loading)
import Comments from 'src/domains/Comment/components/Comments.vue'
import Comment from 'src/domains/Comment/components/Comment.vue'
Vue.component('Comments', Comments)
Vue.component('Comment', Comment)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')