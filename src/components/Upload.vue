<template>
  <div id="upload-main">
    <p id="slogan">一起来补充Python包吧！</p>
    <el-upload
      class="upload"
      drag
      show-file-list
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
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

<style scoped>
#slogan {
  font-size: large;
}

#upload-main {
  text-align: center;
}
</style>

<style>
.el-upload-dragger {
  width: 1000px;
  height: 200px;
}
</style>
