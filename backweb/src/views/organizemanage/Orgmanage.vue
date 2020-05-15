<template>
  <div>
    <div class="custom-tree-container">
      <div class="block" style="width: 60%">
        <el-tree
          ref="tree"
          :data="schoolData"
          render-after-expand
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
        >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>

        <span>

          <el-button
            type="text"
            size="mini"
            @click="() => append(data)">
            添加
          </el-button>
          <el-dialog title="院校管理" :visible.sync="dialogFormVisible">
            <el-form>
              <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="schoolInf" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="() =>saveEdit(data)">确 定</el-button>
            </div>
          </el-dialog>
          <el-button
            type="text"
            size="mini"
            @click="() => edit(data)">
            编辑
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            删除
          </el-button>
        </span>
      </span>
        </el-tree>
      </div>
    </div>

  </div>

</template>

<script>
  let id=1000;
  export default {
    name: "OrgManage",
    data(){
      return{
        schoolInf:'',
        dialogFormVisible:false,
        tempData:{},
        schoolData:[
          {
            id: 1,
            label: '福州大学',
            isSelect:false,
            children: [{
              id: 4,
              label: '数学与计算机科学学院',
              isSelect:false,
              children: [{
                id: 9,
                label: '计算机技术',
                isSelect:false,
                children:[{
                  id:12,
                  label:'网络工程',
                  isSelect:false,
                },{
                  id:13,
                  label: '人工智能',
                  isSelect:false,
                },{
                  id:14,
                  label: '数据库',
                  isSelect:false,
                }]
              }, {
                id: 10,
                label: '软件工程',
                isSelect:false,
              },{
                id: 11,
                label: '数学',
                isSelect:false,
              }]
            },{
              id:5,
              label:'电气学院',
              isSelect:false,
              children:[{
                id:6,
                label:'电子信息',
                isSelect:false,
              },{
                id:7,
                label:'控制科学与工程',
                isSelect:false,
              },{
                id:8,
                label:'能源动力',
                isSelect:false,
              }]
            }]
          }, {
            id: 2,
            label: '福建师范大学',
            isSelect:false,
            children: [{
              id:15,
              label:'汉语言',
            }]}, {
            id: 3,
            label: '华侨大学',
            isSelect:false,}
        ],
        formLabelWidth: '120px',
      }
    },
    methods: {
      append(data) {
        this.dialogFormVisible=true;
        this.tempData=data;
        // const newChild = {id: id++, label: '', children: []};
        // if (!data.children) {
        //   this.$set(data, 'children', []);
        // }
        // data.children.push(newChild);
      },
      edit(data){

      },
      remove(node, data) {
        console.log(data.label);
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      saveEdit(data){
        this.dialogFormVisible=false;
        const newChild = {id: id++, label: '', children: []};
        newChild.label=this.schoolInf;
        console.log(newChild.id);
        if (!this.tempData.children) {
          this.$set(this.tempData, 'children', []);
        }
        this.tempData.children.push(newChild);
      },
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
