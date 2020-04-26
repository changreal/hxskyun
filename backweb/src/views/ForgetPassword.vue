<template>
  <div class="fp-container">

    <el-form :model="ruleForm2" status-icon :rules="rules2"
             ref="ruleForm2"
             label-width="0px"
             label-position="left"
             class="demo-ruleForm fp-page">
      <h3 class="title">忘记密码</h3>
      <el-form-item prop="user">
        <el-input v-model.number="ruleForm2.user" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input style="width: 60%" v-model="checkCode" placeholder="输入验证码"></el-input>
        <el-button @click="createCheckCode"
                   class="fp-check-code">{{createdCheckCode}}</el-button>
      </el-form-item>
      <el-form-item prop="verifyCode">
        <el-input style="width: 60%" v-model="ruleForm2.verifyCode" placeholder="手机验证码"></el-input>
        <el-button  :label-position="right"
                    @click="sendVerifyCode">{{verifyCodeState}}</el-button>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%" type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      var checkUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validateVerifyCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else if (value !== this.ruleForm2.verifyCode) {
          callback(new Error('验证码有误'));
        } else {
          callback();
        }

      };
      return {
        ruleForm2: {
          user: '',
          pass: '',
          checkPass: '',
          verifyCode: ''
        },
        rules2: {
          user: [
            {validator: checkUser, trigger: 'blur'}
          ],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          verifyCode: [
            {validator: validateVerifyCode, trigger: 'blur'}
          ]
        },
        checkCode: '',
        createdCheckCode: '',
        verifyCodeState: '发送验证码',
      };
    },
    created() {
      this.createCheckCode();
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('修改成功!');
          } else {
            console.log('手机验证码有误');
            return false;
          }
        });
      },
      createCheckCode() {
        this.checkCode = "";
        this.createdCheckCode = "";
        var code = "";
        var codeLength = 4;
        var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
          'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        for (var i = 0; i < codeLength; i++) {
          //取得随机数的索引（0~35）
          var index = Math.floor(Math.random() * 36);
          //根据索引取得随机数加到code上
          code += random[index];
        }
        this.createdCheckCode = code;
      },
      sendVerifyCode() {
        if(this.checkCode === this.createdCheckCode) {
          this.verifyCodeState = "验证码已发送";
        } else {
          alert("验证码有误")
          this.createCheckCode();
        }
      }
    },
  }
</script>

<style scoped>
  .fp-container {
    width: 100%;
    height: 100%;
  }
  .fp-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 40px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .fp-check-code{
    width: 33%;
    background: #0b97c4;
    -webkit-border-radius: 5px;
  }
</style>
