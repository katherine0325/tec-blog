import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home.vue')
    },
    {
      path: '/article',
      name: 'Article',
      component: () => import('@/pages/article/Article.vue')
    }
  ]
})
