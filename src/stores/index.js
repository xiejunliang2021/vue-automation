import { createPinia } from "pinia";

// 使用pinia的时候需要用到pinia的持久化管理工具“pinia-plugin-persistedstate”可以通过npm install进行安装
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// 创建pinia对象实例
const pinia = createPinia()
// 将持久化管理工具注册到pinia中
pinia.use(piniaPluginPersistedstate)


export default pinia



