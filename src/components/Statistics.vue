<template>
  <div class="stat-info">
    <StatCard
      :title="packageStatInfo.title"
      :count="packageStatInfo.count"
      :desc="packageStatInfo.desc"
      :iconClass="packageStatInfo.iconClass"
    ></StatCard>
    <StatCard
      :title="fileStatInfo.title"
      :count="fileStatInfo.count"
      :desc="fileStatInfo.desc"
      :iconClass="fileStatInfo.iconClass"
    ></StatCard>
    <StatCard
      :title="downloadUserStatInfo.title"
      :count="downloadUserStatInfo.count"
      :desc="downloadUserStatInfo.desc"
      :iconClass="downloadUserStatInfo.iconClass"
    ></StatCard>
    <StatCard
      :title="downloadTotalStatInfo.title"
      :count="downloadTotalStatInfo.count"
      :desc="downloadTotalStatInfo.desc"
      :iconClass="downloadTotalStatInfo.iconClass"
    ></StatCard>
    <StatCard
      :title="saveTimeStatInfo.title"
      :count="saveTimeStatInfo.count"
      :desc="saveTimeStatInfo.desc"
      :iconClass="saveTimeStatInfo.iconClass"
    ></StatCard>
  </div>
</template>

<script>
import { onBeforeMount, reactive } from "vue";
import { ElMessage } from "element-plus";
import StatCard from "@/components/StatCard";
import { getAllCount } from "@/utils/statistics";

export default {
  name: "Statisticcs",
  components: {
    StatCard,
  },
  setup() {
    const packageStatInfo = reactive({
      title: "包统计",
      count: 0,
      desc: "个包已上传",
      iconClass: "el-icon-folder",
    });
    const fileStatInfo = reactive({
      title: "文件统计",
      count: 0,
      desc: "个文件已上传",
      iconClass: "el-icon-document",
    });
    const downloadUserStatInfo = reactive({
      title: "用户统计",
      count: 0,
      desc: "位用户下载过",
      iconClass: "el-icon-user",
    });
    const downloadTotalStatInfo = reactive({
      title: "活动统计",
      count: 0,
      desc: "次下载记录",
      iconClass: "el-icon-finished",
    });
    const saveTimeStatInfo = reactive({
      title: "节省时间",
      count: 0,
      desc: "小时",
      iconClass: "el-icon-time",
    });

    onBeforeMount(() => {
      fetchAllCount();
    });

    function fetchAllCount() {
      getAllCount()
        .then((res) => {
          if (res.data["message"] === "ok") {
            const respData = res.data["data"];
            packageStatInfo.count = respData["package_count"];
            fileStatInfo.count = respData["file_count"];
            downloadUserStatInfo.count = respData["download_user_count"];
            downloadTotalStatInfo.count = respData["download_total_count"];
            saveTimeStatInfo.count = respData["save_time_hour"];
          } else {
            ElMessage.error("获取统计数据失败!" + res.data["message"]);
          }
        })
        .catch((err) => {
          ElMessage.error("获取统计数据失败!请联系管理员");
          console.log(err);
        });
    }

    return {
      packageStatInfo,
      fileStatInfo,
      downloadUserStatInfo,
      downloadTotalStatInfo,
      saveTimeStatInfo,
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
}

.stat-info {
  justify-content: space-around;
}
</style>
