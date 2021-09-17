<template>
  <el-row :justify="center">
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
