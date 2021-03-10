import Vue from 'vue'
import VueRouter from 'vue-router'
import CommentsPage from 'src/domains/Comment/views/CommentsPage.vue'

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
  {
    path: '/admin',
    name: 'AdminDashboard',
    meta: { layout: 'admin' },
    component: () => import(/* webpackChunkName: "admin-dashboard" */ 'src/web/views/Admin/AdminDashboardPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
