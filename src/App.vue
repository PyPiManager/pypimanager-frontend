<template>
    <el-container class="main-container">
    <el-header>
      <Header :userName="userName"></Header>
    </el-header>
    <!-- <el-divider></el-divider> -->
    <el-container>
      <el-aside width="150px">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-main>
          <div v-if="$route.path == '/home'"><Home></Home></div>
          <div v-else-if="$route.path == '/guide'"><Guide></Guide></div>
          <div v-else-if="$route.path == '/packages'"><Packages></Packages></div>
          <div v-else-if="$route.path == '/rank'"><Rank></Rank></div>
        </el-main>
        <el-footer>
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/views/Home.vue'
import Guide from '@/views/Guide.vue'
import Packages from '@/views/Packages.vue'
import Rank from '@/views/Rank.vue'

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Footer,
    Home,
    Guide,
    Packages,
    Rank
  },
  data() {
    return {
      userName: '郭群'
    }
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
}

.main-container {
  height: 100vh;
}

.el-header {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
}

.el-main {
  /* background-color: burlywood; */
}

.el-footer {
  /* background-color: cornsilk; */
}
</style>
