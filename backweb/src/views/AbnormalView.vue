<template>
  <div style="width: 100%; height: 100%; text-align: center;">
    <el-tag type="warning"
            style="margin: 100px auto;
            width: 250px;
            text-align: center; font-size: large;"
            class="el-icon-circle-close">{{abnormalMsg}}</el-tag>
  </div>
</template>

<script>
    export default {
        name: "AbnormalView",
      data() {
          return{
            abnormalMsg: ''
          }
      },
      created() {
          this.getRouterData();
      },
      methods: {
          getRouterData() {
            //this.abnormalMsg = this.$route.params.abnormalMsg;
            this.abnormalMsg = '403禁止访问'
          }
      }
    }
</script>

<style scoped>

</style>
