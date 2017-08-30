import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    }
  ]
})
