<template>
  <el-container>
    <el-header>
      <Header :userName="userName"></Header>
    </el-header>
    <el-main>
      <div v-if="$route.path == '/home'">
        <Home></Home>
      </div>
      <div v-else-if="$route.path == '/guide'"><Guide></Guide></div>
      <div v-else-if="$route.path == '/packages'"><Packages></Packages></div>
      <div v-else-if="$route.path == '/rank'"><Rank></Rank></div>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Home from "@/views/Home.vue";
import Guide from "@/views/Guide.vue";
import Packages from "@/views/Packages.vue";
import Rank from "@/views/Rank.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Home,
    Guide,
    Packages,
    Rank,
  },
  data() {
    return {
      userName: "热爱技术的同学",
    };
  },
};
</script>

<style>
#app {
  font-family: "PingFang SC", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
