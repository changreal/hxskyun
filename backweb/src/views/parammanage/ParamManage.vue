<template>
  <div>
    <el-table :data="params" style="width: 100%" row-key="id" lazy
              :tree-props="{children:'children',hasChildren:'hasChildren'}" highlight-current-row max-height="500px">
      <el-table-column fixed prop="id" label="编号"></el-table-column>
      <!--      <el-table-column fixed label="班课号" prop="classNum"></el-table-column>-->
      <el-table-column fixed label="班课名" prop="className"></el-table-column>
      <el-table-column fixed label="参数名" prop="paramName"></el-table-column>
      <el-table-column fixed label="参数值" prop="value"></el-table-column>
      <el-table-column fixed label="备注" prop="note"></el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button v-show="!isEdit&&scope.row.className!=null" type="warning" size="mini" @click="editParam(scope.$index,scope.row)">编辑</el-button>
          <el-button v-show="isEdit&&scope.row.className!=null" type="success" size="mini"  @click="saveParam(scope.$index,scope.row)">保存</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible="dialogVisible" width="400px">
      <h3>{{className}}</h3>
      <el-form align="center">
        <el-form-item label="签到得分" label-width="formLabelWidth">
          <el-input v-model="param1Value" size="small" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="签到距离" label-width="formLabelWidth">
          <el-input v-model="param2Value" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="作业得分" label-width="formLabelWidth">
          <el-input v-model="param3Value" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item align="center">
          <el-button type="success" size="small" @click="saveParam">保存</el-button>
          <el-button type="primary" size="small" @click="dialogVisible=false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "ParamManage",
    data(){
      return{
        isEdit:false,
        params:[
          {
            id:'1000',className: '工程实训',children:[{
              id:'10001',paramName:'签到得分',value:'2',note:'签到一次所得积分',
            },{
              id:'10002',paramName:'签到距离',value:'1',note:'签到距离范围（km）',
            },{
              id:'10003',paramName:'作业得分',value:'10',note:'一次作业最高得分',
            }]
          },
          {
            id:'1001',className: '人工智能',children:[{
              id:'10011',paramName:'签到得分',value:'2',note:'签到一次所得积分',
            },{
              id:'10012',paramName:'签到距离',value:'1',note:'签到距离范围（km）',
            },{
              id:'10013',paramName:'作业得分',value:'10',note:'一次作业最高得分',
            }]
          },
          {
            id:'1002',className: '大数据分析',children:[{
              id:'10021',paramName:'签到得分',value:'2',note:'签到一次所得积分',
            },{
              id:'10022',paramName:'签到距离',value:'1',note:'签到距离范围（km）',
            },{
              id:'10023',paramName:'作业得分',value:'10',note:'一次作业最高得分',
            }]
          },
        ],
        formLabelWidth: '100px',
        dialogVisible:false,
        className:'',
        classId:'',
        param1Value:'',
        param2Value:'',
        param3Value:'',
      }
    },
    methods:{
      editParam(index,row){
        this.dialogVisible=true;
        this.className=row.className;
        this.classId=row.id
        this.param1Value=row.children[0].value;
        this.param2Value=row.children[1].value;
        this.param3Value=row.children[2].value;
      },
      saveParam(){
        for(let i in this.params){
          if(this.params[i].id==this.classId){
            this.params[i].children[0].value=this.param1Value;
            this.params[i].children[1].value=this.param2Value;
            this.params[i].children[2].value=this.param3Value;
          }
        }
        this.dialogVisible=false;
      }
    }
  }
</script>

<style scoped>

</style>
