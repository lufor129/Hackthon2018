import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from "@/components/login"
import Dashboard from "@/components/Dashboard"
import todolist from "@/components/pages/todolist"
import hotel from "@/components/pages/hotel"
import food from "@/components/pages/food"
import attraction from "@/components/pages/Attraction"
import advise from "@/components/pages/Advise"
import roate from "@/components/pages/roate"
import map from "@/components/pages/Map"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"",
      redirect:"/login"
    },
    {
      path:"*",
      redirect:"/login"
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta:{requiresAuth:true},
      children:[
        {
          path: 'todolist',
          name: 'todolist',
          component: todolist,
          meta:{requiresAuth:true}
        },
        {
          path: 'hotel',
          name: 'hotel',
          component: hotel,
          meta:{requiresAuth:true},
        },
        {
          path: 'advise',
          name: 'advise',
          component: advise,
          meta:{requiresAuth:true},
        },
        {
          path: 'roate',
          name: 'roate',
          component: roate,
          meta:{requiresAuth:true},
        },
        {
          path: 'food',
          name: 'food',
          component: food,
          meta:{requiresAuth:true},
        },
        {
          path: 'attraction',
          name: 'attraction',
          component: attraction,
          meta:{requiresAuth:true},
        },
        {
          path: 'map',
          name: 'map',
          component: map,
          meta:{requiresAuth:true},
        },
      ]
    }
  ]
})
