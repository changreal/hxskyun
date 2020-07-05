<template>
  <div>
    <el-table :data="classInf" style="width: 100%"
              stripe highlight-current-row>
      <el-table-column fixed prop="courseId" label="班课编码"></el-table-column>
      <!--      <el-table-column fixed label="班课号" prop="classNum"></el-table-column>-->
      <el-table-column fixed label="班课名" prop="courseName"></el-table-column>
      <el-table-column fixed label="课程学期" prop="courseSemester"></el-table-column>
      <el-table-column fixed label="课程状态" prop="endClassStatus"></el-table-column>
      <el-table-column fixed label="课程描述" prop="classDes"></el-table-column>
      <el-table-column fixed label="教师编号" prop="teachId"></el-table-column>
      <el-table-column fixed label="教师名" prop="teacherName"></el-table-column>
      <el-table-column align="center" label="课程管理">
        <template slot-scope="scope">
          <el-button type="warning" size="small" @click="editClassStatus(scope.$index,scope.row)">更改课程状态</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialogVisible"  width="400px">
      <h3>{{editClass.courseName}}课程状态</h3>
      <el-form>
        <el-form-item align="center">
          <template>
            <el-radio v-model="editClass.endClassStatus" label="未开始"></el-radio>
            <el-radio v-model="editClass.endClassStatus" label="进行中"></el-radio>
            <el-radio v-model="editClass.endClassStatus" label="已结课"></el-radio>
          </template>
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
        classInf:[],
        formLabelWidth: '100px',
        dialogVisible:false,
        editClass:[],
        className:'',
        classId:'',
        classStatus:''
      }
    },
    methods:{
      editClassStatus(index,row){
        this.editClass=row;
        this.dialogVisible=true;
      },
      saveParam(){
        this.$api.classManage.editClassById(this.editClass)
        .then(response=>{})
        this.dialogVisible=false;
      }
    },
    created() {
      this.$api.classManage.getClassAll()
      .then(response=>{
        // console.log(response);
        for(let i=0;i<response.data.data.length;i++){
          this.classInf.push(response.data.data[i]);
        }
      })
    }
  }
</script>

<style scoped>

</style>
