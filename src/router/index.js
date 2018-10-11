import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/user/Login'
import About from '@/pages/common/About'
import NotFound from '@/pages/common/NotFound'

import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Chat from '@/pages/chat/Chat'
import Detail from '@/pages/detail/Detail'

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/about',
    name: 'About',
    component: About
  },{
    path: '/city',
    name: 'City',
    component: City
  },{
    path: '/chat',
    name: 'Chat',
    component: Chat
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },{
    path: '*',
    name: 'NotFound',
    component: NotFound
  }]
});
