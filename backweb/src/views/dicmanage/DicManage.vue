<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple" >
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
              <el-input v-model="search" placeholder="请输入字典名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="selectDicTable()">查询</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="addDicTable()">新增</el-button>
            </el-form-item>
          </el-form>
          <el-form>
            <el-table @row-click="selectDicRow" :data="dicTable" style="width: 100%" highlight-current-row max-height="500px">
              <el-table-column fixed  label="名称">
                <template slot-scope="scope">
                  <span v-show="!scope.row.editAble">{{scope.row.name}}</span>
                  <el-input size="mini" v-show="scope.row.editAble" v-model="scope.row.name"></el-input>
                </template>
              </el-table-column>
              <el-table-column fixed  label="编码">
                <template slot-scope="scope">
                  <span v-show="!scope.row.editAble">{{scope.row.code}}</span>
                  <el-input size="mini" v-show="scope.row.editAble" v-model="scope.row.code"></el-input>
                </template>
              </el-table-column>
              <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" type="warning" v-show="!scope.row.editAble" @click="editDicTable(scope.$index, scope.row)">编辑</el-button>
                  <el-button size="mini" type="success" v-show="scope.row.editAble" @click="saveDicTable(scope.$index, scope.row)">保存</el-button>
                  <el-button size="mini" type="danger" @click="deleteDicTable(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-form>
        </div>
      </el-col>


      <el-col :span="12"><div class="grid-content bg-purple-light">
        <template>
          <el-alert
            v-show="!isSelect"
            title="选择某项数据后再进行数据字典修改"
            type="info"
            show-icon>
          </el-alert>
        </template>
        <el-form :inline="true" :model="addDetailRow" class="demo-form-inline">
          <!--          <el-form-item>-->
          <!--            <el-input size="mini" v-model="addDetailRow.value" placeholder="字典值"></el-input>-->
          <!--          </el-form-item>-->
          <!--          <el-form-item>-->
          <!--            <el-select size="mini" v-model="addDetailRow.isDefault" placeholder="是否为默认值">-->
          <!--              <el-option label="是" value="是"></el-option>-->
          <!--              <el-option label="否" value="否"></el-option>-->
          <!--            </el-select>-->
          <!--          </el-form-item>-->
          <el-form-item>
            <el-button size="small" type="warning" @click="isEditDetail=true" plain>编辑</el-button>
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="primary" @click="addDicDetail" :disabled="!isEditDetail" plain>新增</el-button>
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="success" :disabled="!isEditDetail"  plain>保存</el-button>
          </el-form-item>
        </el-form>
        <!--        <el-table :data="dicDetail" style="width: 100%" highlight-current-row max-height="500px" v-show="!isSelect">-->
        <!--          <el-table-column fixed label="序号" prop="dicId"></el-table-column>-->
        <!--          <el-table-column fixed label="编码" prop="code"></el-table-column>-->
        <!--          <el-table-column fixed label="值" prop="value"></el-table-column>-->
        <!--          <el-table-column fixed label="是否默认值" prop="isDefault"></el-table-column>-->
        <!--        </el-table>-->
        <el-form>
          <el-table :data="selectDetailRow" style="width: 100%" highlight-current-row max-height="500px" v-show="isSelect">
            <el-table-column fixed label="编号" type="index">
            </el-table-column>
            <el-table-column fixed label="字典值" prop="value">
              <template slot-scope="scope">
                <span v-show="!isEditDetail">{{scope.row.value}}</span>
                <el-input v-show="isEditDetail" size="mini" v-model="scope.row.value"></el-input>
              </template>
            </el-table-column>
            <el-table-column fixed label="默认值">
              <template slot-scope="scope">
                <span v-show="!isEditDetail">{{scope.row.isDefault}}</span>
                <el-select v-show="isEditDetail" size="mini" v-model="scope.row.isDefault" placeholder="是否为默认值">
                  <el-option label="是" value=true></el-option>
                  <el-option label="否" value=false></el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
              <!--              <el-button size="mini" type="success" v-show="scope.row.editAble" @click="saveDicTable(scope.$index, scope.row)">保存</el-button>-->
              <el-button size="mini" type="danger" icon="el-icon-delete" @click="deleteDicDetail(scope.$index,scope.row)"></el-button>
            </el-table-column>

          </el-table>
        </el-form>


      </div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "DicManage",
    data() {
      return {
        search: '',
        state: '编辑',
        tempCode: '',
        isSelect: false,
        isEditDetail: false,
        selectTableRow: [{name: '', code: '', editAble: false}],
        dicTable: [
          {name: '性别', code: 'sex', editAble: false},
          {name: '角色', code: 'role', editAble: false},
          {name: '学历', code: 'education', editAble: false},
          {name: '班课类型', code: 'classType', editAble: false}
        ],
        selectDetailRow: [{ code: '', value:'',isDefault:''}],
        addDetailRow:{ code: '', value:'',isDefault:''},
        dicDetail: [
          {code: 'sex', value: '男', isDefault: '否'},
          {code: 'sex', value: '女', isDefault: '否'},
          {code: 'role', value: '学生', isDefault: '是'},
          {code: 'role', value: '教师', isDefault: '否'},
          {code: 'role', value: '管理员', isDefault: '否'},
          {code: 'education', value: '大学本科', isDefault: '是'},
          {code: 'education', value: '研究生', isDefault: '否'},
          {code: 'education', value: '高中生', isDefault: '否'},
          {code: 'classType', value: '学校课程', isDefault: '是'},
          {code: 'classType', value: '个人课程', isDefault: '否'}
        ],
      }
    },
    methods: {
      selectDicTable(){
        this.selectDetailRow.splice(0);
        for(let i=0;i<this.dicTable.length;i++){
          if(this.search===this.dicTable[i].name){
            this.selectTableRow.push(this.dicTable[i].name)
          }
        }
      },
      addDicTable(){
        var list={name: '', code: '', editAble: true};
        this.dicTable.push(list);
      },
      selectDicRow(row, event, column){
        let isExistCode=true;
        this.selectDetailRow.splice(0);
        for(let i=0;i<this.dicDetail.length;i++){
          if(this.dicDetail[i].code===row.code){
            this.selectDetailRow.push(this.dicDetail[i]);
            isExistCode=false;
          }
        }
        if(isExistCode==true){
          this.selectDetailRow.push({code: '', value:'',isDefault:''})
        }
        console.log(row.code);
        this.isSelect=true;
      },
      editDicTable(index,row){
        row.editAble = true;
        this.tempCode = this.dicTable[index].code;
      },
      saveDicTable(index,row){
        this.dicTable.name = row.name;
        this.dicTable.code = row.code;
        row.editAble = false;
        for(let tempDetail in this.dicDetail){
          if(this.dicDetail[tempDetail].code === this.tempCode){
            this.dicDetail[tempDetail].code = row.code;
          }
        }
      },
      deleteDicTable(index,row) {
        var tempCode = this.dicTable[index].code;
        this.deleteConfirm(index,row,tempCode);
      },
      deleteConfirm(index,row,tempCode){
        var i=0;
        this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          for(let i=0;i<this.dicDetail.length;i++){
            if(this.dicDetail[i].code === tempCode){
              this.dicDetail.splice(i,1)
              i--;
            }
          }
          this.dicTable.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!',
          })
        }).catch((err) => {
          this.$message({
            type: 'error',
            message: err
          })
        })
      },
      addDicDetail(){
        this.addDetailRow.code=this.selectDetailRow[0].code;
        this.selectDetailRow.push(this.addDetailRow);
        this.addDetailRow={code: '', value:'',isDefault:''};
      },
      editDicDetail(index,row){
      },
      deleteDicDetail(index,row){
        // for(var i=id;i<this.selectDetailRow.length;i++){
        //   this.selectDetailRow[i].dicId=i;
        //   console.log(this.selectDetailRow[i].dicId);
        // }
        this.selectDetailRow.splice(index,1);
      }
    }
  };
</script>

<style scoped>
  .el-row {
  }
  .el-col {
    padding-right: 20px;
  }
</style>
