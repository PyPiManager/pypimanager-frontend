<template>
  <el-input placeholder="搜索你需要的Python包" v-model="search" @keydown.enter="doSearch">
    <template #append>
          <el-button
          type="info"
          icon="el-icon-search"
            @click="doSearch"
            >查询</el-button
          >
    </template>
  </el-input>
</template>


<script>

export default {
  name: "Search",
  data() {
    return {
      search: "",
    }
  },
  methods: {
    doSearch() {
      this.$router.push({path: "/result", query: {package: this.search}})
    }
  },
}
</script>


<style>
.el-button {
  width: 100px;
}
</style>
