<template>
  <el-row :justify="center">
    <el-col :span="14" :push="5">
      <Search :userName="userName"></Search>
    </el-col>
    <el-col :span="14" :push="5">
      <Upload></Upload>
    </el-col>
    <el-col :span="14" :push="5">
      <el-divider content-position="left"
        ><span style="font-size: 25px">统计数据 </span>
        <el-divider direction="vertical"></el-divider>
        <span style="font-size: 17px"> 看看正在发生的事情</span></el-divider
      >
    </el-col>
    <el-col :span="14" :push="5">
      <Statistics></Statistics>
    </el-col>
    <el-col :span="14" :push="5">
      <Trend></Trend>
    </el-col>
    <el-col :span="14" :push="5">
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

<style scoped></style>
