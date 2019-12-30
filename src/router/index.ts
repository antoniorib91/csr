import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/portal/csr/admin/auth',
    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/auth/Auth.vue')
  },
  {
    path: '/portal/csr/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Admin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
