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



    
/* ============= S 导入第三方插件   ============== */
// 时间插件
import moment from 'moment'
/* ============= E 导入第三方插件  ============== */
    		





/* ============= S 引入路由   ============== */
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/* ============= E 引入路由  ============== */



/* ============= S 导入 VueResource   ============== */
import VueResource from 'vue-resource'
Vue.use(VueResource)
/* ============= E 导入 VueResource  ============== */



/* ============= S 引入公共样式  ============== */
import '../statics/css/common.css'
/* ============= E 引入公共样式  ============== */



/* ============= S 注册全局过滤器   ============== */
// 注册
Vue.filter('filter_fmtdate', (dateTime, fmtString) => {
  // 返回处理后的值
  if (!dateTime) return ''
  return moment( dateTime ).format( fmtString )
})
// getter，返回已注册的过滤器
// var myFilter = Vue.filter('my-filter')
/* ============= E 注册全局过滤器  ============== */
		


		

/* ============= S 引入组件   ============== */
import Home from './components/home/Home.vue'
import Member from './components/member/Member.vue'
import Shopping from './components/shopping/Shopping.vue'
import Search from './components/search/Search.vue'

// news 新闻详情组件
import News from './components/news/News.vue'
import NewsList from './components/news/NewsList.vue'
import NewsDetail from './components/news/NewsDetail.vue'


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
  	{ name: 'search', path: '/search', component: Search },
    // 新闻详情  嵌套路由
    {
      name: 'news', path: '/news', component: News,
      children: [
        { name: 'newslist', path: 'list', component: NewsList },
        { name: 'newsdetail', path: 'detail', component: NewsDetail }
      ]
    },
	]
})


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
