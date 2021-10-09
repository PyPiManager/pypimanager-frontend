<template>
  <div id="auth">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="50px"
      class="login-form"
    >
      <el-form-item prop="userName" label="账号">
        <el-input
          placeholder="工号字母大写"
          v-model="ruleForm.userName"
        ></el-input>
      </el-form-item>
      <el-form-item prop="passWord" label="密码" autocomplete="off">
        <el-input
          type="password"
          placeholder="默认为123456"
          v-model="ruleForm.passWord"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="记住">
        <el-switch v-model="ruleForm.remember"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";

import { login } from "../utils/user";


export default {
  name: "Auth",
  data() {
    const checkUserName = (rule, value, callback) => {
      //  账号只能由大写字母开头+4位数字组成
      const regex = /^[A-Z][0-9]{4}$/;
      if (!value.match(regex)) {
        callback(new Error("账号不合法"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        userName: "",
        passWord: "",
        remember: true,
      },
      rules: {
        userName: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { validator: checkUserName, trigger: "blur" },
        ],
        passWord: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "密码位数只能在6~15之间",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.ruleForm.userName, this.ruleForm.passWord);
        } else {
          ElMessage.error("请输入正确的账号和密码");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.login-form {
  width: 300px;
}
</style>
