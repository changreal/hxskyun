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
          <el-table :data="selectDetailRow" style="width: 100%" highlight-current-row max-height="500px" v-show="isSelect" >
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
                <span>{{scope.row.isDefault}}</span>
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
    <el-dialog title="字典管理" :visible.sync="dialogVisible" width="500px" >
<!--      <el-alert v-show="isDicTableFull" title="字典表存在未输入值" type="info" style="margin-top: 0px"></el-alert>-->
<!--      <el-alert v-show="isDicDetailFull&&!isDicTableFull" title="字典明细表存在未输入值" type="info" style="margin-top: 0px"></el-alert>-->
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
            <el-button size="mini" type="danger" icon="el-icon-delete" @click="deleteEditDetail(scope.$index,scope.row)">
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="width: 100%" align="center">
        <el-button  style="width: 60%;margin: 5px" size="small" type="primary" @click="addDicDetail">新增</el-button>
        <el-button  style="width: 60%;margin: 5px" size="small" type="success" :disabled="isDicDetailFull||isDicTableFull" @click="saveDicTable">保存</el-button>
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
          {id:0, code: 'sex', value: '男', isDefault: '否'},
          {id:0, code: 'sex', value: '女', isDefault: '否'},
          {id:0, code: 'role', value: '学生', isDefault: '是'},
          {id:0, code: 'role', value: '教师', isDefault: '否'},
          {id:0, code: 'role', value: '管理员', isDefault: '否'},
          {id:0, code: 'education', value: '大学本科', isDefault: '是'},
          {id:0, code: 'education', value: '研究生', isDefault: '否'},
          {id:0, code: 'education', value: '高中生', isDefault: '否'},
          {id:0, code: 'classType', value: '学校课程', isDefault: '是'},
          {id:0, code: 'classType', value: '个人课程', isDefault: '否'}
        ],
        dialogVisible:false,
        isSelect: false,//是否选择了字典表
        editDicTableName:'',  //字典表名
        editDicTableCode:'',  //字典表编码
        beforeEditDicTableCode:'',
        beforeEditDicTableName:'',
        editDicTableId:0,     //字典表Id（这个怎么用还要考虑
        newDicTableId:0,     //新字典表Id
        selectDetailRow: [{ code: '', value:'',isDefault:''}],  //选择某一字典表时展示用
        addDicRow:{id:0, name:'', code:''}, //新增字典表时用
        editDetailRow: [{id:0,code: '', value:'',isDefault:''}],//用于保存编辑字典
        editOrAdd:'',
      }
    },
    methods: {
      getDicTableAll(){
        let tempDicTable;
        tempDicTable=this.$api.dicManage.getDicTableAll()
        .then(response=>{
          tempDicTable=response;
          for(let i=0;i<tempDicTable.data.data.length;i++){
            this.dicTable.push({id:tempDicTable.data.data[i].dictId,
              name:tempDicTable.data.data[i].type,
              code:tempDicTable.data.data[i].itemKey})
          }
        }).catch(error=>{
          console.log(error);
          })
      },
      getDicDetailAll(){
        let tempDicDetail;
        tempDicDetail=this.$api.dicManage.getDicDetailAll()
          .then(response =>{
            tempDicDetail=response;
            for(let i=0;i<tempDicDetail.data.data.length;i++){
              let isDefaultToNum;
              if(tempDicDetail.data.data[i].isDefault=='1'){
                isDefaultToNum='是'
              }else {
                isDefaultToNum='否'
              }
              this.dicDetail.push({id:tempDicDetail.data.data[i].dictId,
                code:tempDicDetail.data.data[i].itemKey,
                value: tempDicDetail.data.data[i].itemValue,
                isDefault: isDefaultToNum});
            }
          }).catch(error=>{
            console.log(error);
          });
      },
      editDicDetail(){
        for(let i=0;i<this.editDetailRow.length;i++){
          this.$api.dicManage.insertDicDetail(this.editDetailRow[i].code,this.editDetailRow[i].value,
            this.editDetailRow[i].isDefault,i+1)
            .then(response=>{
              console.log(response);
            });
        }
        this.dicDetail.splice(0);
        //  最终选择通通把dicDetail的内容删了，而数据库中的内容耀东也要清除，所以都一样。嘻嘻
        setTimeout(this.getDicDetailAll,800);
      },
      /*
      以上方法用于直接调用访问数据库接口
       */
      selectDicTable(){
        this.selectDetailRow.splice(0);
        //暂做测试用按钮
        console.log(this.dicTable);
        console.log(this.dicDetail);
      },
      addDicTable(){
        this.beforeEditDicTableCode='';
        this.beforeEditDicTableName=''
        this.editDicTableName='';
        this.editDicTableCode='';
        this.editDetailRow=[{id:0, code: '', value:'',isDefault:''}];
        this.editOrAdd='add';
        this.dialogVisible=true;
      },
      selectDicRow(row, event, column){
        let isExistCode=true;
        this.selectDetailRow.splice(0);
        for(let i in this.dicDetail){
          if(this.dicDetail[i].code==row.code){
            this.selectDetailRow.push(this.dicDetail[i]);
            isExistCode=false;
          }
        }
        this.isSelect=true;
      },
      editDicTable(index,row){
        this.dialogVisible=true;
        this.editDetailRow.splice(0);
        for(let i=0;i<this.dicDetail.length;i++){
          if(this.dicDetail[i].code==row.code){
            this.editDetailRow.push(this.dicDetail[i]);
          }
        }
        this.editDicTableCode=row.code;
        this.editDicTableName=row.name;
        this.beforeEditDicTableCode=row.code;
        this.beforeEditDicTableName=row.name;
        this.editOrAdd='edit';
        this.tempCode = this.dicTable[index].code;
      },
      addDicDetail(){
        let addDetailRow={id:0 , code: '', value:'',isDefault:''};
        this.editDetailRow.push(addDetailRow);    //编辑的dialog里新增一行字典明细
      },
      saveDicTable(){
        let editDicTableRow=-1;
        let isEditCode=false;
        let newDicTableId;
        let newDicDetailId;
        let tempDicDetail;
        let isDefaultTrf;
        if(this.editOrAdd=='add'){
          this.$api.dicManage.insertDicTable(this.editDicTableName, this.editDicTableCode)
          .then(response=>{
            newDicTableId=response.data.data;
            console.log(this.editDicTableName);//里面没有输出应该是因为在这里，this.editDicTable变成形参了
          }).catch(error=>{
            console.log(error)
          })

          console.log('newDicTableId='+newDicTableId);
          this.dicTable.splice(0);
          this.getDicTableAll();
          for(let i=0;i<this.editDetailRow.length;i++){
            this.editDetailRow[i].code=this.editDicTableCode;
          }
          setTimeout(this.editDicDetail,800);
        }
        if(this.editOrAdd=='edit') {
          if(this.beforeEditDicTableCode!=this.editDicTableCode||this.beforeEditDicTableName!=this.editDicTableName){
            for(let i in this.dicTable){
              if(this.dicTable[i].code == this.beforeEditDicTableCode){
                this.dicTable[i].code = this.editDicTableCode;
                this.dicTable[i].Name = this.editDicTableName;
                this.$api.dicManage.editDicTable(this.dicTable[i].id,this.dicTable[i].name,this.dicTable[i].code)
                .then(response=>{
                  console.log('更新字典类型表成功');
                })
              }
            }
            for(let i=0;i<this.editDetailRow.length;i++){
              this.editDetailRow[i].code=this.editDicTableCode;
            }
            this.selectDetailRow.splice(0);
            setTimeout(this.editDicDetail,800);
          }else {   //修改字典明细，未修改字典类型
            for(let i=0;i<this.editDetailRow.length;i++){
              if(this.editDetailRow[i].id){
                this.$api.dicManage.editDicDetail(this.editDetailRow[i].id,this.editDetailRow[i].code,
                  this.editDetailRow[i].value,this.editDetailRow[i].isDefault,i+1)
                .then(response=>{
                  console.log('对已存在字典明细表修改');
                });
              }else {
                this.editDetailRow[i].code=this.editDicTableCode;
                this.$api.dicManage.insertDicDetail(this.editDetailRow[i].code,this.editDetailRow[i].value,
                this.editDetailRow[i].isDefault,i+1)
                .then(response=>{
                  console.log(response);
                  console.log('对尚未存在的字典明细表进行添加');
                });
              }
            }
            this.dicDetail.splice(0);
            this.selectDetailRow.splice(0);
            setTimeout(this.getDicDetailAll,800);
          }
          // for (i in this.dicTable) {
          //   if (this.dicTable[i].code == this.beforeEditDicTableCode) {
          //     this.dicTable[i].code = this.editDicTableCode;
          //     this.dicTable[i].name = this.editDicTableName;
          //     editDicTableRow = i;
          //   }
          // }
        }

        this.dialogVisible=false;
      },
      deleteDicTable(index,row) {
        console.log(row.id);
        this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          this.$api.dicManage.deleteDicTable(row.id)
            .then(response=>{
              console.log('字典类型表删除成功');
            }).catch(error=>{
            console.log(error);
          });
          this.dicTable.splice(0);
          setTimeout(this.getDicTableAll,500);
          this.selectDetailRow.splice(0);
        }).catch(error=>{
          this.$message({
            type: 'error',
            message: err,
          })
        })
      },
      deleteDicDetail(index,row){
        this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$api.dicManage.deleteDicDetail(row.id)
          .then(response=>{
            console.log(response);
            this.dicDetail.splice(0);
            this.selectDetailRow.splice(index,1);
            this.getDicDetailAll();
          })
        }).catch((err) => {
          this.$message({
            type: 'error',
            message: err
          })
        })

      },
      deleteEditDetail(index,row){
        if(row.id){
          this.editDetailRow.splice(index,1);
          this.$api.dicManage.deleteDicDetail(row.id)
          .then(response=>{
            console.log(response);
          })
        }else {
          this.editDetailRow.splice(index,1);
        }
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
    },
    created() {
      let tempDicTable;
      let tempDicDetail;
      this.dicTable=[];
      this.dicDetail=[];
      tempDicTable=this.$api.dicManage.getDicTableAll()
      .then(response =>{
        tempDicTable=response;
        for(let i=0;i<tempDicTable.data.data.length;i++){
          this.dicTable.push({id:tempDicTable.data.data[i].dictId,
            name:tempDicTable.data.data[i].type,
            code:tempDicTable.data.data[i].itemKey})
        }
      }).catch(error=>{
        console.log(error);
        });
      // this.$api.dicManage.getDicDetailAll()
      //   .then(response=>{
      //     tempDicDetail=response;
      //     for(let i=0;i<tempDicDetail.data.data.length;i++){
      //       this.dicDetail.push({id:tempDicDetail.data.data[i].dictId,
      //         code:tempDicDetail.data.data[i].itemKey,
      //         value: tempDicDetail.data.data[i].itemValue,
      //         isDefault: tempDicDetail.data.data[i].isDefault});
      //     }
      //   })
      tempDicDetail=this.$api.dicManage.getDicDetailAll()
        .then(response =>{
          tempDicDetail=response;
          for(let i=0;i<tempDicDetail.data.data.length;i++){
            let isDefaultToNum;
            if(tempDicDetail.data.data[i].isDefault=='1'){
              isDefaultToNum='是'
            }else {
              isDefaultToNum='否'
            }
            this.dicDetail.push({id:tempDicDetail.data.data[i].dictId,
            code:tempDicDetail.data.data[i].itemKey,
            value: tempDicDetail.data.data[i].itemValue,
            isDefault: isDefaultToNum});
          }
        }).catch(error=>{
          console.log(error);
        });
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
