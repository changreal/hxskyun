<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input size="mini" placeholder="请输入菜单名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="mini" type="success">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="mini" type="primary">新增</el-button>
      </el-form-item>
      <el-form-item><el-button size="mini">测试按钮</el-button></el-form-item>
    </el-form>
    <el-table :data="routeInf" style="width: 100%;margin-bottom: 20px;" row-key="id" lazy
               :tree-props="{children:'children',hasChildren:'hasChildren'}">
      <el-table-column prop="name" label="菜单标题" sortable width="180"></el-table-column>
      <el-table-column prop="path" label="路由地址" sortable width="180"></el-table-column>
      <el-table-column prop="permission" label="权限标识" sortable width="180"></el-table-column>
      <el-table-column label="状态" sortable width="180">
        <template slot-scope="scope">
          <span v-show="scope.row.isShow">启用</span>
          <span v-show="!scope.row.isShow">禁用</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" sortable>
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="editMenuItem(scope.$index,scope.row)">编辑</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="菜单管理" :visible.sync="dialogVisible" width="500px" @close="kcDialog = false">
      <el-form :inline="true">
        <el-form-item label="菜单标题" :label-width="formLabelWidth">
          <el-input v-model="menuName" > </el-input>
        </el-form-item>
        <el-form-item label="是否启用" :label-width="formLabelWidth">
          <el-select v-model="menuIsShow" placeholder="菜单是否启用">
            <el-option v-for="item in menuIsShowOption"
                       :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form align="center">
        <el-button type="success" size="small" @click="saveMenuItem">保存</el-button>
        <el-button type="primary" size="small"  @click="dialogVisible = false">取消</el-button>
      </el-form>

    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "MenuManage",
      data(){
        return{
          routeInf:{},
          dialogVisible:false,
          defaultProps: {
            children: 'children',
            label: 'label'
          },
        formLabelWidth: '120px',
          menuName:'',
          menuIsShow:'',
          menuId:'',
          menuIsShowOption:[
            {
              value:true,
              label:'是',
            },{
              value: false,
              label: '否',
            }

          ],
        }
      },
      methods:{
        handleNodeClick(data) {
          console.log(data);
        },
        editMenuItem(index,row){
          //console.log(row.id);
          this.menuName=row.name;
          this.menuIsShow=row.isShow;
          this.menuId=row.id;
          this.dialogVisible=true;

        },
        deleteMenuItem(index,row){
          let i;
          console.log(typeof (this.routeInf));
          for(i in this.routeInf){
            if(this.routeInf[i].id==row.id){
              console.log(i);
            }
          }
        },
        saveMenuItem(){
          console.log(this.menuIsShow);
          for(let i in this.routeInf){
            if(this.routeInf[i].id==this.menuId){
              this.routeInf[i].name=this.menuName;
              this.routeInf[i].isShow=this.menuIsShow;
            }
            if(this.routeInf[i].children&&this.routeInf[i].children.length){
              for(let j in this.routeInf[i].children){
                if(this.routeInf[i].children[j].id==this.menuId){
                  this.routeInf[i].children[j].name=this.menuName;
                  this.routeInf[i].children[j].isShow=this.menuIsShow;
                }
              }
            }
          }
          console.log(this.routeInf);
          localStorage.setItem('routeInf',JSON.stringify(this.routeInf));
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
      console.log(this.routeInf);
    }
    }

</script>

<style scoped>

</style>
