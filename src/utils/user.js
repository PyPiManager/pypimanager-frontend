import { ElMessage } from "element-plus";

import { get, post } from "./request";
import router from "../router/index";

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
        window.localStorage.setItem("access_token", access_token);
        ElMessage.success({
          message: "登录成功",
          duration: 500,
        });
        // 获取用户信息保存到本地
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


function getUserInfo() {
    get("/user/info/")
        .then(
            (res=>{
                if (res.data["message"] == "ok") {
                    const userInfo = res.data["data"];
                    const nickName = userInfo["nickname"];
                    window.localStorage.setItem("nickname", nickName);
                }
            })
        )
        .catch((err)=> {
            ElMessage.error("获取用户信息失败！")
            console.log(err);
        });
}



export function logout() {
    post("/logout");
}