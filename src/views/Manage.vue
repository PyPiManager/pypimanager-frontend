<template>
  <el-row :justify="center">
    <el-col :span="14" :push="5">
      <h1 style="font-size: 0.8rem">系统管理</h1>
    </el-col>
    <el-col :span="14" :push="5">
      <p style="font-size: 0.6rem">包管理</p>
    </el-col>
    <el-col :span="14" :push="5">
      <p style="font-size: 0.6rem">用户管理</p>
      <Profile></Profile>
    </el-col>
  </el-row>
</template>

<script>

import Profile from "@/components/Profile.vue"

export default {
  name: "Manage",
    components: {
    Profile,
  },
};
</script>

<style scoped></style>
