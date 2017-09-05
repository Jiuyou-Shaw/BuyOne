import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Category from '@/pages/category/category'
import Cart from '@/pages/cart/cart'
import Login from '@/pages/login/login'
import List from '@/pages/list/list'
import Detail from '@/pages/detail/detail'
import My from '@/pages/my/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home       
    },
    {
      path: '/my',
      name: 'My',
      component: My       
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'Login',
      component : Login
    },
    {
      path:'/list/:id',
      name:'List',
      component: List 
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component: Detail
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
