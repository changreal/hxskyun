<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input placeholder="请根据角色名查询" v-model="search"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="selectUser">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="newUser">新增</el-button>
      </el-form-item>
<!--      <el-form-item>-->
<!--        <el-button type="danger">保存</el-button>-->
<!--      </el-form-item>-->
    </el-form>
    <el-table :data="userTable"  style="width: 100%"  height="500">
      <el-table-column fixed prop="userId" label="用户编码"></el-table-column>
      <el-table-column fixed prop="userName" label="用户名"></el-table-column>
      <el-table-column prop="userRole" label="用户角色"></el-table-column>
      <el-table-column prop="phoneNum" label="联系电话"></el-table-column>
      <el-table-column prop="emailNum" label="邮箱"> </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="warning" size="small" @click="editUser(scope.$index,scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="deleteUser(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="用户管理" :visible.sync="dialogVisible" width="450px">
      <el-form  :inline="true" align="center">
        <el-form-item label="用户名称">
          <el-input v-model="newUserTable.userName" size="small"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="newUserTable.phoneNum" size="small"></el-input>
        </el-form-item>
        <el-form-item label="电子邮件">
          <el-input v-model="newUserTable.emailNum" size="small"></el-input>
        </el-form-item>
        <el-form-item label="用户角色">
          <el-select placeholder="用户角色信息" v-model="newUserTable.userRole" size="small">
            <el-option v-for="item in roleTable"
            :label="item.roleName"
            :key="item.roleId"
            :value="item.roleId"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form>
        <el-form-item align="center">
          <el-button type="primary" size="small"  @click="saveUser">保存</el-button>
          <el-button type="warning" size="small" @click="dialogVisible=false">取消</el-button>
<!--          <el-button type="warning" size="small" @click="getNewUserTableInfo">测试</el-button>-->
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "UserManage",
      data(){
          return{
            dialogVisible:false,
            editOrAdd:'',
            editIndex:-1,
            search:'',
            newUserTable:{userName:'',phoneNum:'',emailNum:'',userRole:''},
            userTable:[],
            userTableForSelect:[],
            roleTable:[],
          }
      },
      methods:{
        selectUser(){

          this.userTable.splice(0);
          console.log(this.search);
          if(this.search==''||this.search==null){
            for(let i=0;i<this.userTableForSelect.length;i++){
              this.userTable.push(this.userTableForSelect[i]);
            }
          }else {
            for(let i=0;i<this.userTableForSelect.length;i++){
              if(this.search==this.userTableForSelect[i].userName){
                this.userTable.push(this.userTableForSelect[i]);
              }
            }
          }
        },
        getNewUserTableInfo(){
          console.log(this.newUserTable);
          this.newUserTable.userId='1234566';
          console.log(this.newUserTable);
        },
        newUser(){
          this.dialogVisible=true;
          this.editOrAdd='add';
          this.newUserTable={userName:'',phoneNum:'',emailNum:'',userRole:''};
        },
        editUser(index,row){
          this.dialogVisible=true;
          this.editOrAdd='edit';
          this.editIndex=index;
          this.newUserTable={
            userId:row.userId,
            userName:row.userName,
            phoneNum:row.phoneNum,
            emailNum:row.emailNum,
            userRole:row.userRole,
          }
        },
        saveUser(){
          if(this.editOrAdd=='add'){
            this.saveNewUser();
          }else {
            this.saveEditUser();
          }
        },
        saveNewUser(){
          this.$api.userManage.newUser(this.newUserTable.userName,'123456',
            this.newUserTable.phoneNum,this.newUserTable.emailNum)
          .then(response=>{
            console.log(response);
            this.newUserTable.userId=response.data.data.userId;
            this.$api.userManage.editUserRole(this.newUserTable.userId,this.newUserTable.userRole)
            .then(response=>{
              console.log('进行角色信息录入');
              console.log(response);
            });
            this.userTable.push({
              userId:response.data.data.userId,
              userName:this.newUserTable.userName,
              userRole:this.roleTable[this.newUserTable.userRole-1].roleName,
              phoneNum:this.newUserTable.phoneNum,
              emailNum:this.newUserTable.emailNum})
            this.userTableForSelect.splice(0);
            for(let i=0;i<this.userTable.length;i++){
              this.userTableForSelect.push(this.userTable[i]);
            }
          })

          this.dialogVisible=false;
        },
        saveEditUser(){
          let editRoleId;
          let editRoleName;
          for(let i=0;i<this.roleTable.length;i++){
            if(this.roleTable[i].roleName==this.newUserTable.userRole||this.roleTable[i].roleId==this.newUserTable.userRole){
              editRoleId=i+1;
              editRoleName=this.roleTable[i].roleName;
            }
          }
          this.$api.userManage.editUser(this.newUserTable.userId, this.newUserTable.userName,
            this.newUserTable.phoneNum,this.newUserTable.emailNum,editRoleId)
          .then(response=>{
            console.log(response);
          });
                      //this.roleTable[this.newUserTable.userRole-1].roleName
          this.userTable[this.editIndex].userName=this.newUserTable.userName;
          this.userTable[this.editIndex].phoneNum=this.newUserTable.phoneNum;
          this.userTable[this.editIndex].emailNum=this.newUserTable.emailNum;
          this.userTable[this.editIndex].userRole=editRoleName;
          this.userTableForSelect.splice(0);
          for(let i=0;i<this.userTable.length;i++){
            this.userTableForSelect.push(this.userTable[i]);
          }
          this.dialogVisible=false;
        },
        deleteUser(index,row){
          console.log(row.userId);
          this.$api.userManage.deleteUser(row.userId)
          .then(response=>{
            console.log(response);
          })
          // console.log(row.userId);
          // let userId;
          //
          // console.log(typeof(row.userId));
          // userId=row.userId.toString();
          // console.log(userId);
          // console.log(typeof(userId));
          // this.$api.userManage.deleteUser(userId)
          // .then(response=>{
          //   console.log(response);
          // }).catch(error=>{
          //   console.log(error);
          // });
        },
      },
      created() {
        this.$api.roleManage.getRoleAll()
        .then(response=>{
          for(let i=0;i<response.data.data.length;i++){
            this.roleTable.push({roleId:response.data.data[i].roleId,roleName:response.data.data[i].roleName});
          }
          this.$api.userManage.getUserAll()
            .then(response=>{
              for(let i=0;i<response.data.data.length;i++){
                this.userTable.push({
                  userId:response.data.data[i].userId,
                  userName:response.data.data[i].name,
                  userRole:response.data.data[i].roleId,
                  phoneNum:response.data.data[i].phone,
                  emailNum:response.data.data[i].email,
                });
              }
              this.userTable.sort(function (a, b) {
                if(a.userRole<b.userRole){
                  return -1;
                }else if(a.userRole == b.userRole){
                  return 0;
                }else {
                  return 1;
                }
              });
              //暂时无根据roleId查询方法，以该方法简单代替
              for(let i=0;i<this.userTable.length;i++){
                this.userTable[i].userRole=this.roleTable[this.userTable[i].userRole-1].roleName;
              }
              for(let i=0;i<this.userTable.length;i++){
                this.userTableForSelect.push(this.userTable[i]);
              }
            })

        });
        // for(let i=0;i<this.userTable.length;i++){
        //   this.userTable[i].userRole=this.roleTable[this.userTable[i].userRole-1].roleName;
        // }
      }
    }
</script>

<style scoped>

</style>
