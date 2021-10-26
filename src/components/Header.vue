<template>
  <el-row :gutter="5">
    <el-col :span="1" :push="5">
        <img
          alt="PyPiManager"
          src="~@/assets/logo-small.svg"
          style="margin-right: 0.4rem; margin-top: 0.3rem"
        />
    </el-col>
    <el-col :span="2" :push="5">
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
    <el-col :span="7" :push="5">
      <Menu></Menu>
    </el-col>
    <el-col :span="1" :offset="8" route>
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
  font-size: 1.4rem;
  font-weight: bold;
}

.el-row {
  align-items: center;
  justify-content: flex-start;
}

.el-button--primary {
  width: 85px;
}
</style>
