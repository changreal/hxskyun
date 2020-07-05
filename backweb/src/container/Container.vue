<template>
  <div class="app">
    <el-container>
      <el-aside class="app-side app-side-left"
                :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'">
        <div class="app-side-logo">
          <img src="@/assets/logo.png"
               :width="isCollapse ? '60' : '60'"
               height="60" />
        </div>
        <div>

          <el-menu default-active="defaultActive"
                   router
                   class="el-menu-vertical-demo"
                   active-text-color="#409EFF"
                   :collapse="isCollapse">
            <template v-for="route in showMenu">
                <el-menu-item v-show="route.isShow"
                  :key= "route.path"
                  :index= "route.path">
                  <i class="el-menu-item"></i>
                  <span slot="title">{{route.name}}</span>
                </el-menu-item>
            </template>
          </el-menu>
        </div>
      </el-aside>

      <el-container>
        <el-header class="app-header"
                   style="margin-left: auto">
          <div class="app-header-userinfo">
            <el-dropdown trigger="hover"
                         :hide-on-click="false">
              <span class="el-dropdown-link">
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided
                                  @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <el-menu default-active="/"
                   router
                   class="el-menu-demo tab-page"
                   mode="horizontal"
                   @select="handleSelect"
                   active-text-color="#409EFF">
            <el-menu-item index="/">{{$_router.currentRoute.name}}</el-menu-item>
          </el-menu>
        </el-header>
        <div style="width: 60px; cursor: pointer;"
             @click.prevent="toggleSideBar">
          <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
          <i v-show="isCollapse" class="el-icon-d-arrow-right"></i>
        </div>
        <el-main class="app-body">
          <template>
            <router-view/>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import StandardEdit from "../components/StandardEdit";
  export default {
    name: 'Container',
    data() {
      return {
        username: '',
        isCollapse: false,
        userRole:'',
        routeInf:[],
        menuAuth:[{
            name:'角色管理',
            id:1,
            isShow:true,
            path: '/index/role',
          },{
            name:'用户管理',
            id:2,
            isShow:true,
            path: '/index/user',
          },{
            name:'菜单管理',
            id:3,
            isShow:true,
            path: '/index/menu',
          },{
            name:'字典管理',
            id:4,
            isShow:true,
            path: '/index/dictionary',
          },{
            name:'班课管理',
            id:5,
            isShow:true,
            path: '/index/param',
          },
            {
            name:'组织管理',
            id:6,
            isShow:true,
            path: '/index/organize',
          }
      ],
        showMenu:[],
      }
    },
    components: {
      // StandardEdit
    },
    methods: {
      toggleSideBar() {
        this.isCollapse = !this.isCollapse
      },
      logout: function () {
        this.$confirm('确认退出?', '提示', {})
          .then(() => {
           localStorage.removeItem('user');
           localStorage.removeItem('token');
           localStorage.removeItem('tokenTimeoutData');
            this.$router.push('/login');
          })
          .catch(() => { });
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      updateRouteStatus(){
        this.routeInf.sort((a,b)=>a.permissionId-b.permissionId);
        for(let i=0;i<this.routeInf.length;i++){
            if(this.routeInf[i].useStatus==1){
              this.menuAuth[i].isShow=true;
            }else if(this.routeInf[i].useStatus==0){
              this.menuAuth[i].isShow=false;
            }
            this.menuAuth[i].name=this.routeInf[i].permissionName;
          }
        let routeAuth;
        this.$api.roleManage.getRoleById(this.userRole)
        .then(response=>{
          // console.log(response);
          routeAuth=response.data.data.rightList;
          for(let i=0;i<routeAuth.length;i++){
                this.showMenu.push(this.menuAuth[routeAuth[i]-1]);
          }
        // let user = localStorage.getItem('user');
        // if (user) {
        //   this.username = user;
        // }
        })
      },
    },
    created() {
      this.userRole=localStorage.getItem('role');
      let routeAuth;
      for(let i=0;i<this.menuAuth.length;i++){
        this.$api.menuManage.selectMenuAuth(i+1)
        .then(response=>{
          this.routeInf.push(response.data.data);
        })
      }
      setTimeout(this.updateRouteStatus,300);
      // for(let i=0;i<this.routeInf.length;i++){
      //   if(this.routeInf[i].useStatus==1){
      //     this.menuAuth[i].isShow=true;
      //   }else if(this.routeInf[i].useStatus==0){
      //     this.menuAuth[i].isShow=false;
      //   }
      //   this.menuAuth[i].name=this.routeInf[i].permissionName;
      // }
      // this.$api.roleManage.getRoleById(userRole)
      // .then(response=>{
      //   // console.log(response);
      //   routeAuth=response.data.data.rightList;
      //   console.log(routeAuth);
      //   for(let i=0;i<routeAuth.length;i++){
      //         this.showMenu.push(this.menuAuth[routeAuth[i]-1]);
      //   }
        let user = localStorage.getItem('user');
        if (user) {
          this.username = user;
        }
      // })

      // let jsonRoute=JSON.parse(localStorage.getItem('routeInf'));
      // let j=0;
      // for(let index in jsonRoute){
      //   this.routeInf[j]=jsonRoute[index];
      //   j++;
      // }

    },

    mounted: function () {

    },
  }
</script>

<style>
</style>
