import Vue from 'vue'

import App from './App.vue'
import router from './router'

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
