<template>
    <div class="demo-input-size" style="width: 40%">
      <p>{{title}}</p>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
        <el-form-item
          label="输入1"
          prop="message1"
        >
          <el-input v-model="numberValidateForm.message1" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="输入2"
          prop="message2"
        >
          <el-input v-model="numberValidateForm.message2" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="输入3"
          prop="message3"
        >
          <el-input v-model="numberValidateForm.message3" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
          <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

</template>

<script>
    export default{
      name: "StandardEdit",
      data() {
        return{
          title: "标准编辑页",
          numberValidateForm: {
            message1: "",
            message2: "",
            message3: "",
          }
        }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>

</style>
