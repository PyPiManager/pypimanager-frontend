<template>
  <el-menu :default-active="$route.path" mode="horizontal" router>
    <el-menu-item index="/home">
      <i class="el-icon-s-home"></i>
      <template #title>主页</template>
    </el-menu-item>
    <el-menu-item index="/guide">
      <i class="el-icon-document"></i>
      <template #title>指导</template>
    </el-menu-item>
    <el-menu-item index="/packages">
      <i class="el-icon-files"></i>
      <template #title>概览</template>
    </el-menu-item>
    <el-menu-item index="/rank">
      <i class="el-icon-s-data"></i>
      <template #title>排行</template>
    </el-menu-item>
    <el-menu-item index="/manage">
      <i class="el-icon-setting"></i>
      <template #title>管理</template>
    </el-menu-item>
  </el-menu>
</template>

<script>


export default {
  name: "Menu",
};
</script>

<style scoped></style>
