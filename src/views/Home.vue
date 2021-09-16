<template>
  <el-row>
    <el-col :span="20">
      <Search :userName="userName"></Search>
      <Upload></Upload>
      <el-row :align="middle" :justify="start">
        <el-col>
          <span>统计数据</span>
          <span>看看正在发生的事情</span>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <Statistics></Statistics>
      <el-divider></el-divider>
      <Trend></Trend>
      <el-divider></el-divider>
      <UploaderRank></UploaderRank>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import Upload from "@/components/Upload.vue";
import Statistics from "@/components/Statistics.vue";
import UploaderRank from "@/components/UploaderRank.vue";
import Trend from "@/components/Trend.vue";

export default {
  name: "Home",
  props: {
    userName: String,
  },
  components: {
    Search,
    Upload,
    Statistics,
    UploaderRank,
    Trend,
  },
};
</script>

<style scoped>
.el-row {
  justify-content: space-around;
}
</style>
