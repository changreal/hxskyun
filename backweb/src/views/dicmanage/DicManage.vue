<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="search" placeholder="请输入字典名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="selectDicTable">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addDicTable()">新增</el-button>
      </el-form-item>
    </el-form>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple" >

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
                  <el-button size="mini" type="warning"  @click="editDicTable(scope.$index, scope.row)">编辑</el-button>
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
                <el-input v-show="isEditDetail" size="mini" v-model="scope.row.value" re></el-input>
              </template>
            </el-table-column>
            <el-table-column fixed label="默认值">
              <template slot-scope="scope">
                <span v-show="!isEditDetail">{{scope.row.isDefault}}</span>
                <el-select v-show="isEditDetail" size="mini" v-model="scope.row.isDefault" placeholder="是否为默认值">
                  <el-option label="是" value="是"></el-option>
                  <el-option label="否" value="否"></el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" icon="el-icon-delete" @click="deleteDicDetail(scope.$index,scope.row)"></el-button>
              </template>
              <!--              <el-button size="mini" type="success" v-show="scope.row.editAble" @click="saveDicTable(scope.$index, scope.row)">保存</el-button>-->

            </el-table-column>

          </el-table>
        </el-form>


      </div></el-col>
    </el-row>
    <el-dialog title="字典管理" :visible.sync="dialogVisible" width="500px">
      <el-alert v-show="isDicTableFull" title="字典表存在未输入值" type="info" style="margin-top: 0px"></el-alert>
      <el-alert v-show="isDicDetailFull&&!isDicTableFull" title="字典明细表存在未输入值" type="info" style="margin-top: 0px"></el-alert>
      <el-form style="margin-bottom: 0px" inline>
        <el-form-item>
          <el-input v-model="editDicTableName" size="small" required
                    autocomplete="off" placeholder="请输入字典名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="editDicTableCode" size="small" required
                    autocomplete="off" placeholder="请输入字典编码"></el-input>
        </el-form-item>


      <el-table :data="editDetailRow" style="width: 100%;margin-top: 0px">
        <el-table-column fixed label="编号" type="index"></el-table-column>
        <el-table-column align="center" label="字典值">
          <template slot-scope="scope">
            <el-input v-model="scope.row.value" size="mini"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="是否默认值">
          <template slot-scope="scope">
            <el-select  v-model="scope.row.isDefault" size="mini" placeholder="是否为默认值">
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" icon="el-icon-delete" @click="deleteDicDetail(scope.$index,scope.row)">
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="width: 100%" align="center">
        <el-button  style="width: 60%;margin: 5px" size="small" type="primary" @click="addDicDetail">新增</el-button>
        <el-button  style="width: 60%;margin: 5px" size="small" type="success" :disabled="isDicDetailFull&&isDicTableFull" @click="saveDicTable">保存</el-button>
        <p>{{isDateFull}}</p>
      </div>
      </el-form>
    </el-dialog>
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

        isEditDetail: false,

        dicTable: [
          {id:1, name: '性别', code: 'sex'},
          {id:2, name: '角色', code: 'role'},
          {id:3, name: '学历', code: 'education'},
          {id:4, name: '班课类型', code: 'classType'}
        ],

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
        dialogVisible:false,
        isSelect: false,//是否选择了字典表
        editDicTableName:'',  //字典表名
        editDicTableCode:'',  //字典表编码
        beforeEditDicTableCode:'',
        editDicTableId:0,     //字典表Id（这个怎么用还要考虑
        newDicTableId:0,     //新字典表Id
        selectDetailRow: [{ code: '', value:'',isDefault:''}],  //选择某一字典表时展示用
        addDicRow:{id:0, name:'', code:''}, //新增字典表时用
        editDetailRow: [{code: '', value:'',isDefault:''}],//用于保存编辑字典
        editOrAdd:'',
      }
    },
    methods: {
      selectDicTable(){
        this.selectDetailRow.splice(0);
        this.$api.dicManage.getDicDetailById(1)
        .then(response=>{
          console.log(response);
        }).catch(error=>{
          console.log(error);
        })
        console.log()
      },
      addDicTable(){
        this.beforeEditDicTableCode='';
        this.editDicTableName='';
        this.editDicTableCode='';
        this.editDetailRow=[{code: '', value:'',isDefault:''}];
        this.editOrAdd='add';
        this.dialogVisible=true;
      },
      selectDicRow(row, event, column){
        let isExistCode=true;
        this.selectDetailRow.splice(0);
        for(let i in this.dicDetail){
          if(this.dicDetail[i].code===row.code){
            this.selectDetailRow.push(this.dicDetail[i]);
            isExistCode=false;
          }
        }
        // if(isExistCode==true){
        //   this.selectDetailRow.push({code: '', value:'',isDefault:''})
        // }
        console.log(row.code);
        this.isSelect=true;
      },
      editDicTable(index,row){
        this.dialogVisible=true;
        this.editDetailRow=this.selectDetailRow;
        this.editDicTableCode=row.code;
        this.editDicTableName=row.name;
        this.beforeEditDicTableCode=row.code;
        this.editOrAdd='edit';
        this.tempCode = this.dicTable[index].code;
      },
      addDicDetail(){
        let addDetailRow={code: '', value:'',isDefault:''};
        this.editDetailRow.push(addDetailRow);
      },
      saveDicTable(){
        let editRow=-1;
        let isEditCode=false;
        let i =0;
        for(i in this.dicTable){
          if(this.dicTable[i].code==this.beforeEditDicTableCode){
            this.dicTable[i].code=this.editDicTableCode;
            this.dicTable[i].name=this.editDicTableName;
            editRow=i;
          }
        }
        if(this.beforeEditDicTableCode!=this.editDicTableCode){
          isEditCode=true;
        }
        this.newDicTableId=i+1;
        let j=0;
        for(j in this.editDetailRow){   //对字典详细表统一code
          this.editDetailRow[j].code=this.editDicTableCode;
        }
        console.log(editRow);
        if(editRow == -1) {   //若字典表为新增字典,目前仅进行了新增字典表的后台交互，还未进行字典详细表的后台交互
          this.addDicRow.id = this.newDicTableId;
          this.addDicRow.name = this.editDicTableName;
          this.addDicRow.code = this.editDicTableCode;
          this.dicTable.push(this.addDicRow);
          this.$api.dicManage.insertDicTable(this.addDicRow.name,this.addDicRow.code)
          .then(response=>{
            localStorage.setItem('newDic',response.data.data)
          }).catch(error=>{
            console.log(error);
          })
          this.saveDicDetail(true);
        }else {
          this.saveDicDetail(false);
        }

        //字典表若已存在的方法还未完成
        this.dialogVisible=false;
        this.editDicTableName='';
        this.editDicTableCode='';
        this.editDetailRow.splice(0);
      },
      saveDicDetail(isExitTable){
        let i=0;
        if(isExitTable){
          for(i=0;i<this.dicDetail.length;i++){
            if(this.dicDetail[i].code==this.beforeEditDicTableCode){
              this.dicDetail.splice(i,1);
              i--;
            }
          }
          console.log(this.dicDetail);
        }
        for(let i in this.editDetailRow){
          this.dicDetail.push(this.editDetailRow[i]);
        }
        if(this.editOrAdd=='add'){
          this.$api.dicManage.insertDicTable(this.editDicTableName,this.editDicTableCode);
          for(let i in this.editDetailRow){
            this.$api.dicManage.insertDicDetail(this.editDetailRow[i].code,this.editDetailRow[i].value,
              this.editDetailRow[i].isDefault,i+1);
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
            this.selectDetailRow.splice(0);
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

      deleteDicDetail(index,row){
        // for(var i=id;i<this.selectDetailRow.length;i++){
        //   this.selectDetailRow[i].dicId=i;
        //   console.log(this.selectDetailRow[i].dicId);
        // }
        this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.selectDetailRow.splice(index,1);
          for(let i=0;i<this.dicDetail.length;i++){
            if(this.dicDetail.value==row.value){
              this.dicDetail.splice(i,1);
            }
          }
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

      }
    },
    computed: {

      isDicTableFull:function () {
        if(!this.editDicTableName||!this.editDicTableCode){
          return true;
        }
        return false;
      },
      isDicDetailFull:function () {
        for(let i=0;i<this.editDetailRow.length;i++){
          if(!this.editDetailRow[i].isDefault||!this.editDetailRow[i].value){
            return true;
          }
        }
        return false;
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
