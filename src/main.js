import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 导入element-plus相关
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 支持中文语言
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 使用element-plus暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'

// 导入element图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 导入全局项目的css样式
import './style/global.scss'



// 创建一个应用
const app = createApp(App)

// app.use(createPinia())

// 注册路由
app.use(router)

// 注册element-plus
// app.use(ElementPlus)

app.use(ElementPlus, {
    locale: zhCn,
  })

// 注册图标库
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }


// 挂载根节点
app.mount('#app')
