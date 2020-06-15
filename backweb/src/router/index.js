import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Container from "../container/Container";
import StandardEdit from "../components/StandardEdit";
import Login from "../views/Login"
import ForgetPassword from "../views/ForgetPassword";
import AbnormalView from "../views/AbnormalView";
import RoleManage from "../views/rolemanage/RoleManage";
import UserManage from "../views/usermanage/UserManage";
import MenuManage from "../views/menumanage/MenuManage";
import DicManage from "../views/dicmanage/DicManage";
import testPage from "../views/test";
import ParamManage from "../views/parammanage/ParamManage";
import OrgManage from "../views/organizemanage/Orgmanage";
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/index'},
    {
      path: '/index',
      name: '首页',
      isShow:  true,
      permission:'teacher',
      component: Container,
      meta:{
        requireLogin: true,
      },
      children: [
        // {path: '/edit', name: '标准编辑页', component: StandardEdit,},
        {path:'/index/role', name: '角色管理', component: RoleManage,isShow:true,permission:'admin',},
        {path:'/index/user', name: '用户管理', component: UserManage,isShow:true,permission:'admin'},
        {path:'/index/menu', name: '菜单管理', component: MenuManage,isShow:true,permission:'admin'},
        {path:'/index/dictionary', name: '字典管理', component: DicManage,isShow:true,permission:'admin'},
        {path:'/index/param', name:'参数管理',component:ParamManage,isShow:true,permission:'teacher'},
        {path:'/index/organize', name:'组织管理',component:OrgManage,isShow:true,permission:'teacher'},
        //{path:'/test',name:'测试页面',component:testPage,isShow:true,},
      ]
    },
    // {
    //   path:'/test',
    //   name:'测试页面',
    //   component:testPage,
    //   permission:'user',
    //   isShow:true,
    // },
    // {
    //   path: '/edit',
    //   name: '标准编辑页',
    //   component: StandardEdit,
    //   permission:'user',
    //   isShow:true,
    // },
    // {
    //   path: "/login",
    //   name: '登入页面',
    //   component: Login,
    //   permission:'user',
    //   isShow:true,
    // },
    // // {
    // //   path: "/Login",
    // //   name: '登入页面',
    // //   component: Login,
    // //   meta:{
    // //     isShow: true,
    // //   }
    // // },
    // {
    //   path: '/forgetPassword',
    //   name: '忘记密码',
    //   component: ForgetPassword,
    //   permission:'user',
    //   isShow:true,
    // },
    {
      path: '/error',
      name: '异常页面',
      component: AbnormalView,
      permission:'teacher',
      isShow:true,
    },
  ],


})
