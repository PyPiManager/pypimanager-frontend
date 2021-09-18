<template>
  <el-row :justify="center">
    <el-col :span="14" :push="5">
      <span id="slogan">
        共建共享，饮水思源
        <span class="el-icon-lollipop"></span> 你好，{{ userName }}
      </span>
      <div><br /></div>
    </el-col>
    <el-col :span="14" :push="5">
      <Search></Search>
    </el-col>
    <el-col :span="14" :push="5">
      <Upload></Upload>
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
      <UploaderRank></UploaderRank>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import Upload from "@/components/Upload.vue";
import Statistics from "@/components/Statistics.vue";
import UploaderRank from "@/components/UploaderRank.vue";
import Trend from "@/components/Trend.vue";

export default {
  name: "Home",
  props: {
    userName: String,
  },
  components: {
    Search,
    Upload,
    Statistics,
    UploaderRank,
    Trend,
  },
};
</script>

<style scoped>
#slogan {
  font-size: 25px;
  color: rgb(11, 11, 12);
}
</style>
