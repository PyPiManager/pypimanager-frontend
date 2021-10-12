<template>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="80px"
      class="update-password-form"
    >

      <el-form-item prop="username" label="用户名" autocomplete="off"
        v-if="showMode==='用户管理'"><el-input
          v-model.trim="ruleForm.username" :disabled="true"
        ></el-input>
      </el-form-item>

      <el-form-item prop="oldPass" label="旧密码" autocomplete="off"
        v-else><el-input
          type="password"
          placeholder="默认密码为123456"
          v-model.trim="ruleForm.oldPass"
          show-password
        ></el-input>
      </el-form-item>

      <el-form-item prop="newPass" label="新密码" autocomplete="off">
        <el-input
          type="password"
          placeholder="请输入新密码"
          v-model.trim="ruleForm.newPass"
          show-password
        >
        </el-input>
      </el-form-item>

      <el-form-item prop="checkNewPass" label="确认密码" autocomplete="off">
        <el-input
          type="password"
          placeholder="请再次输入新密码"
          v-model.trim="ruleForm.checkNewPass"
          show-password
        >
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >更新</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>

    </el-form>
</template>

<script>
import { ElMessage } from "element-plus";
import { updateUserPassword } from "../utils/user";

export default {
  export: "Profile",
  props: {
    showMode: String,
    usernameVal: String,
  },
  data() {
    const verifyNewPass = (rule, value, callback) => {
      if (this.ruleForm.checkNewPass !== "") {
        this.$refs.ruleForm.validateField("checkNewPass");
      }
      callback();
    };
    const verifyCheckNewPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.newPass) {
        callback(new Error("两次输入密码不一致"));
      } else callback();
    };
    console.log("in profile: " + this.usernameVal);
    return {
      ruleForm: {
        username: this.usernameVal,
        oldPass: "",
        newPass: "",
        checkNewPass: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
        oldPass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "密码位数只能在6~15之间",
            trigger: "blur",
          },
        ],
        newPass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "密码位数只能在6~15之间",
            trigger: "blur",
          },
          {
            validator: verifyNewPass,
            trigger: "blur",
          }
        ],
        checkNewPass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "密码位数只能在6~15之间",
            trigger: "blur",
          },
                  {
            validator: verifyCheckNewPass,
            trigger: "blur",
          }
        ],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.username === "") {
              this.ruleForm.username = window.sessionStorage.getItem("username");
          }
          console.log(this.ruleForm.username);
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
