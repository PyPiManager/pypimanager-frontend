<template>
  <el-row >
    <el-col :span="14" :push="5">
      <h1 style="font-size: 1.6rem">安装包概览</h1>
    </el-col>
    <el-col :span="14" :push="5">
      <p style="font-size: 1rem">当前共有111个Python安装包</p>
    </el-col>
    <el-col :span="14" :push="5">
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
