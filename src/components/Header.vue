<template>
  <el-row>
    <el-col :span="1" :push="3">
      <img alt="PyPiManager" src="../assets/logo-small.svg" />
    </el-col>
    <el-col :span="3" :push="3">
      <span id="title-name">PyPiManager</span>
    </el-col>
    <el-col :span="7" :push="3">
      <Menu></Menu>
    </el-col>
    <el-col :span="1" :offset="9">
      <el-button type="primary">登录</el-button>
    </el-col>
  </el-row>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "Header",
  components: {
    Menu,
  },
};
</script>

<style scoped>
#title-name {
  font-size: 30px;
  font-weight: bold;
}

.el-row {
  align-items: center;
  justify-content: flex-start;
}
</style>
