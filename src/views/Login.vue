<template>
  <el-row>
      <el-col :span="8" class="left">
        <el-row>
            <el-col :span="14" :push="7" >
                <router-link to="/home" custom v-slot="{ navigate }">
                    <img
                    class="logo"
                    alt="PyPiManager"
                    src="../assets/logo-large.svg"
                    style="margin-right: 0.5rem"
                    @click="navigate" @keypress.enter="navigate" role="link"
                    />
                </router-link>
            </el-col>
            <el-col :span="14" :push="7">
                <router-link to="/home" custom v-slot="{ navigate }">
                <h1 style="font-size: 1rem; color: #535251 " @click="navigate" @keypress.enter="navigate" role="link">欢迎使用PyPiManager</h1>
                </router-link>
                 <br />
            </el-col>
            <el-col :span="14" :push="5">
                <Auth></Auth>
            </el-col>
            <!-- <el-col :span="14" :push="5">
                <p>
                    <span style="font-size: 0.5rem">忘记密码请联系管理员</span>
                </p>
            </el-col> -->
        </el-row>
      </el-col>
      <el-col :span="16" class="right">
        
      </el-col>

  </el-row>
</template>

<script>
import Auth from "@/components/Auth";

export default {
  name: "Login",
  components: {
    Auth,
  },
};
</script>

<style scoped>
.login {
    display: flex;
}


.left {
    height: 880px;
    background-color: rgb(229, 235, 241);
}

.right {
    background-image: url('~@/assets/login-bg.jpg');
    height: 880px;
}

.logo {
    margin-top: 100px;
}

</style>
