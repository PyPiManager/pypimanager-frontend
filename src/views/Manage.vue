<template>
  <el-row >
    <el-col :span="14" :push="5">
      <el-tabs
        tab-position="left"
        v-model="activeName"
        @tab-click="handleClick"
        v-if="isLogin"
      >
        <el-tab-pane label="个人信息" name="profile">
          <el-row>
            <el-col :span="8" :push="6">
              <Profile></Profile>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="包管理" name="package" v-if="['包管理员','超级管理员'].includes(role)"
          >包管理</el-tab-pane
        >
        <el-tab-pane label="用户管理" name="user" v-if="role === '超级管理员'"
          >
          <el-row>
            <el-col :span="8" :push="6">
              <Profile :showMode="showMode"></Profile>
            </el-col>
          </el-row>
          </el-tab-pane
        >
      </el-tabs>
      <div v-else>
        <el-result
          icon="info"
          title="请先登录再操作"
          subTitle="没有账号请联系管理员"
        >
        </el-result>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Profile from "@/components/Profile.vue";

import { checkLogin, getUserRole } from "../utils/user";

export default {
  name: "Manage",
  components: {
    Profile,
  },
  data() {
    return {
      isLogin: checkLogin(),
      role: getUserRole(),
      activeName: "profile",
      showMode: "用户管理"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
#profile {
  display: flex;
}
</style>
