<template>
  <div class="container">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="index" label="#" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="number" sortable label="上传贡献数">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          index: 1,
          name: "Tom",
          number: 233,
        },
        {
          index: 2,
          name: "Jack",
          number: 133,
        },
        {
          index: 3,
          name: "Rose",
          number: 33,
        },
        {
          index: 4,
          name: "Bob",
          number: 3,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
