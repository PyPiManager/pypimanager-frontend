<template>
  <div id="title">
    <el-space :size="12" spacer="|">
      <p style="font-size: 26px">统计数据</p>
    </el-space>
    <el-space :size="12" spacer="|">
      <p style="font-size: 15px">看看正在发生的事情</p>
    </el-space>
  </div>
  <div class="stat-info">
    <StatCard></StatCard>
    <StatCard></StatCard>
    <StatCard></StatCard>
    <StatCard></StatCard>
    <StatCard></StatCard>
  </div>
</template>

<script>
import StatCard from "@/components/StatCard.vue";

export default {
  name: "Statisticcs",
  components: {
    StatCard,
  },
};
</script>

<style scoped>
div {
  display: flex;
}

#title {
  justify-content: flex-start;
  align-items: baseline;
}

.stat-info {
  justify-content: space-around;
}
</style>
