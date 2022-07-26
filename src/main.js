import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 1.重置样式
import 'normalize.css'
// 2.自定义样式
import '@/assets/styles/common.less'
createApp(App).use(store).use(router).mount('#app')
