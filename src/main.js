import Vue from 'vue'

import App from './App.vue'
import router from './router'

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

import Comments from 'src/domains/Comment/components/Comments.vue'
import Comment from 'src/domains/Comment/components/Comment.vue'
Vue.component('Comments', Comments)
Vue.component('Comment', Comment)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
