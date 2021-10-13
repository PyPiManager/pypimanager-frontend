import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'


// let orignalSetItem = window.sessionStorage.setItem;   // 原生sessionStorage.setItem方法
// localStorage.setItem = function(key,newValue){
//   let setItemEvent = new Event("setItemEvent");  // 重写注册setItem
//   setItemEvent.key = key;                        
//   setItemEvent.newValue = newValue;              
//   window.dispatchEvent(setItemEvent);            // 派发setItem
//   orignalSetItem.apply(this, arguments);         // 设置值
// }


const app = createApp(App)
installElementPlus(app)
app.use(router).mount('#app')