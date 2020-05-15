<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input placeholder="请输入角色名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">新增</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="danger">保存</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="userTable"  style="width: 100%"  height="500">
      <el-table-column fixed prop="userName" label="用户名"></el-table-column>
      <el-table-column prop="userRole" label="用户角色"></el-table-column>
      <el-table-column prop="phoneNum" label="联系电话"></el-table-column>
      <el-table-column prop="emailNum" label="邮箱"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间"> </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="warning" size="small">编辑</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        name: "UserManage",
      data(){
          return{
            userTable:[
              {
                userName:'管理员',
                userRole:'admin',
                phoneNum:'13107922210',
                emailNum:'2135@qq.com',
                createTime: '2020-05-14',
                describe:'',
              },
              {
                userName:'老师',
                userRole: 'teacher',
                phoneNum:'13107922211',
                emailNum:'2136@qq.com',
                createTime:'2020-05-14',
                describe: '',
              }
            ],
          }
      }
    }
</script>

<style scoped>

</style>
