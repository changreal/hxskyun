// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import axois from 'axios'
import '@/styles/index.scss'
import Api from './api'

Vue.prototype.$http=axois;
Vue.prototype.$api=Api;

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$_router=router;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),
})
  router.beforeEach((to, from, next)=>{
    if (to.matched.some(record => record.meta.requireLogin)){  // 判断该路由是否需要登录权限
      if (localStorage.getItem('token')&&localStorage.getItem('token')!='false') {
        // 判断当前用户的登录信息loginInfo是否存在
        next();
      } else {
        if(to.path == '/login'){
          next();
        } else {
          next({
            path:'/login'
          })
        }
      }
    }  else {
      next();
    }
    // if(to.fullPath=='/login'){
    //   if(localStorage.getItem(token)){
    //     next({
    //       path:from.fullPath
    //     })
    //   } else {}
    //   next();
    // }
  })
