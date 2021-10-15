<template>
  <el-row>
    <el-col :span="14" :push="5">
      <h1 style="font-size: 1.6rem" v-if="this.package !== undefined">{{ this.package }}查询结果</h1>
      <h1 style="font-size: 1.6rem" v-if="this.nickname !== undefined">{{ this.nickname }}的上传贡献详情</h1>
    </el-col>
    <el-col :span="14" :push="5">
      <p style="font-size: 1rem">共查询到{{ this.tableData.length }}个包</p>
    </el-col>
    <el-col :span="14" :push="5">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        @cell-click="cellClickHandle"
        :cell-style="packageDownload"
      >
        <el-table-column type="index" label="#" width="100px">
        </el-table-column>
        <el-table-column
          prop="package"
          label="包名"
          width="550px"
        ></el-table-column>
        <el-table-column
          prop="nickname"
          label="上传人"
          width="400px"
        ></el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import { searchPackage } from "@/utils/search";
import { personUploadDetail } from "@/utils/rank"

export default {
  name: "SearchResult",
  components: {},
  data() {
    return {
      package: this.$router.currentRoute.value.query["package"],
      username: this.$router.currentRoute.value.query["username"],
      nickname: this.$router.currentRoute.value.query["nickname"],
      queryStatus: null,
      tableData: [],
    };
  },
  beforeMount() {
    if (this.package !== undefined) {
      searchPackage(this.package).then((res) => {
            if (res.data["message"] === "ok") {
              // 查询包信息成功则展示
              this.queryStatus = true;
              this.tableData = res.data["data"];
            } else {
              // 查询包信息失败，则渲染另一个页面，提示上传
              this.queryStatus = false;
            }
          });
    }
    if (this.username !== undefined) {
      personUploadDetail(this.username).then(res => {
        if (res.data["message"] == "ok") {
          console.log(res.data["data"])
          this.tableData = res.data["data"];
        }
      })
    }
  },
  methods: {
    // 当点击单元格时，触发下载事件
    cellClickHandle(row) {
      const a = document.createElement("a");
      a.href = row.url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
    // 鼠标放在包名上时，显示为链接
    packageDownload(row) {
      if (row.column.property === "package") {
        return "text-decoration: underline; text-decoration-color: blue; cursor: alias;";
      }
    },
  },
};
</script>
