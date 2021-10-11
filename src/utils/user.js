import { ElMessage } from "element-plus";

import { get, post } from "./request";
import router from "../router/index";

async function UserInfo() {
  const UserInfo = await get("/user/info/");
  return UserInfo;
}

function getUserInfo() {
  UserInfo()
    .then((res) => {
      if (res.data["message"] === "ok") {
        const userInfo = res.data["data"];
        // 获取用户信息保存到本地
        window.sessionStorage.setItem("nickname", userInfo["nickname"]);
        window.sessionStorage.setItem("email", userInfo["email"]);
        // TODO 获取用户角色存入变量，角色权限数据不可存入本地，不安全
        window.sessionStorage.setItem("role", userInfo["role"]);
      }
    })
    .catch((err) => {
      ElMessage.error("获取用户信息失败！");
      console.error(err);
    });
}


export function login(userName, passWord) {
  let payload = new FormData();
  payload.append("username", userName);
  payload.append("password", passWord);
  post("/token", payload)
    .then((res) => {
      // 认证成功则保存token并跳转到首页
      // 将token保存到本地，window.localStorage
      // setItem(key, value)
      // getItem(key)
      const access_token = res.data["access_token"];
      window.sessionStorage.setItem("access_token", access_token);
      window.sessionStorage.setItem("username", userName);
      ElMessage.success({
        message: "登录成功",
        duration: 500,
      });
      // 获取用户信息
      getUserInfo();
      setTimeout(() => {
        router.push("/");
      }, 500);
    })
    .catch((err) => {
      ElMessage.error("登录失败！账号或密码错误");
      console.log(err);
    });
}

export function logout() {
  window.sessionStorage.clear();
  ElMessage.success({
    message: "已退出",
    duration: 1000,
  });
  setTimeout(() => {
    // 强制刷新页面，更新DOM
    router.go(0);
  }, 500);
}

export function updateUserPassword(oldPass, newPass) {
  let payload = new FormData();
  payload.append("old_pass", oldPass);
  payload.append("new_pass", newPass);
  payload.append("username", window.sessionStorage.getItem("username"));
  post("/password", payload)
    .then((res) => {
      if (res.data["message"] === "ok") {
        ElMessage.success({
          message: "更新用户密码成功！请重新登录",
          duration: 3000,
        });
        setTimeout(() => {
          // 退出登录
          logout();
        }, 1000);
        return true;
      } else {
        ElMessage.error("更新用户密码失败！" + res.data["message"]);
        return false;
      }
    })
    .catch((err) => {
      ElMessage.error("更新用户密码失败！请联系管理员");
      console.log(err);
    });
}

export function checkLogin() {
  return window.sessionStorage.getItem("access_token") ? true : false;
}

export function getUserRole() {
    return checkLogin()? window.sessionStorage.getItem("role") : "用户";
}
