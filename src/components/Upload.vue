<template>
  <div id="upload-main">
    <p id="slogan">一起来补充Python包吧！</p>
    <el-upload
      class="upload"
      drag
      show-file-list
      action="http://127.0.0.1:5000/upload"
      multiple
      name="upload_file"
      :headers="myHeaders"
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
export default {
  name: "Upload",
  // data() {
  //   return {
  //     headers: {Authorization: token}
  //   }
  // },
  computed: {
    myHeaders() {
      const token = 'bearer ' + window.sessionStorage.getItem('access_token');
      return {Authorization: token}
    }
  }
}
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
  height: 200px;
  border: 2px dashed rgb(69, 118, 163);
}
</style>
