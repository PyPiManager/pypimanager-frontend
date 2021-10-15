<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="80px"
    class="add-user-form"
  >
    <el-row>
      <el-col :span="7">
        <el-form-item prop="username" label="工号" autocomplete="off"
          ><el-input
            v-model="ruleForm.username"
            placeholder="工号字母大写"
            @keydown.enter="submitForm('ruleForm')"
          ></el-input>
        </el-form-item>
      </el-col>

      <el-col :span="7">
        <el-form-item prop="nickname" label="姓名" autocomplete="off"
          ><el-input v-model="ruleForm.nickname" @keydown.enter="submitForm('ruleForm')"></el-input>
        </el-form-item>
      </el-col>


      <el-col :span="10">
 <el-form-item prop="email" label="邮箱" autocomplete="off"
      ><el-input v-model="ruleForm.email" @keydown.enter="submitForm('ruleForm')"></el-input>
    </el-form-item>
      </el-col>

    </el-row>

    <el-row>
      <el-col :span="7">
<el-form-item prop="pass" label="密码" autocomplete="off">
      <el-input
        type="password"
        placeholder="请输入密码"
        v-model="ruleForm.pass"
        show-password
        @keydown.enter="submitForm('ruleForm')"
      >
      </el-input>
    </el-form-item>
      </el-col>

      <el-col :span="7">
<el-form-item prop="checkPass" label="确认密码" autocomplete="off">
      <el-input
        type="password"
        placeholder="请再次输入密码"
        v-model="ruleForm.checkPass"
        show-password
        @keydown.enter="submitForm('ruleForm')"
      >
      </el-input>
    </el-form-item>

      </el-col>
    </el-row>     

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ElMessage } from "element-plus";
import { addUser } from "@/utils/user";

export default {
  export: "Profile",
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
    const checkEmail = (rule, value, callback) => {
      //  邮箱只能由xxxx@njsecnet.com组成
      const regex = /^\w{3,15}@njsecnet\.com$/;
      if (!value.match(regex)) {
        callback(new Error("邮箱不合法"));
      } else {
        callback();
      }
    };
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
        nickname: "",
        email: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { validator: checkUserName, trigger: "blur" },
        ],
        nickname: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
        ],
        email: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" },
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
          addUser(
            this.ruleForm.username,
            this.ruleForm.nickname,
            this.ruleForm.email,
            this.ruleForm.pass
          );
        } else {
          ElMessage.error("请输入正确的用户信息");
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
