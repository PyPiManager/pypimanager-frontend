<template>
  <el-row>
    <el-col :span="15" style="margin-top: 15px">
      <el-input placeholder="搜索你需要的Python包" v-model="search">
        <template #append>
          <el-button icon="el-icon-search"></el-button>
        </template>
      </el-input>
    </el-col>
  </el-row>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      search: ref(""),
    };
  },
});
</script>

<style>
.el-button {
  width: 100px;
}
</style>
