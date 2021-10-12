<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="80px"
    class="add-user-form"
  >
    <el-form-item prop="username" label="用户名" autocomplete="off"
      ><el-input v-model="ruleForm.username"></el-input>
    </el-form-item>

    <el-form-item prop="pass" label="密码" autocomplete="off">
      <el-input
        type="password"
        placeholder="请输入密码"
        v-model="ruleForm.pass"
        show-password
      >
      </el-input>
    </el-form-item>

    <el-form-item prop="checkPass" label="确认密码" autocomplete="off">
      <el-input
        type="password"
        placeholder="请再次输入密码"
        v-model="ruleForm.checkPass"
        show-password
      >
      </el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">更新</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ElMessage } from "element-plus";
import { updateUserPassword } from "../utils/user";

export default {
  export: "Profile",
  data() {
    const verifyPass = (rule, value, callback) => {
      if (this.ruleForm.checkPass !== "") {
        this.$refs.ruleForm.validateField("checkPass");
      }
      callback();
    };
    const verifyCheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致"));
      } else callback();
    };
    return {
      ruleForm: {
        username: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
        pass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "密码位数只能在6~15之间",
            trigger: "blur",
          },
          { validator: verifyPass, trigger: "blur" },
        ],
        checkPass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "密码位数只能在6~15之间",
            trigger: "blur",
          },
          { validator: verifyCheckPass, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          updateUserPassword(
            this.ruleForm.oldPass,
            this.ruleForm.newPass,
            this.ruleForm.username
          );
        } else {
          ElMessage.error("请输入正确的密码");
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
.update-password-form {
  width: 300px;
}
</style>
