<template>
  <el-row >
    <el-col :span="14" :push="5" class="title">
      <h1 style="font-size: 1.6rem">如何使用PyPi Manager</h1>
    </el-col>
    <el-col :span="14" :push="5" class="title">
      <h2 style="font-size: 1.5rem">一、PyPi客户端配置</h2>
    </el-col>
    <el-col :span="14" :push="5" class="title">
      <h4 style="font-size: 1.3rem">windows用户</h4>
    </el-col>
    <el-col :span="14" :push="5" class="title">
      <el-card class="box-card text item">
        <div class="content">
          请下载:
          <a
            :href=winClient
            >pypiClientTool.exe</a
          >，双击运行即可
        </div>
      </el-card>
    </el-col>
    <el-col :span="14" :push="5" class="title">
      <h4 style="font-size: 1.3em">Linux用户</h4>
    </el-col>
    <el-col :span="14" :push="5" class="title">
      <el-card class="box-card text item">
        <div class="content">
          <p>
            请下载：<a
              :href=linuxClient
              >pypiClientTool</a
            >，上传至服务器，执行如下命令
          </p>
          <code>sudo chmod +x pypiClientTool ./pypiClientTool</code>
          上述工具只是给你的pip设置了如下配置，方便访问我们的内PyPi源~
          <p># 推荐配置清单</p>
          <pre><code>
[global]
index-url = 'http://{{ pypiServerBaseUrl }}/simple'
index = 'http://{{ pypiServerBaseUrl }}'
[install]
trusted-host = '{{ pypiServerHost }}'</code></pre>
        </div>
      </el-card>
    </el-col>
    <el-col :span="14" :push="5" class="title">
      <h2 style="font-size: 1.5rem">二、接下来就可以愉快的使用pip命令了</h2>
    </el-col>
    <el-col :span="14" :push="5">
      <el-card class="box-card text item">
        <div class="content">
          <p># 配置好环境变量后即可直接使用pip命令从内网PyPi源安装包了~</p>
          <div>
            <code>
              <p>pip install PACKAGE [PACKAGE2...]</p>
              <p>pip search PACKAGE</p>
            </code>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import Config from "@/utils/config";

export default {
  name: "Guide",
  data() {
    return {
      pypiServerBaseUrl: Config.pypiServerHost + ":" + Config.pypiServerPort,
      pypiServerHost: Config.pypiServerHost,
      winClient: Config.pypiClientWin,
      linuxClient: Config.pypiClientLinux
    }
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: flex-start;
}

.code {
  background-color: bisque;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
</style>
