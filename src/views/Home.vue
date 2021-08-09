<template>
  <div class="home">
    <div>
      <Search></Search>
      <Upload></Upload>
      <el-divider></el-divider>
      <Statistics></Statistics>
      <el-divider></el-divider>
      <div class="bottom">
        <div class="hot-user">
          <UploaderRank></UploaderRank>
        </div>
        <div class="trend">
          <Trend></Trend>
        </div>
      </div>
    </div>
  </div>
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
.bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.hot-user {
  width: 45%;
}

.trend {
  width: 45%;
}
</style>
