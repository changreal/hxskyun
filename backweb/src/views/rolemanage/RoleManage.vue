<template>
  <div>
  <el-row>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input placeholder="请输入角色名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="newRole">新增</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="danger">保存</el-button>
      </el-form-item>
    </el-form>

    <el-col :span="14"><div class="grid-content bg-purple">
        <el-table title="角色列表" :data="roleTable" highlight-current-row max-height="500px"
      @row-click="selectRole">
        <el-table-column fixed width="100px" label="名称" prop="roleName"></el-table-column>
        <el-table-column fixed width="100px" label="角色类型" prop="roleType"></el-table-column>
        <el-table-column fixed width="100px" label="角色等级" prop="roleGrade"></el-table-column>
        <el-table-column fixed width="120px" label="创建日期" prop="createTime"></el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="warning" @click="editRole(scope.$index,scope.row)">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div></el-col>
    <el-col :span="10"><div class="grid-content bg-purple-light">
      <h4>菜单分配</h4>

      <el-tree :data="routeInf" ref="tree" node-key="id" disabled="true"  default-expand-all
               show-checkbox highlight-current :props="defaultProps">
      </el-tree>
    </div></el-col>

  </el-row>
    <el-dialog title="角色管理" :visible.sync="""dialogVisible" width="500px">
      <el-form :inline="true" align="center">
        <el-form-item label="角色名称" label-width="formLabelWidth">
          <el-input v-model="editRoleName"></el-input>
        </el-form-item>
        <el-form-item label="角色类型" label-width="formLabelWidth">
          <el-input v-model="editRoleType"></el-input>
        </el-form-item>
        <el-form-item label="角色等级" label-width="formLabelWidth">
          <el-input v-model="editRoleGrade"></el-input>
        </el-form-item>
      </el-form>
      <el-form>
        <el-form-item align="center">
          <el-button type="success" size="small" @click="saveRole">保存</el-button>
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
            roleTable:[
              {
                roleName:'管理员',
                roleType:'admin',
                roleGrade:'1',
                createTime:'2020-05-14',
                describe:'',
              },
              {
                roleName:'老师',
                roleType: 'teacher',
                roleGrade: '2',
                createTime:'2020-05-14',
                describe: '',
              }
            ],
            dialogVisible:false,
            formLabelWidth:'120px',
            roleName:'',
            roleType:'',
            roleGrade:'',
            defaultProps: {
              children: 'children',
              label: 'name'
            },
            routeInf:[],
            editRoleRow:-1,
            editRoleName:'',
            editRoleType:'',
            editRoleGrade:'',
      }
      },
      methods:{
        selectRole(row, event, column){
          this.roleName=row.roleName;
          this.roleType=row.roleType;
          console.log(this.roleType);
          let selectedId=[];
          if(this.roleType=='admin'){
            for(let i in this.routeInf){
              if(this.routeInf[i].children&&this.routeInf[i].children.length){
                for(let j in this.routeInf[i].children){
                  if(this.routeInf[i].children[j].isShow==true){
                    let k={id:this.routeInf[i].children[j].id,name:this.routeInf[i].children[j],name};
                    selectedId.push(k);
                  }
                }
                continue;
              }
              if(this.routeInf[i].isShow==true){
                let j={id:this.routeInf[i].id,name:this.routeInf[i].name};
                selectedId.push(j);

              }
            }
            this.$refs.tree.setCheckedNodes(selectedId)
          }
          if(this.roleType=='teacher'){
            for(let i in this.routeInf){
              if(this.routeInf[i].children&&this.routeInf[i].children.length){
                for(let j in this.routeInf[i].children){
                  if(this.routeInf[i].children[j].permission=='teacher'||this.routeInf[i].children[j].permission=='user'){
                    let k={id:this.routeInf[i].children[j].id,name:this.routeInf[i].children[j],name};
                    selectedId.push(k);
                  }
                }
                continue;
              }
              if(this.routeInf[i].permission=='teacher'||this.routeInf[i].permission=='user'){
                let j={id:this.routeInf[i].id,name:this.routeInf[i].name};
                selectedId.push(j);

              }
            }
            console.log(selectedId);
            this.$refs.tree.setCheckedNodes(selectedId);
          }
        },
        newRole(){
          this.dialogVisible=true;
          this.editRoleRow=-1;
        },
        editRole(index,row){
          this.dialogVisible=true;
          this.editRoleName=row.roleName;
          this.editRoleType=row.roleType;
          this.editRoleGrade=row.roleGrade;
          this.editRoleRow=index;
          console.log(this.editRoleRow);
        },
        saveRole(){
          let date=new Date();

          let newRole={};
          newRole.roleName=this.editRoleName;
          newRole.roleType=this.editRoleType;
          newRole.roleGrade=this.editRoleGrade;
          newRole.createTime=date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate();
          newRole.describe='';

          if(this.editRoleRow==-1){
            this.roleTable.push(newRole);
          }else {
            this.roleTable[this.editRoleRow]=newRole;
          }
          this.dialogVisible=false;
        }
      },
      created() {
        let jsonRoute=JSON.parse(localStorage.getItem('routeInf'));
        this.routeInf=[];
        let j=0;
        for(let index in jsonRoute){
          this.routeInf[j]=jsonRoute[index];
          j++;
        }
        let route;
        for(route in this.routeInf){
          this.routeInf[route].id=Number(route)+Number(1);
          if(this.routeInf[route].children&&this.routeInf[route].children.length){
            for(let item in this.routeInf[route].children){
              this.routeInf[route].children[item].id=(Number(route)+1)*10+Number(item)+1;
            }
          }
        }
      }
    }
</script>

<style scoped>

</style>
