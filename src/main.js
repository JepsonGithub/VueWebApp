import Vue from 'vue'
// 导入 Mint UI 模块 
import MintUI from 'mint-ui'
// 导入 Mint UI CSS
import 'mint-ui/lib/style.css'
// 按需引入
// import { Button } from 'mint-ui';
// Vue.component( Button.name, Button )
// 如果项目中需要引入很多的 Mint-UI 的内容
// 最简单的方式就是在 main.js 中全部引入
Vue.use( MintUI )


// 导入 组件
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
