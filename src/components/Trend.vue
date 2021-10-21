<template>
  <div class="trend">
    <div id="myEcharts" :style="{ width: '100%', height: '400px' }"></div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
import * as echarts from "echarts";
import { getTrendData } from "@/utils/statistics";
import {
  reactive,
  toRefs,
  onBeforeMount,
  // onMounted,
  computed,
  watch,
} from "vue";

export default {
  name: "Trend",
  setup() {
    const trendData = reactive({
      xAxisData: [],
      seriesData: [],
    });
    const { xAxisData, seriesData } = toRefs(trendData);

    onBeforeMount(() => {
      fetchTrendData();
    });

    // 如果从父组件把值传过来则需要先挂载上
    // onMounted(() => {
    //   initChart();
    // });

    watch([seriesData, xAxisData], () => {
      initChart();
    });

    const setOptionVal = computed(() => {
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 100,
          },
          {
            start: 0,
            end: 100,
          },
        ],
        xAxis: {
          type: "category",
          name: "日期",
          boundaryGap: false,
          data: xAxisData.value,
        },
        yAxis: {
          type: "value",
          name: "下载量",
          axisLabel: {
            formatter: "{value} 次",
          },
          boundaryGap: false,
        },
        series: [
          {
            name: "下载量",
            type: "line",
            smooth: true,
            itemStyle: {
              color: "rgb(255, 70, 131)",
            },
            emphasis: {
              focus: "series",
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 158, 68)",
                },
                {
                  offset: 1,
                  color: "rgb(255, 70, 131)",
                },
              ]),
            },
            data: seriesData.value,
          },
        ],
      };
      return option;
    });

    function fetchTrendData() {
      getTrendData()
        .then((res) => {
          if (res.data["message"] === "ok") {
            const respTrendData = res.data["data"];
            trendData.xAxisData = Object.keys(respTrendData);
            trendData.seriesData = Object.values(respTrendData);
          } else {
            ElMessage.error("获取趋势数据失败！" + res.data["message"]);
          }
        })
        .catch((err) => {
          ElMessage.error("获取趋势数据失败！请联系管理员");
          console.log(err);
        });
    }

    function initChart() {
      let chart = echarts.init(document.getElementById("myEcharts"));
      chart.setOption(setOptionVal.value);
      window.onresize = function() {
        chart.resize();
      };
    }
  },
};
</script>
