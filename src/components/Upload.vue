<template>
  <div id="upload-main">
    <p id="slogan">一起来补充Python包吧！</p>
    <el-upload
      class="upload"
      drag
      :show-file-list="showFileList"
      :accept="accept"
      action="http://127.0.0.1:5000/upload"
      multiple
      name="upload_file"
      :headers="myHeaders"
      :on-success="successHandler"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        <p>
          将文件拖到此处，或<em>点击上传</em>，可同时上传多个文件 :)
        </p>
      </div>
      <!-- <template #tip>
        <div class="el-upload__tip">
          只能上传 jpg/png 文件，且不超过 500kb
        </div>
      </template> -->
    </el-upload>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";

export default {
  name: "Upload",
  data() {
    return {
      showFileList: true,
      accept: ".zip,.whl,.tar.gz"
    }
  },
  computed: {
    myHeaders() {
      const token = "bearer " + window.sessionStorage.getItem("access_token");
      return { Authorization: token };
    },
  },
  methods: {
    successHandler(response, file) {
      console.log(response);
      const msg = response["message"];
      if (msg === "包已存在，无需重复上传") {
        ElMessage.warning({
          message: file.name + " " + msg,
          duration: 4000,
        });
      } else if (msg != "ok") {
        ElMessage.error({
          message: file.name + " " + msg,
          duration: 3000,
        })
      }
    },
  },
};
</script>

<style scoped>
#slogan {
  font-size: large;
}

#upload-main {
  text-align: center;
}
</style>

<style>
#upload-main .el-upload-dragger {
  width: 1000px;
  height: 160px;
  border: 2px dashed rgb(69, 118, 163);
}
</style>
