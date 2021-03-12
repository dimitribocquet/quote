import Vue from 'vue'
import VueRouter from 'vue-router'
import CommentsPage from 'src/domains/Comment/views/CommentsPage.vue'

import adminRoutes from './admin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CommentsPage',
    component: CommentsPage
  },
  {
    path: '/comment/:id',
    name: 'CommentShow',
    component: () => import(/* webpackChunkName: "comment-show" */ 'src/domains/Comment/views/CommentShowPage.vue')
  },
  ...adminRoutes,
  {
    path: '*',
    redirect: { name: 'CommentsPage' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
