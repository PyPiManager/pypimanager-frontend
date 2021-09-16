<template>
  <el-row>
    <el-col :span="20">
      <p id="slogan">一起来补充Python包吧！</p>
    </el-col>
    <el-col :span="20" style="margin-top: 15px">
      <el-upload
        class="upload"
        drag
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
    </el-col>
  </el-row>
</template>

<style scoped>
#slogan {
  font-size: large;
}
</style>
