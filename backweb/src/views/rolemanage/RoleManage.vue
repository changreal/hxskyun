<template>
  <div>
  <el-row>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="search" placeholder="请输入角色名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="searchRole">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="newRole">新增</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="danger">保存</el-button>
      </el-form-item>
    </el-form>

    <el-col :span="16"><div class="grid-content bg-purple">
        <el-table title="角色列表" :data="roleTable" highlight-current-row max-height="500px"
      @row-click="selectRole">
        <el-table-column fixed width="80px" label="角色编码" prop="roleId"></el-table-column>
        <el-table-column fixed width="140px" label="角色名称" prop="roleName"></el-table-column>
        <el-table-column fixed width="140px" label="角色描述" prop="roleDescribe"></el-table-column>
        <el-table-column fixed width="120px" label="创建日期" prop="createTime"></el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="warning" @click="editRole(scope.$index,scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="deleteRole(scope.$index,scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-light">
      <h4>菜单分配</h4>

      <el-tree :data="menuAuth" ref="tree" node-key="id" disabled="true"  default-expand-all
               show-checkbox highlight-current :props="defaultProps">
      </el-tree>
    </div></el-col>

  </el-row>
    <el-dialog title="角色管理" :visible.sync="dialogVisible" width="500px">
      <el-form :inline="true" align="center">
        <el-form-item v-model="editRoleTable" label="角色名称" label-width="formLabelWidth">
          <el-input v-model="editRoleTable.roleName" size="small"></el-input>
        </el-form-item>
<!--        <el-form-item label="角色类型" label-width="formLabelWidth">-->
<!--          <el-input size="small"></el-input>-->
<!--        </el-form-item>-->
        <el-form-item label="角色描述" label-width="formLabelWidth">
          <el-input v-model="editRoleTable.roleDescribe" size="small"></el-input>
        </el-form-item>
<!--        <p align="left" style="margin-left: 40px">角色权限</p>-->
        <el-form-item style="margin-left: 80px">
          <el-checkbox-group v-model="rightMenuList" align="left">
            <el-checkbox label="角色管理"></el-checkbox>
            <el-checkbox label="用户管理"></el-checkbox>
            <el-checkbox label="菜单管理"></el-checkbox>
            <el-checkbox label="字典管理"></el-checkbox>
            <el-checkbox label="参数管理"></el-checkbox>
            <el-checkbox label="组织管理"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <el-form>
        <el-form-item align="center">
          <el-button type="success" size="small" :disabled="!editRoleTable.roleName" @click="saveRole">保存</el-button>
          <el-button type="primary" size="small" @click="dialogVisible=false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
</div>

</template>

<script>
    export default {
        name: "RoleManage",
      data(){
          return{
            roleTable:[],
            roleTableForSelect:[],
            search:'',
            editRoleTable:[],
            roleTableForSearch:[],
            menuTrf:['首页','角色管理','用户管理','菜单管理','字典管理','参数管理','组织管理'],
            menuAuth:[{
              name:'首页',
              id:0,
              children:[{
                name:'角色管理',
                id:1,
              },{
                name:'用户管理',
                id:2,
              },{
                name:'菜单管理',
                id:3,
              },{
                name:'字典管理',
                id:4,
              },{
                name:'参数管理',
                id:5,
              },{
                name:'组织管理',
                id:6,
              }
              ]
            }],
            rightMenuList:[],
            editRoleRightList:[],
            editRoleId:-1,
            dialogVisible:false,
            formLabelWidth:'120px',
            editOrAdd:'',
            newRoleId:-1,
            editRoleId:0,
            defaultProps: {
              children: 'children',
              label: 'name'
            },
            saveDisable:true,
      }
      },

      methods:{
        searchRole(){

          this.roleTable.splice(0);
          if(this.search==''||this.search==null){
            for(let i=0;i<this.roleTableForSelect.length;i++){
              this.roleTable.push(this.roleTableForSelect[i]);
            }
          }else {
            for(let i=0;i<this.roleTableForSelect.length;i++){
              if(this.roleTableForSelect[i].roleName==this.search){
                this.roleTable.push(this.roleTableForSelect[i]);
              }
            }
          }
        },
        rightListTrf(){
          this.editRoleRightList.splice(0);
          for(let i=0;i<this.menuTrf.length;i++){
            for(let j=0;j<this.rightMenuList.length;j++){
              if(this.rightMenuList[j]==this.menuTrf[i]){
                this.editRoleRightList.push(i);
              }
            }
          }
          // console.log(this.editRoleRightList);
        },
        getRoleAll(){
          this.roleTable.splice(0);
          let year;
          let month;
          let day;
          let createDate;
          this.$api.roleManage.getRoleAll()
            .then(response=>{
              //console.log(response);
              for(let i=0;i<response.data.data.length;i++){
                let tempDate=new Date(response.data.data[i].creationdate)
                if (response.data.data[i].creationdate!=null){
                  year=tempDate.getFullYear();
                  month=tempDate.getMonth()+1;
                  day=tempDate.getDate();
                  createDate=year+'-'+month+'-'+day;
                }else {
                  createDate='-';
                }
                // response.data.data[i].creationdate=response.data.data[i].creationdate.toDate('yyyy-mm-dd');
                this.roleTable.push({
                  roleId:response.data.data[i].roleId,
                  roleName:response.data.data[i].roleName,
                  roleDescribe:response.data.data[i].roleDescription,
                  createTime:createDate,
                  rightList:response.data.data[i].rightList,
                })
              }
              // this.newRoleId=response.data.data[response.data.data.length-1].roleId+1;
              // for(let i=0;i<response.data.data.length;i++){
              //   this.roleTableForSearch.push({
              //     roleId:response.data.data[i].roleId,
              //     roleName:response.data.data[i].roleName,
              //     roleDescribe:response.data.data[i].roleDescription,
              //     createTime:createDate,
              //     rightList:response.data.data[i].rightList,
              //   })
              // }
            })
        },
        selectRole(row,event,column){
          // this.$refs.tree.setCheckedKeys(0);
          this.$refs.tree.setCheckedKeys(row.rightList);
          console.log(row.rightList);
        },
        newRole(){
          this.editOrAdd='add';
          this.editRoleRightList.splice(0);
          this.rightMenuList.splice(0);
          this.editRoleTable={roleName:'',roleDescribe:'',rightList:[]};
          // console.log(this.editRoleRightList);
          this.dialogVisible=true;
        },
        editRole(index,row){
          this.editOrAdd='edit';
          this.editRoleId=row.roleId;
          this.rightMenuList.splice(0);
          this.editRoleTable={roleName:row.roleName,roleDescribe:row.roleDescribe,rightList:row.rightList};
          console.log(row.rightList);
          for(let i=0;i<row.rightList.length;i++){
            this.rightMenuList.push(this.menuTrf[row.rightList[i]]);
          }
          this.dialogVisible=true;
        },
        saveRole(){
          // console.log(this.newRoleId);
          if(this.editOrAdd=='add'){
            setTimeout(this.saveNewRole,500);
            // console.log(this.editOrAdd);
          }else {
            setTimeout(this.saveEditRole,500);
          }
        },
        // roleId:response.data.data[i].roleId,
        // roleName:response.data.data[i].roleName,
        // roleDescribe:response.data.data[i].roleDescription,
        // createTime:createDate,
        // rightList:response.data.data[i].rightList,

        saveNewRole(){
          let createDate = new Date();
          let year=createDate.getFullYear();
          let month=createDate.getMonth()+1;
          let day=createDate.getDate();
          let cd=year+'-'+month+'-'+day;
          this.$api.roleManage.newRole(this.newRoleId,this.editRoleTable.roleName,this.editRoleTable.roleDescribe)
          .then(response=>{
            // console.log(response);
            this.rightListTrf();
            // console.log(this.editRoleRightList);
            // this.roleTable.push({
            //   roleId:this.newRoleId,
            //   roleName:this.editRoleTable.roleName,
            //   roleDescribe:this.editRoleTable.roleDescribe,
            //   createTime:cd,
            //   rightList:0,
            // });
            // console.log(this.roleTable);
            this.$api.roleManage.editRole
            (this.newRoleId,this.editRoleTable.roleName,this.editRoleTable.roleDescribe,this.editRoleRightList)
              .then(response=>{
                // console.log(response);
                this.getRoleAll();
                this.roleTableForSelect.splice(0);
                for(let i=0;i<this.roleTable.length;i++){
                  this.roleTableForSelect.push(this.roleTable[i]);
                }
              }).catch(error=>{
              console.log(error);
            })
            this.newRoleId=this.newRoleId+1;
          })

          this.dialogVisible=false;
        },
        saveEditRole(){
          this.rightListTrf();
          // console.log(this.editRoleRightList);
          // console.log(this.editRoleId);
          this.$api.roleManage.editRole(
            this.editRoleId,this.editRoleTable.roleName,this.editRoleTable.roleDescribe,this.editRoleRightList
          ).then(response=>{
            // console.log(response);
            this.getRoleAll();
            this.roleTableForSelect.splice(0);
            for(let i=0;i<this.roleTable.length;i++){
              this.roleTableForSelect.push(this.roleTable[i]);
            }
          })

          this.dialogVisible=false;
        },
        deleteRole(index,row){
          this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示',{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(()=>{
            this.$api.roleManage.deleteRole(row.roleId)
            .then(response=>{
              console.log(response);
              // this.roleTable.splice(row.roleId,1);
              // console.log(index);
              this.roleTable.splice(index,1);
            })
          }).catch(error=>{
            this.$message({
              type: 'error',
              message: err,
            })
          })
        },
      },
      created() {
        this.roleTable.splice(0);
        let year;
        let month;
        let day;
        let createDate;
        this.$api.roleManage.getRoleAll()
        .then(response=>{
          //console.log(response);
          for(let i=0;i<response.data.data.length;i++){
            let tempDate=new Date(response.data.data[i].creationdate)
            if (response.data.data[i].creationdate!=null){
              year=tempDate.getFullYear();
              month=tempDate.getMonth()+1;
              day=tempDate.getDate();
              createDate=year+'-'+month+'-'+day;
            }else {
              createDate='-';
            }
           // response.data.data[i].creationdate=response.data.data[i].creationdate.toDate('yyyy-mm-dd');
            this.roleTable.push({
              roleId:response.data.data[i].roleId,
              roleName:response.data.data[i].roleName,
              roleDescribe:response.data.data[i].roleDescription,
              createTime:createDate,
              rightList:response.data.data[i].rightList,
            })
          }
          this.newRoleId=response.data.data[response.data.data.length-1].roleId+1;
          for(let i=0;i<this.roleTable.length;i++){
            this.roleTableForSelect.push(this.roleTable[i]);
          }
        })
        // console.log(this.routeInf);
        // this.menuAuth.push({menuName:this.routeInf[0].name,id:this.routeInf[0].id,children:this.routeInf[0].children})
        // console.log(this.menuAuth);
        // this.routeInf.splice(0);
        // this.routeInf.push()
      }
    }
</script>

<style scoped>

</style>
