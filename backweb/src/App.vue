<template>
<router-view/>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log(this.$_router.options.routes);
    // JSON.stringify((this.$_router.options.routes));
    // let routeInf=[];
    // console.log(JSON.stringify(this.$_router.options.routes[1]));
    // routeInf.push(JSON.stringify({
    //   path:this.$_router.options.routes[1].path,
    //   name:this.$_router.options.routes[1].name,
    //   isShow:this.$_router.options.routes[1].isShow,
    //   meta:this.$_router.options.routes[1].meta,
    //   children:this.$_router.options.routes[1].children,
    // }));
    // console.log(routeInf);
    // localStorage.setItem('routeInf',JSON.stringify(routeInf[0]));
    if(!localStorage.getItem('routeInf')){
      this.$_router.options.routes.splice(0,1);
      localStorage.setItem('routeInf',JSON.stringify(this.$_router.options.routes))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
