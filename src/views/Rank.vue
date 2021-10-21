<template>
  <el-row>
    <el-col :span="14" :push="5">
      <h1 style="font-size: 1.6rem">贡献排行榜</h1>
    </el-col>

    <el-col :span="14" :push="5">
      <RankTable></RankTable>
    </el-col>
  </el-row>
</template>

<script>
import RankTable from "@/components/RankTable";

export default {
  name: "Rank",
  components: {
    RankTable
  },
};
</script>
