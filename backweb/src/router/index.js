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
    {path:'/',redirect:'/index/param'},
    {
      path: '/index',
      name: '首页',
      isShow:  true,
      roleDescribe:'初始化页面',
      component: Container,
      meta:{
        requireLogin: true,
      },
      redirect:'/index/param',
      children: [
        // {path: '/edit', name: '标准编辑页', component: StandardEdit,},
        {path:'/index/role', name: '角色管理', component: RoleManage,isShow:true,roleDescribe:'管理系统角色信息',},
        {path:'/index/user', name: '用户管理', component: UserManage,isShow:true,roleDescribe:'管理系统包含用户'},
        {path:'/index/menu', name: '菜单管理', component: MenuManage,isShow:true,roleDescribe:'管理菜单名及启用情况'},
        {path:'/index/dictionary', name: '字典管理', component: DicManage,isShow:true,roleDescribe:'管理系统包含数据字典'},
        {path:'/index/param', name:'班课管理',component:ParamManage,isShow:true,roleDescribe:'管理班课相关信息'},
        {path:'/index/organize', name:'组织管理',component:OrgManage,isShow:true,roleDescribe:'管理组织相关内容'},
        //{path:'/test',name:'测试页面',component:testPage,isShow:true,},
      ]
    },
    // {
    //   path:'/test',
    //   name:'测试页面',
    //   component:testPage,
    //   roleDescribe:'测试用，不对用户展示',
    //   isShow:true,
    // },
    // {
    //   path: '/edit',
    //   name: '标准编辑页',
    //   component: StandardEdit,
    //   roleDescribe:'user',
    //   isShow:true,
    // },
    {
      path: "/login",
      name: '登入页面',
      component: Login,
      roleDescribe:'供用户登入',
      isShow:true,
    },
    // {
    //   path: "/Login",
    //   name: '登入页面',
    //   component: Login,
    //   meta:{
    //     isShow: true,
    //   }
    // },
    {
      path: '/forgetPassword',
      name: '忘记密码',
      component: ForgetPassword,
      roleDescribe:'供用户修改密码',
      isShow:true,
    },
    {
      path: '/error',
      name: '异常页面',
      component: AbnormalView,
      roleDescribe:'为用户提供友好异常',
      isShow:true,
    },
  ],


})
