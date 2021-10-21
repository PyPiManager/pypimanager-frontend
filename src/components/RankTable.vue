<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%"
    @cell-click="cellClickHandle"
    :cell-style="uploadCountDetail"
  >
    <el-table-column type="index" label="#" width="100px"> </el-table-column>
    <el-table-column
      prop="nickname"
      label="姓名"
      width="550px"
    ></el-table-column>
    <el-table-column
      prop="count"
      label="上传贡献数"
      width="400px"
    ></el-table-column>
  </el-table>
</template>

<script>
import { rankInfo } from "@/utils/rank";

export default {
  name: "RankTable",
  props: {
    top: Number,
  },
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    rankInfo(this.top).then((res) => {
      if (res.data["message"] === "ok") {
        this.tableData = res.data["data"];
      }
    });
  },
  methods: {
    // 当点击单元格时，触发下载事件
    cellClickHandle(row) {
      console.log("username: ", row.username);
      console.log("nickname: ", row.nickname);
      this.$router.push({
        path: "/result",
        query: { username: row.username, nickname: row.nickname },
      });
    },
    // 鼠标放在数量上时，显示为链接
    uploadCountDetail(row) {
      if (row.column.property === "count") {
        return "text-decoration: underline; text-decoration-color: blue; cursor: pointer;";
      }
    },
  },
};
</script>
