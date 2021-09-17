<template>
  <el-row :justify="start">
    <el-col :span="14" :push="5" class="title">
      <h1>如何使用PyPi Manager</h1>
    </el-col>
    <el-col :span="14" :push="5" class="title">
      <h2>一、PyPi客户端配置</h2>
    </el-col>
    <el-col :span="14" :push="5" class="title">
      <h3>配置方法</h3>
    </el-col>
    <el-col :span="14" :push="5" class="title">
      <h4>windows用户</h4>
    </el-col>
    <el-col :span="14" :push="5" class="title">
      <el-card class="box-card text item">
        <div class="content">
          请下载:
          <a
            href="http://172.16.111.6/X2590/pypiClientTool/uploads/4799db10a5d315edbceddcde58b411be/pypiClientTool.exe"
            >pypiClientTool.exe</a
          >，双击运行即可
        </div>
      </el-card>
    </el-col>
    <el-col :span="14" :push="5" class="title">
      <h4>Linux用户</h4>
    </el-col>
    <el-col :span="14" :push="5" class="title">
      <el-card class="box-card text item">
        <div class="content">
          <p>
            请下载：<a
              href="http://172.16.111.6/X2590/pypiClientTool/uploads/527b9bf35fa4f23aca292dba346479ce/pypiClientTool"
              >pypiClientTool</a
            >，上传至服务器，执行如下命令
          </p>
          <code>sudo chmod +x pypiClientTool ./pypiClientTool</code>
          上述工具只是给你的pip设置了如下配置，方便访问我们的内PyPi源~
          <p># 推荐配置清单</p>
          <pre><code>
[global]
index-url = {{ pypi_server }}/simple
index = {{ pypi_server }}
[install]
trusted-host = {{ pypi_host }}</code></pre>
        </div>
      </el-card>
    </el-col>
    <el-col :span="14" :push="5" class="title">
      <h2>二、接下来就可以愉快的使用pip命令了</h2>
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
// @ is an alias to /src

export default {
  name: "Guide",
  components: {},
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: flex-start;
}

.content {
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
