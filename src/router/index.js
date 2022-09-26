import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/Home.vue'
import store from '../store'

const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
    },
    {
      path: '/ourtizolo-funds',
      name: 'ourtizolo-funds',
      component: () => import(/* webpackChunkName: "about" */ '../views/cadre-funds.vue')
    },
    {
      path: '/deal-by-deal',
      name: 'deal-by-deal',
      component: () => import(/* webpackChunkName: "about" */ '../views/deal-by-deal.vue')
    },
    {
      path: '/secondary-market',
      name: 'secondary-market',
      component: () => import(/* webpackChunkName: "about" */ '../views/secondary-market.vue')
    },
    {
      path: '/for-advisors',
      name: 'for-advisors',
      component: () => import(/* webpackChunkName: "about" */ '../views/for-advisors.vue')
    },
    {
      path: '/institutions',
      name: 'institutions',
      component: () => import(/* webpackChunkName: "about" */ '../views/institutions.vue')
    },
    {
      path: '/track-record',
      name: 'track-record',
      component: () => import(/* webpackChunkName: "about" */ '../views/track-record.vue')
    },
    {
      path: '/our-company',
      name: 'our-company',
      component: () => import(/* webpackChunkName: "about" */ '../views/our-company.vue')
    },
    {
      path: '/why-ourtizolo',
      name: 'why-ourtizolo',
      component: () => import(/* webpackChunkName: "about" */ '../views/why-cadre.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import(/* webpackChunkName: "about" */ '../views/forgot-password.vue')
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
    },
]  


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'login', query: { to: to.path } });
  } else {
    next()
  }
})

export default router

