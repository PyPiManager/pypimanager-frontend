<template>
  <div id="auth">
    <el-form   
    :model="ruleForm" 
    status-icon  
    :rules="rules"
    ref="ruleForm" 
    label-width="50px"
    class="login-form" >
      <el-form-item prop="userName" label="账号">
        <el-input placeholder="工号字母大写" v-model="ruleForm.userName" ></el-input>
      </el-form-item>
      <el-form-item prop="passWord"  label="密码" autocomplete="off">
        <el-input type="password" placeholder="默认为123456" v-model="ruleForm.passWord" show-password></el-input>
      </el-form-item>
      <el-form-item label="记住">
          <el-switch v-model="ruleForm.remember"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
    name: "Auth",
    data() {
      var checkUserName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'))
        } else {
            callback()
        }
      }
      var validatePassWord = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      return {
        ruleForm: {
          userName: '',
          passWord: '',
          remember: true,
        },
        rules: {
          userName: [{ validator: checkUserName, trigger: 'blur' }],
          passWord: [{ validator: validatePassWord, trigger: 'blur' }],
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
    },
  }
</script>

<style scoped>
.login-form {
  width: 300px;
}
</style>
