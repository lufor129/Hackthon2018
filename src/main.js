// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from "axios"
import VueAxios from "vue-axios"
import "bootstrap"
import * as VueGoogleMaps from 'vue2-google-maps'

import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueAxios,axios)
Vue.use(VueGoogleMaps,{
  load:{
    key:'AIzaSyBsoDUzZYrgIBKvxoE8623vkToMa-1TI4U',
    libraries: "places"
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth){
    var user = firebase.auth().currentUser;
    console.log(user)
    if(user){
      next()
    }else{
      next({
        path:"/login"
      })
    }
  }else{
    next()
  }
})