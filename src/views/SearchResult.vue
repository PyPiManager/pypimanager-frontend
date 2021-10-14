<template>
  <el-row >
    <el-col :span="14" :push="5">
      <h1 style="font-size: 1.6rem">{{ this.package }}查询结果</h1>
    </el-col>
    <el-col :span="14" :push="5">
      <p style="font-size: 1rem">共查询到x个包</p>
    </el-col>
    <el-col :span="14" :push="5">
      <el-table :data="table" stripe style="width: 100%">
        <el-table-column prop="index" label="#" width="180"> </el-table-column>
        <el-table-column prop="package_name" label="包名" width="180"></el-table-column>
        <el-table-column prop="nickname" label="上传人" width="180"></el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: "SearchResult",
  components: {},
  props: {
      packageVal: String,
      tableData: Array,
  },
  data() {
      return {
          package: this.packageVal,
          table: this.tableData,
      }
  },
};
</script>
