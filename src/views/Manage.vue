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

          <el-divider></el-divider>

          <br />
          <el-table
            :data="tables"
            height="100%"
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
              width="140"
              align="center"
              resizable
              show-overflow-tooltip
            >
            </el-table-column>

            <el-table-column width="260" align="center">
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
import Profile from "@/components/Profile.vue";
import Role from "@/components/Role.vue";
import AddUser from "@/components/AddUser.vue";


import { checkLogin, getUserRole, getAllUserInfo } from "../utils/user";

export default {
  name: "Manage",
  components: {
    Profile,
    Role,
    AddUser,
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
    };
  },
  computed: {
    tableData: function() {
        return getAllUserInfo();
    },
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
    tableHandleEdit(row) {
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
   mounted() {
    window.addEventListener('storage', (e) => {
      console.log("别的浏览器页签storage发生变化啦:", e);
    });
    window.addEventListener("setItemEvent", (e) => {
      console.log("sessionStorage值发生变化后触发:", e.newValue);
      this.$router.push("/manage")
    });
  },
};
</script>

<style scoped></style>
