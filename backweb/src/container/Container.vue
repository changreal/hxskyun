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
          <el-menu default-active="1-4-1"
                   class="el-menu-vertical-demo"
                   @open="handleOpen"
                   :collapse="isCollapse">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">个人中心</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">个人信息</el-menu-item>
                <el-menu-item index="1-2">安全设置</el-menu-item>
                <el-menu-item index="1-3">消息通知</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">菜单管理</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-box"></i>
              <span slot="title">按钮管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-user"></i>
              <span slot="title">角色管理</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-school"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>

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

        </el-header>
        <div style="width: 60px; cursor: pointer;"
             @click.prevent="toggleSideBar">
          <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
          <i v-show="isCollapse" class="el-icon-d-arrow-right"></i>
        </div>
        <el-main class="app-body">
          <template>
            <StandardEdit>{{title}}</StandardEdit>
            <router-view/>
          </template>
        </el-main>

      </el-container>
    </el-container>
    <
  </div>
</template>

<script>
  import StandardEdit from "../components/StandardEdit";
  export default {
    name: 'Container',
    data() {
      return {
        username: 'Teacher',
        isCollapse: false
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
            sessionStorage.removeItem('user');
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
    mounted: function () {
      let user = sessionStorage.getItem('user');
      if (user) {
        this.username = user;
      }
    },
  }
</script>

<style>
</style>
