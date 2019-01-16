import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Home from '@/components/HomePage/Home'
import BlogPage from '@/components/BlogPage/BlogPage'
import Gallery from '@/components/GalleryPage/Gallery'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog/:blogId',
      name: 'BlogPage',
      component: BlogPage
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery
    }
  ]
})
