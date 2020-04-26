import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Container from "../container/Container";
import StandardEdit from "../components/StandardEdit";
import Login from "../views/Login"
import ForgetPassword from "../views/ForgetPassword";
import AbnormalView from "../views/AbnormalView";
import RoleManage from "../views/rolemanage";
import UserManage from "../views/usermanage";
import MenuManage from "../views/menumanage";
import DicManage from "../views/dicmanage/DicManage";
import testPage from "../views/test";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: '首页',
      component: Container,
      meta:{
        requireLogin: true
      },
      children: [
        {path: '/edit', name: '标准编辑页', component: StandardEdit,},
        {path:'/role', name: '角色管理', component: RoleManage},
        {path:'/user', name: '用户管理', component: UserManage},
        {path:'/menu', name: '菜单管理', component: MenuManage},
        {path:'/dictionary', name: '字典管理', component: DicManage}
      ]
    },
    {
      path: "/",
      name: 'Login',
      component: Login,
    },
    {
      path: "/Login",
      name: 'Login',
      component: Login,
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
    },
    {
      path: '/test',
      name: 'testPage',
      component: testPage,
    }
  ]
})
