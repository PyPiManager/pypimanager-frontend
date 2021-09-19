<template>
  <el-row :justify="center">
        <el-col :span="14" :push="5">
      <h1 style="font-size: 0.8rem">贡献排行榜</h1>
    </el-col>
        <el-col :span="14" :push="5">
      <p style="font-size: 0.6rem">当前共有x个贡献者</p>
    </el-col>


    <el-col :span="14" :push="5">
      <UploaderRank></UploaderRank>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
import UploaderRank from "@/components/UploaderRank.vue";

export default {
  name: "Rank",
  components: {
    UploaderRank,
  },
};
</script>
