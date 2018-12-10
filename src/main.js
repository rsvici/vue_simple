import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(vueResource)

import Home from "./components/Home.vue";
import Life from "./components/Life.vue";
import Content from "./components/Content.vue";

const routes=[
  {
    path:'/home',
    component:Home
  },{
    path:'/life',
    component:Life
  },{
    path:'/content/:aid',
    component:Content
  },{
    path:'*',
    redirect:'/home'
  }
]

const router=new VueRouter({
  routes
})

new Vue({
  el: '#app',router,
  render: h => h(App)
})
