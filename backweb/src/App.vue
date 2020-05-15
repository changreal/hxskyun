<template>
<router-view/>
</template>

<script>
export default {
  name: 'App',
  created() {
     //localStorage.setItem('routeInf',JSON.stringify(this.$_router.options.routes))
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
