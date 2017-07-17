<template>
  <div class="tpl">
    <!-- 封装轮播图组件 toggleSilder -->
    <!-- 通过 v-bind:prop 传递过去 -->
    <toggle-slider :sliderlist='list' ></toggle-slider>

    <!-- mui-9-宫格实现导航效果 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in navList">
          <router-link :to="item.routeUrl">
            <img :src="item.imgSrc">
            <span>{{ item.title }}</span>
          </router-link>
        </li>
      </ul> 
    </div>

  </div>
</template>

<script>
  // 导入轮播图 组件
  import ToggleSilder from '../../subcomponents/ToggleSilder.vue'

  import config from '../../common/config.js'
  
  import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        list: [],
        navList:[
          {
            imgSrc: '../../../statics/images/menu3.png',
            title: '新闻资讯',
            routeUrl: '/news/list'
          },
          {
            imgSrc: '../../../statics/images/menu4.png',
            title: '图片分享',
            routeUrl: '#'
          },
          {
            imgSrc: '../../../statics/images/menu5.png',
            title: '商品展示',
            routeUrl: '#'
          },
          {
            imgSrc: '../../../statics/images/menu5.png',
            title: '留言反馈',
            routeUrl: '#'
          },
          {
            imgSrc: '../../../statics/images/menu9.png',
            title: '搜索资讯',
            routeUrl: '#'
          },
          {
            imgSrc: '../../../statics/images/menu10.png',
            title: '联系我们',
            routeUrl: '#'
          },
        ]
      }
    },
    methods: {

    },
    mounted() {
      // 通过 this.$http.get 方法发送 ajax 请求，获取数据
      this.$http.get( `${config.baseUrl}/api/getlunbo` ).then(response => {
        this.list = response.body.message || [];
      }, response => {
        Toast( '网络似乎不太好，请稍后重试' )
      });
    },
    // 局部注册组件
    components: {
      // <toggle-slider> 将只在父模板可用
      'toggle-slider': ToggleSilder
    }
  }
</script>

<style scoped>
/* 9 宫格 导航栏的 样式 */
.mui-content > .mui-table-view:first-child {
  margin-top: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0 none;
}
.mui-table-view.mui-grid-view {
  padding: 10px 0;
  background-color: #fff;
}
.mui-table-view.mui-grid-view li {
  padding: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell > a:not(.mui-btn){
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px;
}
.mui-table-view.mui-grid-view li img {
  width: 50px;
  height: 50px;
  display: block;
  margin: 0 auto;
}
.mui-table-view.mui-grid-view li span {
  display: block;
  text-align: center;
  padding: 10px 0;
}
</style>
