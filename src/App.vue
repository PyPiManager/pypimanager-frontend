<template>
    <el-container class="main-container">
    <el-header>
      <Head></Head>
    </el-header>
    <el-container>
      <el-aside>
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

import Head from '@/components/Head.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'App',
  components: {
    Head,
    Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  /* margin-top: 60px; */
}

.main-container {
  height: 100%;
}

.el-header {
  background-color: azure;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
}

.el-aside {
  background-color: bisque;
  width: 200px;
}

.el-main {
  background-color: burlywood;
}

.el-footer {
  background-color: cornsilk;
}
</style>
