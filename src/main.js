import { createApp } from 'vue'
import App from './App.vue'
// 全局引入ant-design
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// 导入路由
import router from './router'
const app = createApp(App);
app.use(router)
app.use(Antd)
app.mount("#app");
