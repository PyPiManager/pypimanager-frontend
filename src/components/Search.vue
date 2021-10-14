<template>
  <el-input placeholder="搜索你需要的Python包" v-model="search">
    <template #append>
        <router-link to="/result" custom v-slot="{ navigate }">
          <el-button
          icon="el-icon-search"
            @click="navigate,doSearch"
            @keypress.enter="navigate"
            role="link"
            >查询</el-button
          >
        </router-link>
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
