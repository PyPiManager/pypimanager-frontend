<template>
  <el-input placeholder="搜索你需要的Python包" v-model="search">
    <template #append>
      <el-button icon="el-icon-search" @click="doSearch"></el-button>
    </template>
  </el-input>
</template>


<script>

import { searchPackage } from "@/utils/search";

export default {
  name: "Search",
  data() {
    return {
      search: "",
      packageData: []
    }
  },
  methods: {
    doSearch() {
      console.log("查询: ", this.search);
      searchPackage(this.search).then(res=>{
        if (res.data["message"] === "ok") {
          this.packageData = res.data["data"];
        } else {
          console.log(res.data["message"])
        }
      })
    }
  },
}
</script>


<style>
.el-button {
  width: 100px;
}
</style>
