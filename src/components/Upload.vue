<template>
  <div id="upload-main">
    <p id="slogan">一起来补充Python包吧!</p>
    <el-upload
      class="upload"
      drag
      :show-file-list="showFileList"
      :accept="accept"
      :action="uploadUrl"
      multiple
      name="upload_file"
      :headers="myHeaders"
      :on-success="successHandler"
      :on-error="errHandler"
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
      fileUploadStatus: "success",
      fileList: [],
      accept: ".zip,.whl,.tar.gz",
      // uploadUrl: "process.env.VUE_APP_BASE_API" + '/upload',
    };
  },
  computed: {
    myHeaders() {
      const token = "bearer " + window.sessionStorage.getItem("access_token");
      return { Authorization: token };
    },
    uploadUrl() {
      return process.env.VUE_APP_BASE_API + '/upload';
    }
  },
  methods: {
    successHandler(response, file, fileList) {
      const msg = response["message"];
      if (msg === "包已存在，无需重复上传") {
        // 文件已存在则从上传的fileList对象中移出此包的数据
        fileList.forEach(function(item, index, object) {
        if (item.name === file.name) {
          object.splice(index, 1);
        }
      });
        ElMessage.warning({
          message: file.name + " " + msg,
          duration: 4000,
        });
      }
    },
    errHandler(err, file) {
      ElMessage.error({
        message: file.name + " " + err,
        duration: 5000,
      });
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
  width: 1050px;
  height: 110px;
  border: 2px dashed rgb(69, 118, 163);
}

#upload-main .el-icon-upload {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
