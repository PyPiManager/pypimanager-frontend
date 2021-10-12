<template>
  <el-form
    status-icon
    label-width="80px"
    class="update-role-form"
  >
    <el-form-item prop="username" label="用户名" autocomplete="off"
      ><el-input v-model.trim="username" :disabled="true"></el-input>
    </el-form-item>

    <el-form-item label="用户角色" prop="role">
      <el-radio-group v-model="radio">
        <el-radio label="用户"></el-radio>
        <el-radio label="包管理员"></el-radio>
        <el-radio label="超级管理员"></el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm()">更新</el-button>
    </el-form-item>
  </el-form>
</template>

<script>

import { updateUserRole } from "../utils/user";

export default {
    props: {
        usernameVal: String,
    },
  data() {
    return {
      radio: "用户",
      username: this.usernameVal
    };
  },
  methods: {
    submitForm() {
      updateUserRole(
        this.username,
        this.radio,
      );
    },
  },
};
</script>

<style scoped></style>
