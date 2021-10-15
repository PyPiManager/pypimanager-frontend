<template>
  <el-row>
    <el-col :span="14" :push="5">
      <h1 style="font-size: 1.6rem">安装包概览</h1>
    </el-col>
    <el-col :span="14" :push="5">
      <p style="font-size: 1rem">
        当前共有{{ this.tableData.length }}个Python安装包
      </p>
    </el-col>
    <el-col :span="14" :push="5">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        @cell-click="cellClickHandle"
        :cell-style="detailHandle"
      >
        <el-table-column type="index" label="#" width="100px">
        </el-table-column>
        <el-table-column
          prop="package"
          label="包名"
          width="950px"
        ></el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import { allPackage } from "@/utils/search";

export default {
  name: "Package",
  components: {},
  data() {
    return {
      tableData: [],
    };
  },
  beforeMount() {
    allPackage().then((res) => {
      if (res.data["message"] === "ok") {
        this.tableData = res.data["data"];
      }
    });
  },
  methods: {
    // 当点击单元格时，触发下载事件
    cellClickHandle(row) {
      this.$router.push({ path: "/result", query: { package: row.package } });
    },
    // 鼠标放在包名上时，显示为链接
    detailHandle(row) {
      if (row.column.property === "package") {
        return "text-decoration: underline; text-decoration-color: blue; cursor: alias;";
      }
    },
  },
};
</script>
