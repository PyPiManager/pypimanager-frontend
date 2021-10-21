<template>
  <el-row>
    <el-col :span="1" :push="3">
        <img
          alt="PyPiManager"
          src="../assets/logo-small.svg"
          style="margin-right: 0.4rem; margin-top: 0.3rem"
        />
    </el-col>
    <el-col :span="3" :push="3">
      <router-link to="/home" custom v-slot="{ navigate }">
        <el-link 
          :underline="false"
          id="title-name"
          @click="navigate"
          @keypress.enter="navigate"
          role="link"
          >PyPiManager</el-link
        >
      </router-link>
    </el-col>
    <el-col :span="9" :push="3">
      <Menu></Menu>
    </el-col>
    <el-col :span="1" :offset="7" route>
      <div v-if="isLogin">
          <el-button
            type="primary"
            @click="bye"
            >退出
            </el-button>
      </div>
      <div v-else>
        <router-link to="/login" custom v-slot="{ navigate }">
          <el-button
            type="primary"
            @click="navigate"
            @keypress.enter="navigate"
            role="link"
            >登录</el-button
          >
        </router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Menu from "@/components/Menu";
import { logout, checkLogin } from "@/utils/user";

export default {
  name: "Header",
  components: {
    Menu,
  },
  data() {
    return {
      isLogin: checkLogin(),
    };
  },
  methods: {
    bye() {
      logout();
    }
  },
};
</script>

<style scoped>
#title-name {
  font-size: 2rem;
  font-weight: bold;
}

.el-row {
  align-items: center;
  justify-content: flex-start;
}
</style>
