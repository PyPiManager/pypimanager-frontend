<template>
  <el-row>
    <el-col :span="1" :push="3">
      <router-link to="/home" custom v-slot="{ navigate }">
      <img
        alt="PyPiManager"
        src="../assets/logo-small.svg"
        style="margin-right: 0.4rem"
        @click="navigate" @keypress.enter="navigate" role="link"
      />
      </router-link>
    </el-col>
    <el-col :span="3" :push="3">
      <router-link to="/home" custom v-slot="{ navigate }">
      <span id="title-name" @click="navigate" @keypress.enter="navigate" role="link">PyPiManager</span>
      </router-link>
    </el-col>
    <el-col :span="9" :push="3">
      <Menu></Menu>
    </el-col>
    <el-col :span="1" :offset="7" route>
      <router-link to="/login" custom v-slot="{ navigate }">
        <el-button type="primary" @click="navigate" @keypress.enter="navigate" role="link">登录</el-button>
      </router-link>
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
  font-size: 1rem;
  font-weight: bold;
}

.el-row {
  align-items: center;
  justify-content: flex-start;
}
</style>
