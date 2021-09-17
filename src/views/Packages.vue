<template>
  <el-row :justify="center">
    <el-col :span="18" :push="3">
      <h1>安装包概览</h1>
    </el-col>
    <el-col :span="18" :push="3">
      <p>当前共有111个Python安装包</p>
    </el-col>
    <el-col :span="18" :push="3">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="index" label="#" width="180"> </el-table-column>
        <el-table-column prop="name" label="包名" width="180">
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Packages",
  components: {},
};
</script>
