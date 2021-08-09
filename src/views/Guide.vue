<template>
  <div class="guide">
    <h1>如何使用PyPi Manager</h1>
    <h2>一、PyPi客户端配置</h2>
    <h3>配置方法</h3>
    <h4>windows用户</h4>
    请下载:
    <a
      href="http://172.16.111.6/X2590/pypiClientTool/uploads/4799db10a5d315edbceddcde58b411be/pypiClientTool.exe"
      >pypiClientTool.exe</a
    >，双击运行即可
    <h4>Linux用户</h4>
    请下载：<a
      href="http://172.16.111.6/X2590/pypiClientTool/uploads/527b9bf35fa4f23aca292dba346479ce/pypiClientTool"
      >pypiClientTool</a
    >，上传至服务器，执行如下命令
    <pre><code>sudo chmod +x pypiClientTool
./pypiClientTool</code></pre>

    上述工具只是给你的pip设置了如下配置，方便访问我们的内PyPi源~

    <pre><code># 推荐配置清单
[global]
index-url = {{ pypi_server }}/simple
index = {{ pypi_server }}
[install]
trusted-host = {{ pypi_host }}</code></pre>
    >
    <h2>二、接下来就可以愉快的使用pip命令了</h2>
    <pre><code># 配置好环境变量后即可直接使用pip命令从内网PyPi源安装包了~
pip install PACKAGE [PACKAGE2...]
pip search PACKAGE</code></pre>
    <h2>【不推荐】未配置环境变量直接使用命令行</h2>

    <pre><code># 当然也有同学不想进行配置，又想使用内网PyPi源，那么每次使用pip命令都要这样操作

# 下载安装包
pip install --index-url {{ pypi_server }}/simple --trusted-host {{ pypi_host }} PACKAGE [PACKAGE2...]

# 搜索安装包
pip search --index {{ pypi_server }} --trusted-host {{ pypi_host }} PACKAGE</code></pre>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Guide",
  components: {},
};
</script>

<style scoped></style>
