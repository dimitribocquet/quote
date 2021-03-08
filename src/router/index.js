import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'src/web/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ 'src/web/views/About.vue')
  },
  {
    path: '/comment/:id',
    name: 'CommentShow',
    component: () => import(/* webpackChunkName: "comment-show" */ 'src/domains/Comment/views/CommentShowPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
