import Vue from 'vue'
import { firestorePlugin } from 'vuefire'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(firestorePlugin)

import Comments from 'src/domains/Comment/components/Comments.vue'
import Comment from 'src/domains/Comment/components/Comment.vue'

Vue.component('Comments', Comments)
Vue.component('Comment', Comment)

new Vue({
  router,
  render: h => h(App),
  // components: {
    // Comments,
    // Comment,
  // }
}).$mount('#app')
