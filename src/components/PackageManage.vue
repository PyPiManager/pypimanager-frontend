<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="110px"
  >
    <el-form-item prop="package" label="包文件名称" autocomplete="off">
      <el-input
        placeholder="完整的Python包文件名称，包含后缀"
        v-model="ruleForm.package"
        @keydown.enter="submitForm('ruleForm')"
      >
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">删除</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ElMessage } from "element-plus";
import { deletePackage } from "@/utils/package.js";

export default {
  name: "PackageManage",
  data() {
    return {
      ruleForm: {
        package: "",
      },
      rules: {
        package: [{ required: true, message: "包名不能为空", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$confirm(
            "此操作将删除 " + this.ruleForm.package + " , 是否继续?",
            "提示",
            {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning",
            }
          )
            .then(() => {
              deletePackage(this.ruleForm.package)
                .then((res) => {
                  if (res.data["message"] === "ok") {
                    this.$message({
                      type: "success",
                      message: "删除成功!",
                    });
                  } else {
                    ElMessage.error("删除Python包失败" + res.data["message"]);
                  }
                })
                .catch((err) => {
                  ElMessage.error("删除Python包失败！请联系管理员");
                  console.log(err);
                });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消删除",
              });
            });
        } else {
          ElMessage.error("请输入正确的包名称");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped></style>
