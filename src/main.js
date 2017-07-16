import Vue from 'vue'

/* ============= S 导入 MintUI   ============== */
import MintUI from 'mint-ui'
// 导入 Mint UI CSS
import 'mint-ui/lib/style.css'
// 需要引入很多组件,最简单的方式就是 main.js 中全部引入
Vue.use( MintUI )                                  
/* ============= E 导入 MintUI  ============== */

		
/* ============= S 导入 Mui 组件   ============== */
import '../statics/css/mui.css'
import '../statics/css/icons-extra.css'
/* ============= E 导入 Mui 组件  ============== */


		
/* ============= S 引入路由   ============== */
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/* ============= E 引入路由  ============== */

		

/* ============= S 引入组件   ============== */
import Home from './components/home/Home.vue'
import Member from './components/member/Member.vue'
import Shopping from './components/shopping/Shopping.vue'
import Search from './components/search/Search.vue'
import App from './App.vue'
/* ============= E 引入组件  ============== */


// 创建 router 实例
const router = new VueRouter({
	linkActiveClass: 'mui-active',
  routes:[
   	{ name: 'root', path: '/', redirect: '/home' },
		{ name: 'home', path: '/home', component: Home },
  	{ name: 'member', path: '/member', component: Member },
  	{ name: 'shopping', path: '/shopping', component: Shopping },
  	{ name: 'search', path: '/search', component: Search }
	]
})


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
