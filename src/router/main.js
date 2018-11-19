import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/web/HomePage'
import Profile from '../pages/web/Profile'

Vue.use(Router);
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/profile',
    name: 'Profile',
    component: Profile
  }]
});
