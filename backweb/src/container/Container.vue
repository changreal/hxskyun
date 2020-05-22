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
          <!-- 我是样例菜单 -->
          <el-menu default-active="defaultActive"
                   router
                   class="el-menu-vertical-demo"
                   active-text-color="#409EFF"
                   :collapse="isCollapse">
            <template v-for="route in routeInf" v-if="route.children && route.children.length">
              <template v-for="item in route.children">
                <el-menu-item  v-show="item.isShow"
                  :key= "route.path + '/' +item.path"
                  :index= "item.path">
                  <i class="el-menu-item"></i>
                  <span slot="title">{{item.name}}</span>
                </el-menu-item>
              </template>
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
        username: 'Teacher',
        isCollapse: false,
        routeInf:[],
      }
    },
    components: {
      StandardEdit
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
    },
    created() {
      let jsonRoute=JSON.parse(localStorage.getItem('routeInf'));
      let j=0;
      for(let index in jsonRoute){
        this.routeInf[j]=jsonRoute[index];
        j++;
      }
    },

    mounted: function () {
      let user = localStorage.getItem('user');
      if (user) {
        this.username = user;
      }
    },
  }
</script>

<style>
</style>
