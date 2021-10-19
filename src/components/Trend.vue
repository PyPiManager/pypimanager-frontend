<template>
  <div class="trend">
    <div id="myEcharts" :style="{ width: '100%', height: '400px' }"></div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
import * as echarts from "echarts";
import { getTrendData } from "@/utils/statistics.js";

export default {
  name: "Trend",
  data() {
    return {
      chart: null,
      chartOption: null,
      xAxisData: null,
      seriesData: null,
    };
  },
  beforeMount() {
    // 获取Trend数据
    getTrendData()
      .then(res => {
        if (res.data["message"] === "ok") {
          const trendData = res.data["data"];
          this.xAxisData = Object.keys(trendData);
          this.seriesData = Object.values(trendData);
          this.chart.setOption({
            xAxis: {
              data: this.xAxisData,
            },
            series: [
              {
                data: this.seriesData,
              },
            ],
          });
        } else {
          ElMessage.error("获取趋势数据失败！" + res.data["message"]);
        }
      })
      .catch(err => {
        ElMessage.error("获取趋势数据失败！请联系管理员");
        console.log(err);
      });
  },
  mounted() {
    this.initChart();
    this.chart.setOption(this.chartOption);
    window.onresize = function() {
      //自适应大小
      this.chart.resize();
    };
  },
  methods: {
    // 基础配置一下Echarts
    initChart() {
      this.chart = echarts.init(document.getElementById("myEcharts"));
      // 把配置和数据放这里
      this.chartOption = {
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
          data: null,
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
            data: null,
          },
        ],
      };
    },
  },
};
</script>
