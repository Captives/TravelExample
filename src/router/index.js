import Vue from 'vue'
import Router from 'vue-router'
import About from '@/pages/common/About'
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
  },{
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }]
});
