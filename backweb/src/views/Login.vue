<template>
  <div class="login-container">
    <el-form :model="ruleForm2" :rules="rules2"
             status-icon
             ref="ruleForm2"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-page">
      <h3 class="title">好想上课云系统</h3>
      <el-form-item prop="username">
        <el-input type="text"
                  v-model="ruleForm2.username"
                  auto-complete="off"
                  placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"
                  v-model="ruleForm2.password"
                  auto-complete="off"
                  placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-checkbox
        v-model="checked"
        class="rememberuser"
      >记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
      </el-form-item>
<!--      <el-form-item style="width:100%;">-->
<!--        <el-button type="primary" style="width:100%;" @click="handleSubmitTest" :loading="logining">测试登录</el-button>-->
<!--      </el-form-item>-->
      <el-form-item style="width:100%;">
        <el-button style="width:100%;" @click="forgetPassword" :loading="logining">忘记密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        logining: false,
        ruleForm2: {
          username: '88888888888',
          password: '123456',
        },
        rules2: {
          username: [{required: true, message: '请输入您的账号', trigger: 'blur'}],
          password: [{required: true, message: '请输入您的密码', trigger: 'blur'}]
        },
        checked: false,
        userRole:'admin',
        defaultPassword:'',
      }
    },
    methods: {
      handleSubmit(event){
        let userRole=this.userRole;
        let nowDate=new Date();
        let timeOutData=new Date();
        timeOutData.setDate(timeOutData.getDate()+31);
        let m=timeOutData.getMonth()+1;
        console.log(this.ruleForm2.username,this.ruleForm2.password);
        this.$refs.ruleForm2.validate((valid) => {
          if(valid){
            this.logining = true;
            this.$api.login(this.ruleForm2.username,this.ruleForm2.password)
              .then(response=>{
                console.log(response);
                localStorage.setItem('token',response.data.data);
                localStorage.setItem('tokenTimeoutData',timeOutData.getFullYear()+'-'+m+'-'+timeOutData.getDate());
                localStorage.setItem('user',userRole);
                localStorage.setItem('defaultPassword',response.data.encodedPassword);
                this.logining=false;
                this.$router.push({path:'/index'}).catch(err=>{
                  console.log("跳转失败？")
                })
              }).catch(error=>{
              this.logining=false;
              this.$alert('用户名或密码有误!', 'info', {
                     confirmButtonText: '确定'
                   })
            })
          }else{
            console.log('输入有误');
            return false;
          }
        })
      },
      // handleSubmitTest(){
      //   this.$api.login(this.ruleForm2.username,this.ruleForm2.password)
      //   .then(response=>{
      //     console.log(response);
      //     localStorage.setItem('token',response.data.data);
      //     this.$router.push({path:'/index'})
      //   })
      // },
      forgetPassword(){
        this.$router.push({path:'/forgetPassword'});
      }
    }
  };
</script>

<style scoped>
  .login-container {
    width: 100%;
    height: 100%;
  }
  .login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 100px auto;
    width: 250px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  label.el-checkbox.rememberuser {
    margin: 0px 0px 15px;
    text-align: left;
  }
</style>

