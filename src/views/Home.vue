<template>
  <el-row>
    <el-col :span="14" :push="5">
      <span id="slogan">
        共建共享，饮水思源
        <span class="el-icon-lollipop"></span> 你好，
        <span v-if="nickName">{{ nickName }}</span>
        <span v-else>热爱技术的同学</span>
      </span>
    </el-col>
    <el-col :span="14" :push="5">
      <Search style="margin-top: 10px"></Search>
    </el-col>
    <el-col :span="14" :push="5" >
      <Upload v-if="isLogin"></Upload>
      <div v-else>
          <p id="please-login">登录后可以上传Python包</p>
          <br>
      </div>
    </el-col>
    <el-col :span="14" :push="5">
      <el-divider content-position="left"
        ><span style="font-size: 25px">统计数据 </span>
        <el-divider direction="vertical"></el-divider>
        <span style="font-size: 17px"> 每一个细节都能提高效率</span></el-divider
      >
    </el-col>
    <el-col :span="14" :push="5">
      <Statistics></Statistics>
    </el-col>
    <el-col :span="14" :push="5">
      <Trend></Trend>
    </el-col>
    <el-col :span="14" :push="5">
      <el-divider content-position="left"
        ><span style="font-size: 25px">热门用户 </span>
        <el-divider direction="vertical"></el-divider>
        <span style="font-size: 17px"> 送人玫瑰，手有余香</span></el-divider
      >
    </el-col>
    <el-col :span="14" :push="5">
      <!-- <UploaderRank></UploaderRank> -->
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import Upload from "@/components/Upload.vue";
import Statistics from "@/components/Statistics.vue";
import Trend from "@/components/Trend.vue";

import { checkLogin } from "@/utils/user";

export default {
  name: "Home",
  data() {
    return {
      isLogin: checkLogin(),
      nickName: window.sessionStorage.getItem("nickname"),
    };
  },
  components: {
    Search,
    Upload,
    Statistics,
    Trend,
  },
};
</script>

<style scoped>
#slogan {
  font-size: 1.3rem;
}

#please-login {
  font-size: 1rem;
  color: rgb(37, 122, 179);
}
</style>
