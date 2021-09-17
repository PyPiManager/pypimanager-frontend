<template>
  <el-row :justify="center">
    <el-col :span="18" :push="3">
      <Search :userName="userName"></Search>
    </el-col>
    <el-col :span="18" :push="3">
      <Upload></Upload>
    </el-col>
    <el-divider></el-divider>
    <el-col :span="18" :push="3">
      <Statistics></Statistics>
    </el-col>
    <el-col :span="18" :push="3">
      <Trend></Trend>
    </el-col>
    <el-col :span="18" :push="3">
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
