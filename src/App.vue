<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div><input type="checkbox" v-model="linkTable" /> 联动表单</div>
    <div class="wl-gantt-demo">
      <wlGantt
        ref="wl-gantt-demo"
        use-real-time
        :end-date="endTime"
        :start-date="startTime"
        date-type="monthAndDay"
        :data="data"
        :columns="columns"
        :edit="true"
        :linkTable="linkTable"
        :rowClassName="tableRowClassName"
        :contextMenuOptions="contextMenuOptions"
        @selection-change="selectionChange"
        @expand-change="expandChange"
        @timeChange="timeChange"
        @taskRemove="taskRemove"
        @preChange="preChange"
        @taskAdd="taskAdd"
        @taskEdit="taskEdit"
        @cell-mouse-enter="cellMouseEnter"
      >
        <template slot="soltBtn" slot-scope="{ row }">
          <!-- <el-button @click="aaa(row)" size="mini">asd</el-button> -->
          <el-dropdown
            class="new-dropdown"
            @command="handleCommand($event, row)"
          >
            <span class="el-dropdown-link" style="color: blue">
              操作<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="add">新增</el-dropdown-item>
              <el-dropdown-item command="update">修改</el-dropdown-item>
              <el-dropdown-item command="remove">删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
        <template slot="prv">
          <el-table-column
            prop="standardProgress"
            label="标准进度"
            fixed
            align="center"
          >
          </el-table-column>
          <el-table-column prop="submitDoc" label="交付物" fixed align="center">
          </el-table-column>
          <el-table-column prop="status" label="状态" fixed align="center">
            <template slot-scope="scope">
              <!-- 0未锁定  1锁定 -->
              <span>
                {{ scope.row.statusText }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            prop="lockStatus"
            label="锁定否"
            fixed
            align="center"
          >
            <template slot-scope="scope">
              <!-- 0未锁定  1锁定 -->
              <i
                :class="
                  scope.row.lockStatus == 0 ? 'el-icon-unlock' : 'el-icon-lock'
                "
              ></i>
            </template>
          </el-table-column>
          <el-table-column prop="btn" label="操作" fixed align="center">
            <template slot-scope="scope">
              <el-button @click="abc(scope)">ccc</el-button>
            </template>
          </el-table-column>
        </template>
        <template #info-card="{ row }">
          <ul>
            <li>
              <label for="name">名称：</label
              ><span id="name">{{ row.name }}</span>
            </li>
          </ul>
        </template>
      </wlGantt>
    </div>
  </div>
</template>

<script>
import WlGantt from "@/pages/wl-gantt";

export default {
  name: "app",
  watch: {
    checked(val) {
      this.linkTable = val

      console.log(val, 22222, this.endTime);
    }
  },
  data() {
    return {
      vale1111: '',
      endTime: '2019-09-30',
      startTime: '2019-09-01',
      linkTable: false,
      projectTime: {},
      checked: true,
      data: [{ "id": "1458995144703324161", "parentId": 0, "name": "项目终验与归档", "startDate": "2019-09-03", "endDate": "2019-09-30", "realStartDate": "2019-09-10", "realEndDate": "2019-09-25", "standardProgress": -1, "realProgress": -1, "submitDoc": "终验报告,源代码,验收评价", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 1, "children": [{ "id": "1458995148130070530", "parentId": "1458995144703324161", "name": "项目归档", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "终验报告,源代码,验收评价", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [], "hasChildren": false }, { "id": "1458995148557889538", "parentId": "1458995144703324161", "name": "项目终验", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "终验报告,源代码,验收评价", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [], "hasChildren": false }], "hasChildren": true }, { "id": "1458995145126948865", "parentId": 0, "name": "上线试运行", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "试运行报告", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [], "hasChildren": false }, { "id": "1458995145550573570", "parentId": 0, "name": "系统初验", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "系统初验报告,初验问题清单", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [], "hasChildren": false }, { "id": "1458995145986781186", "parentId": 0, "name": "测试", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "测试", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [{ "id": "1458995148994097154", "parentId": "1458995145986781186", "name": "验收测试", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [], "hasChildren": false }, { "id": "1458995149421916162", "parentId": "1458995145986781186", "name": "系统测试", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [], "hasChildren": false }, { "id": "1458995149874900993", "parentId": "1458995145986781186", "name": "集成测试", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [], "hasChildren": false }, { "id": "1458995150298525697", "parentId": "1458995145986781186", "name": "单元测试", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [], "hasChildren": false }], "hasChildren": true }, { "id": "1458995146414600193", "parentId": 0, "name": "编码", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "编码", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [], "hasChildren": false }, { "id": "1458995146846613506", "parentId": 0, "name": "详细设计", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "详细设计说明书", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [], "hasChildren": false }, { "id": "1458995147270238209", "parentId": 0, "name": "概要设计", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [{ "id": "1458995150722150401", "parentId": "1458995147270238209", "name": "概要设计终审", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [], "hasChildren": false }, { "id": "1458995151166746625", "parentId": "1458995147270238209", "name": "概要设计评审", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [], "hasChildren": false }, { "id": "1458995151586177026", "parentId": "1458995147270238209", "name": "概要初步设计", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [], "hasChildren": false }], "hasChildren": true }, { "id": "1458995147698057217", "parentId": 0, "name": "需求分析", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "需求规格说明书", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [{ "id": "1458995152009801730", "parentId": "1458995147698057217", "name": "需规评审", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [], "hasChildren": false }, { "id": "1458995152437620738", "parentId": "1458995147698057217", "name": "创建逻辑模型", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [], "hasChildren": false }, { "id": "1458995152869634049", "parentId": "1458995147698057217", "name": "需求调研", "startDate": "", "endDate": "", "realStartDate": "", "realEndDate": "", "standardProgress": -1, "realProgress": -1, "submitDoc": "", "status": "1", "statusText": "未提交", "sort": 0, "lockStatus": 0, "children": [], "hasChildren": false }], "hasChildren": true }],
      selected: [], // 选中数据
      contextMenuOptions: [
        { label: "任务名称", prop: "name" },
        { label: "交付物", prop: 'submitDoc' },
        { label: "开始时间", prop: "startDate" },
        { label: "结束时间", prop: "endDate" },
      ],
      columns: [{ type: 'index' }, { type: "name", minWidth: 200, colType: "expand" }], // 可通过此参数配置列。其中内置有名称name、开始日期startDate、结束日期endDate、前置任务preTask，如果cloumns中有type等于这四个且slot为false时，将使用内置代码，当然除了内容使用内置代码，其他字段你还拥有配置权。另外如果不是为了配置内置列参数，slot中的prv和default仍可以用来自定义列
    };
  },
  mounted() {
    this.data = this.setTreeTable(this.data)
    console.log(this.data, 'dada');
  },
  computed: {
    droKey() {
      return new Date().getTime()
    }
  },
  methods: {
    abc(row) {
      console.log(row);
    },
    aaa(row) {
      // debugger
      console.log(1111, row);
    },
    //隐藏按钮插槽
    showSoltBtn(index) {
      if (index == this.showIndex) {
        return true
      } else {
        return false
      }
    },
    cellMouseEnter(row, e) {
      // console.log(row);
    },
    tableRowClassName({ row, rowIndex }) {
      row.indexs = rowIndex
      return { row, rowIndex }
    },
    handleCommand(command, row) {

      console.log(command, '....', row);
    },
    setTreeTable(data) {
      let list = []
      data.forEach((e) => {
        delete e.hasChildren
        if (e.children) {
          this.setTreeTable(e.children)
        }
        list.push(e)
      });
      return list
    },
    aa(row) {
      console.log(row, 99);
    },
    /**
     * 时间发生更改
     * row: Object 当前行数据c
     */
    timeChange(row) {
      console.log("时间修改:", row);
    },
    //修改任务
    taskEdit(row) {
      console.log("修改任务", row);
    },
    //
    /**
     * 前置任务发生更改
     * row: Object 当前行数据
     * oldval: [String, Array] 前置修改前的旧数据
     * handle: Boolean 是否用户编辑产生的改变
     */
    preChange(row, oldval, handle) {
      console.log("前置修改:", row, oldval, handle);
    },
    // 数表展开行
    expandChange(row, expanded) {
      console.log("展开行:", row, expanded);
    },
    // 多选选择
    selectionChange(/* val */) {
      // console.log("多选：", val);
    },
    // 删除任务
    taskRemove(item) {
      console.log("删除任务：", item);
    },
    // 添加任务
    taskAdd(item) {
      console.log("添加任务：", item);
      // 非懒加载方式直接设置子数据
      /* this.$set(
        item,
        "children",
        item.children.concat([
          {
            pid: item.id,
            id: "###",
            name: "一轮新月",
            startDate: "2019-10-11",
            endDate: "2019-10-19"
          }
        ])
      ); */
      this.$refs["wl-gantt-demo"].loadTreeAdd(item.id, [
        {
          pid: item.id,
          id: "###",
          name: "一轮新月",
          startDate: "2019-10-11",
          endDate: "2019-10-19",
        },
      ]);
    },
    // 懒加载
    lazyLoad(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: "1-1-1",
            pid: tree.id,
            name: "日落云巅",
            startDate: "2019-09-10",
            endDate: "2019-09-13",
          },
        ]);
      }, 1000);
    },
  },
  components: {
    WlGantt,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px 25px 0;
}

.wl-gantt-demo {
  margin: 40px auto;
  // width: 800px;
  // .new-dropdown{

  // }
}
</style>
