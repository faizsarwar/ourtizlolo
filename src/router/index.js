import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/Home.vue'
import store from '../store'

// faqs
// blogs


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
      path: '/advisor-form',
      name: 'advisor-form',
      component: () => import(/* webpackChunkName: "about" */ '../views/advisor-form.vue')
    },
    {
      path: '/investor-form',
      name: 'investor-form',
      component: () => import(/* webpackChunkName: "about" */ '../views/investor-form.vue')
    },
    {
      path: '/investor-landing',
      name: 'investor-landing',
      component: () => import(/* webpackChunkName: "about" */ '../views/investor-landing.vue')
    },
    {
      path: '/insight',
      name: 'lo',
      component: () => import(/* webpackChunkName: "about" */ '../views/blogs.vue')
    },
    {
      path: '/Blogs/:blogId',
      name: 'blog-',
      component: () => import('../views/blog.vue')
    },
    {
      path: '/account-settings/account',
      name: 'account-settings',
      component: () => import(/* webpackChunkName: "about" */ '../views/account-settings.vue')
    },
    {
      path: '/account-settings/clients',
      name: 'account-clients',
      component: () => import(/* webpackChunkName: "about" */ '../views/account-clients.vue')
    },
    {
      path: '/account-settings/documents',
      name: 'account-document',
      component: () => import(/* webpackChunkName: "about" */ '../views/account-document.vue')
    },
    {
      path: '/account-settings/support',
      name: 'account-support',
      component: () => import(/* webpackChunkName: "about" */ '../views/account-settings.vue')
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue')
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
    // account-information, not-accredited
    {
      path: '/accreditation-status',
      name: 'accreditation-status',
      component: () => import(/* webpackChunkName: "about" */ '../views/accreditation-status.vue')
    },
    {
      path: '/account-information',
      name: 'account-information',
      component: () => import(/* webpackChunkName: "about" */ '../views/account-information.vue')
    },
    {
      path: '/not-accredited',
      name: 'not-accredited',
      component: () => import(/* webpackChunkName: "about" */ '../views/not-accredited.vue')
    },
    {
      path: '/advisor-account-info',
      name: 'advisor-account-info',
      component: () => import(/* webpackChunkName: "about" */ '../views/advisor-account-info.vue')
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

