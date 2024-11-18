import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Search from '@/views/search'
import SearchList from '@/views/search/list'
import ProDetail from '@/views/prodetail'
import Pay from '@/views/pay'
import MyOrder from '@/views/myorder'
import NotFound from '@/views/notfound'

import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import User from '@/views/layout/user'
import Cart from '@/views/layout/cart'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/home', component: Home },
      { path: '/category', component: Category },
      { path: '/user', component: User },
      { path: '/cart', component: Cart }
    ],
    redirect: '/home'
  },
  { path: '/search', component: Search },
  { path: '/searchlist', component: SearchList },
  { path: '/prodetail/:id', component: ProDetail },
  { path: '/pay', component: Pay },
  { path: '/myorder', component: MyOrder },
  { path: '/notfound', component: NotFound },
  { path: '*', redirect: '/notfound' }
]

const router = new VueRouter({
  routes
})

export default router
