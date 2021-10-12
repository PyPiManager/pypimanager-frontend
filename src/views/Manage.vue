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
              <Profile></Profile>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane
          label="包管理"
          name="package"
          v-if="['包管理员', '超级管理员'].includes(role)"
          >包管理</el-tab-pane
        >
        <el-tab-pane label="用户管理" name="user" v-if="role === '超级管理员'">
          <br />
          <el-table
            :data="tables"
            height="250"
            stripe
            border
            style="width: 100%"
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
              resizable
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="nickname"
              label="姓名"
              width="160"
              align="center"
              resizable
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="email"
              label="邮箱"
              width="230"
              align="center"
              resizable
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="role"
              label="角色"
              width="100"
              align="center"
              resizable
              show-overflow-tooltip
            >
            </el-table-column>

            <el-table-column width="200" align="center">
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
                  @click="tableHandleEdit(scope.$index, scope.row)"
                  >修改</el-button
                >
              </template>
            </el-table-column>
          </el-table>

          <el-drawer
            title="修改用户数据"
            size="50%"
            v-model="drawer"
            :direction="direction"
            :before-close="handleClose"
            destroy-on-close
          >
          <div>
            <p>当前修改用户 {{ nickname }}</p>
          </div>
            <el-row>
              <el-col :span="8" :push="6">
                <Profile :showMode="showMode" :usernameVal="username"></Profile>
              </el-col>
            </el-row>
           
          </el-drawer>


          <el-divider></el-divider>

          <el-row>
            <el-col :span="4" :push="2">
              <h5>新增用户</h5>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" :push="6">
              <AddUser></AddUser>
            </el-col>
          </el-row>
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
import Profile from "@/components/Profile.vue";
import AddUser from "@/components/AddUser.vue";

import { checkLogin, getUserRole } from "../utils/user";

export default {
  name: "Manage",
  components: {
    Profile,
    AddUser,
  },
  data() {

    return {
      isLogin: checkLogin(),
      role: getUserRole(),
      activeName: "profile",
      showMode: "用户管理",
      search: "",
      tableData: [
        {
          index: 1,
          username: "X2590",
          nickname: "郭群",
          email: "qguo@njsecnet.com",
          role: "超级管理员",
        },
        {
          index: 2,
          username: "X2591",
          nickname: "姜越",
          email: "yjiang@njsecnet.com",
          role: "包管理员",
        },
        {
          index: 2,
          username: "X2592",
          nickname: "周琳",
          email: "yzhou@njsecnet.com",
          role: "用户",
        },
      ],
      drawer: false,
      direction: "rtl",
      username: "",
      nickname: "",
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
    handleClick(tab, event) {
      console.log(tab, event);
    },
    tableHandleClick(row) {
      console.log(row);
    },
    tableHandleEdit(index, row) {
      console.log(index, row);
      this.username = row.username;
      this.nickname = row.nickname;
      this.drawer = true;

    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped></style>
