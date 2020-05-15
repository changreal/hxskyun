<template>
  <div>
    <el-button type="primary" @click="testClick1()">测试按钮1</el-button>
    <el-button type="success" @click="testClick2()">测试按钮2</el-button>
    <el-button type="warning" @click="testClick3()">测试按钮3</el-button>
    <el-button type="edit" @click="testClick4()">测试按钮4</el-button>
<!--    <el-table :data="routeInf" style="width: 100%;margin-bottom: 20px;" row-key="id"-->
<!--              border default-expand-all :tree-props="{children:'children',hasChildren:'hasChildren'}">-->
<!--      <el-table-column prop="name" label="菜单标题" sortable width="180"></el-table-column>-->
<!--      <el-table-column prop="path" label="路由地址" sortable width="180"></el-table-column>-->
<!--      <el-table-column label="是否启用" sortable>-->
<!--        <template>-->
<!--          &lt;!&ndash;          <el-switch v-model="" active-color="#13ce66" inactive-color="#ff4949">&ndash;&gt;-->
<!--          &lt;!&ndash;          </el-switch>&ndash;&gt;-->
<!--        </template>-->

<!--      </el-table-column>-->
<!--    </el-table>-->
    <span>123</span>
  </div>

</template>

<script>
import axios from 'axios';
import Container from "../container/Container";
import RoleManage from "./rolemanage/RoleManage";
import UserManage from "./usermanage/UserManage";
import MenuManage from "./menumanage/MenuManage";
import DicManage from "./dicmanage/DicManage";
import ParamManage from "./parammanage/ParamManage";
import OrgManage from "./organizemanage/Orgmanage";
import StandardEdit from "../components/StandardEdit";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import AbnormalView from "./AbnormalView";

    export default {
      name: "test",
      re:[],
      data() {

        return {
          routeInf:{},
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          tableData1: [{
            id: 1,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: 2,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            id: 3,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            children: [{
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }]
          }, {
            id: 4,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          routes: [
            {
              id:1,
              path: '/index',
              name: '首页',
              //component: Container,
              meta:{
                requireLogin: true,
                isShow:true,
              },
              children: [
                // {path: '/edit', name: '标准编辑页', component: StandardEdit,},
                {
                  id:11,
                  path:'/role',
                  name: '角色管理',

                  //component: RoleManage
                },
                {
                  id:12,
                  path:'/user', name: '用户管理',
                  //component: UserManage
                },
                {
                  id:13,
                  path:'/menu', name: '菜单管理',
                  //component: MenuManage
                },
              ]
            },
            {
              id:2,
              path:'/test',
              name:'测试页面',
              //component:testPage,
              meta:{
                isShow: true,
              }
            },
            {
              id:3,
              path: '/edit',
              name: '标准编辑页',
              //component: StandardEdit,
              meta:{
                isShow: false,
              }
            },
            {
              id:4,
              path: "/",
              name: '登入页面',
              //component: Login,
              meta:{
                isShow: true,
              }
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
              id:5,
              path: '/forgetPassword',
              name: '忘记密码',
              //component: ForgetPassword,
              meta:{
                isShow: true,
              }
            },
            {
              id:6,
              path: '/error',
              name: '异常页面',
              //component: AbnormalView,
              meta:{
                isShow: true,
              }
            }],
        }
      },
      methods: {
        handleEdit(index, row) {
          console.log(index.id)
        },
        handleDelete(index, row) {
          console.log(index, row);
        },
        testClick1() {
          let response=[];
          this.$api.post('',
            {
              bs:'vue axios配置',
            },
            response=>{
            if (response.status >= 200 && response.status < 300) {
              console.log(response.data);
            } else {
              console.log(response.message);
            }
          })
        },
        testClick2(){
          axios.post('http://175.24.16.48:8082/dictionary/type', {
            type:'测试角色',
            itemKey:'testwyc1'
          }).then((response) => {
            console.log(response)
          }).catch((error) => {
            console.log(error)
          })
        },
        testClick3(){
          let jsonRoute=JSON.parse(localStorage.getItem('routeInf'));
          console.log(jsonRoute[1].meta.isShow);
          this.routeInf=[];
          let j=0;
          for(let index in jsonRoute){
            this.routeInf[j]=jsonRoute[index];
            j++;
          }
          let route;
          console.log(this.routeInf[1].meta.isShow)
          // for(route in this.routeInf){
          //   this.routeInf[route].id=Number(route)+Number(1);
          //   if(this.routeInf[route].children&&this.routeInf[route].children.length){
          //     for(let item in this.routeInf[route].children){
          //       this.routeInf[route].children[item].id=(Number(route)+1)*10+Number(item)+1;
          //     }
          //   }
          // }
        },
        testClick4(){
          console.log(this.tableData1);
        },
      },
    created() {
      // let jsonRoute=JSON.parse(localStorage.getItem('routeInf'));
      // this.routeInf=[];
      // let j=0;
      // console.log(jsonRoute);
      // for(let index in jsonRoute){
      //   this.routeInf[j]=jsonRoute[index];
      //   j++;
      // }
      //
      //
      // // console.log(routeInf[0]);
      // // console.log(routeInf[0].children);
      // // console.log(routeInf[0].children.length)
      // let t={};
      // let tt={};
      // let route;
      //
      // for(route in this.routeInf){
      //   t={'id':route};
      //   this.routeInf[route].id=route+1;
      //   if(this.routeInf[route].children&&this.routeInf[route].children.length){
      //     for(let item in this.routeInf[route].children){
      //       this.routeInf[route].children[item].id=(route+1)*10+item+1;
      //       console.log(this.routeInf[route].children[item]);
      //     }
      //   }
      // }
    }

    }
</script>

<style scoped>

</style>
