<template>
  <div class="packages">
    安装包概览
    <p>当前共有111个Python安装包</p>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="index" label="#" width="180"> </el-table-column>
      <el-table-column prop="name" label="包名" width="180"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Packages",
  components: {},
};
</script>
