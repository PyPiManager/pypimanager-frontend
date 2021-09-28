<template>
    <el-row :justify="center">
        <el-col :span="14" :push="5">
            <h1 style="font-size: 0.8rem">登录</h1>
        </el-col>
        <el-col :span="14" :push="5">
            <Auth></Auth>
        </el-col>
        <el-col :span="14" :push="5">
            <p>
            <span style="font-size: 0.5rem">忘记密码请联系管理员</span>
            </p>
        </el-col>
    </el-row>
</template>

<script>

import Auth from "@/components/Auth.vue";

export default {
    name: "Login",
    components: {
        Auth,
    }
}
</script>