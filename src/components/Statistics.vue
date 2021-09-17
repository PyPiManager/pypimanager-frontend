<template>
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

.stat-info {
  justify-content: space-around;
}
</style>
