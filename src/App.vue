<template>
<div class="index">
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <div v-if="$route.path == '/home'">
        <Home :userName="userName"></Home>
      </div>
      <div v-else-if="$route.path == '/guide'"><Guide></Guide></div>
      <div v-else-if="$route.path == '/packages'"><Packages></Packages></div>
      <div v-else-if="$route.path == '/rank'"><Rank></Rank></div>
      <div v-else-if="$route.path == '/manage'"><Manage></Manage></div>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Home from "@/views/Home.vue";
import Guide from "@/views/Guide.vue";
import Packages from "@/views/Packages.vue";
import Rank from "@/views/Rank.vue";
import Manage from "@/views/Manage.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Home,
    Guide,
    Packages,
    Rank,
    Manage,
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

.index {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.el-container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.el-footer {
  /* display: flex; */
  height: 4vh;
  width: 100%;
  align-items: center;
}
</style>
