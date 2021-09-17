<template>
  <el-row :justify="center">
    <el-col :span="18" :push="3">
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
