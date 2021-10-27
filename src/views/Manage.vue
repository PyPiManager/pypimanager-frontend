<template>
  <el-row>
    <el-col :span="14" :push="5">
      <el-tabs
        tab-position="left"
        v-model="activeName"
        @tab-click="handleClick"
        v-if="isLogin"
      >
        <el-tab-pane label="个人信息" name="profile">
          <el-row>
            <el-col :span="8" :push="6">
              <Profile :usernameVal="username"></Profile>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane
          label="包管理"
          name="package"
          v-if="['包管理员', '超级管理员'].includes(role)"
          >
           <el-row>
            <el-col :span="10" :push="3">
              <PackageManage></PackageManage>
            </el-col>
          </el-row>
          </el-tab-pane
        >
        <el-tab-pane @tab-click="fetchAllUserInfo" label="用户管理" name="user" v-if="role === '超级管理员'">
          <el-row>
            <el-col :span="22" :push="1">
              <AddUser></AddUser>
            </el-col>
          </el-row>

          <el-divider></el-divider>

          <br />
          <el-table
                    v-loading="loading"
        element-loading-text="拼命加载中"
            :data="tables"
            height="530px"
            stripe
            border
            style="width: 950px"
          >
            <el-table-column
              prop="index"
              label="序号"
              width="70"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="username"
              label="用户名"
              width="100"
              align="center"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="nickname"
              label="姓名"
              width="160"
              align="center"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="email"
              label="邮箱"
              width="230"
              align="center"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="role"
              label="角色"
              width="100"
              align="center"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="disabled"
              label="禁用"
              width="60"
              align="center"
              show-overflow-tooltip
            >
            </el-table-column>

            <el-table-column width="229" align="center">
              <template #header>
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"
                />
              </template>
              <template #default="scope">
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  size="mini"
                  @click="tableHandleEdit(scope.row)"
                  >修改</el-button
                >
              </template>
            </el-table-column>
          </el-table>

          <el-drawer
            title="更新用户数据"
            size="30%"
            v-model="drawer"
            :direction="direction"
            :before-close="handleClose"
            destroy-on-close
          >
            <el-row>
              <el-col :span="10" :push="6">
                <h4 style="align: center;">
                  当前管理用户信息： {{ nickname }}
                </h4>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="10" :push="6">
                <Profile :showMode="showMode" :usernameVal="username"></Profile>
              </el-col>
            </el-row>

            <el-divider></el-divider>

            <el-row>
              <el-col :span="10" :push="6">
                <Role :usernameVal="username"></Role>
              </el-col>
            </el-row>
          </el-drawer>
        </el-tab-pane>
      </el-tabs>
      <div v-else>
        <el-result
          icon="info"
          title="请先登录再操作"
          subTitle="没有账号请联系管理员"
        >
        </el-result>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { ElMessage } from "element-plus";

import Profile from "@/components/Profile";
import Role from "@/components/Role";
import AddUser from "@/components/AddUser";
import PackageManage from "@/components/PackageManage";

import { checkLogin, getUserRole, allUserInfoApi } from "@/utils/user";

export default {
  name: "Manage",
  components: {
    Profile,
    Role,
    AddUser,
    PackageManage
  },
  data() {
    return {
      isLogin: checkLogin(),
      role: getUserRole(),
      activeName: "profile",
      showMode: "用户管理",
      search: "",
      drawer: false,
      direction: "rtl",
      username: "",
      nickname: "",
      tableData: [],
      loading: true,
    };
  },
  computed: {
    tables: function() {
      let search = this.search;
      if (search) {
        return this.tableData.filter(function(dataNews) {
          return Object.keys(dataNews).some(function(key) {
            return (
              String(dataNews[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
      return this.tableData;
    },
  },
  methods: {
    handleClick(tab) {
      if (tab.props.label === "用户管理") {
      this.fetchAllUserInfo();
      }
    },
    tableHandleEdit(row) {
      this.username = row.username;
      this.nickname = row.nickname;
      this.drawer = true;
    },
    handleClose(done) {
      this.fetchAllUserInfo();
      done();
      // this.$confirm("确认关闭？")
      //   .then(() => {
          
      //     done();
      //   })
      //   .catch(() => {});
    },
    fetchAllUserInfo() {
      allUserInfoApi()
        .then(res => {
          if (res.data["message"] === "ok") {
            this.tableData = res.data["data"];
            this.loading = false;
          } else {
            ElMessage.error("获取全量用户数据失败" + res.data["message"]);
          }
        })
        .catch((err) => {
          ElMessage.error("获取全量用户数据失败！请联系管理员");
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
