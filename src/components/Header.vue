<template>
    <div>
        <span id="title-name">PyPiManager</span>
    </div>
    <div>
        <span id="slogan">共建共享，饮水思源 <span class="el-icon-lollipop"></span> 你好，{{userName}}</span>
    </div>
    <div>
         <el-button type="primary">登录</el-button>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        userName: String
    }
}
</script>


<style scoped>
#title-name {
    font-size: 30px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

#slogan {
    font-size: 17px;
    font-family: Arial, Helvetica, sans-serif;
    color: royalblue;
}
</style>>
