<template>
    <div id="auth">
        <el-card>
            <el-form class="auth" ref="ruleForm">
                <el-form-item prop="username">
                    <el-input placeholder="账号（工号）" ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码（默认为123456）"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "Auth",
}
</script>

<style scoped>

</style>