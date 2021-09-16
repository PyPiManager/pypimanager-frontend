<template>
  <el-row>
    <el-col :span="3">
      <span id="title-name">PyPiManager</span>
    </el-col>
    <el-col :span="6">
      <Menu></Menu>
    </el-col>
    <el-col :span="6">
      <span id="slogan">
        共建共享，饮水思源
        <span class="el-icon-lollipop"></span> 你好，{{ userName }}
      </span>
    </el-col>
    <el-col :span="3" :offset="6">
      <el-button type="primary">登录</el-button>
    </el-col>
  </el-row>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  props: {
    userName: String,
  },
  name: "Header",
  components: {
    Menu,
  },
};
</script>

<style scoped>
#title-name {
  font-size: 30px;
  font-weight: bold;
}

.el-row {
  align-items: center;
  justify-content: flex-start;
}

#slogan {
  font-size: 20px;
  color: rgb(11, 11, 12);
}
/* .el-col {
  display: flex;
} */
</style>
