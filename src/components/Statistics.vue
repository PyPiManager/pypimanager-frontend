<template>
  <div id="container">
    <div id="title">
      <el-space :size="12" spacer="|">
        <h2>统计数据</h2>
      </el-space>
      <el-space :size="12" spacer="|">
        <h3>看看正在发生的事情</h3>
      </el-space>
    </div>
    <div class="stat-info">
      <StatCard></StatCard>
      <StatCard></StatCard>
      <StatCard></StatCard>
      <StatCard></StatCard>
      <StatCard></StatCard>
    </div>
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

#container {
  flex-direction: column;
}

#title {
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-end;
}

.stat-info {
  justify-content: space-around;
}
</style>
