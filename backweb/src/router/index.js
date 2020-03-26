import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Container from "../container/Container";
import StandardEdit from "../components/StandardEdit";
import Login from "../views/Login"
import ForgetPassword from "../views/ForgetPassword";
import AbnormalView from "../views/AbnormalView";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/Login",
      name: "Login",
      component: Login,
    },
    {
      path: "/index",
      name: 'Container',
      component: Container,
      meta:{
        requireLogin: true
      },
      Children: [
        {path: '/', name: '标准编辑页', component: StandardEdit,}
      ]
    },
    {
      path: '/forgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword,
    },
    {
      path: '/error',
      name: 'AbnormalView',
      component: AbnormalView,
    }
  ]
})
