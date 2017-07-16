<template>
  <div class="tpl">

    <!-- mint-UI 实现轮播图效果 -->
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for='item in list'>
        <a :href="item.url"><img :src="item.img" alt=""></a>
      </mt-swipe-item>
    </mt-swipe>


    <!-- mui-9-宫格实现导航效果 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in navList">
          <a href="#">
            <img :src="item.imgSrc">
            <span>{{ item.title }}</span>
          </a>
        </li>
      </ul> 
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [{
          url: 'http://www.itcast.cn/subject/phoneweb/index.html',
          img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg'
        }, {
          url: 'http://www.itcast.cn/subject/phoneweb/index.html',
          img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner2-1.jpg'
        }],
        navList:[
          {
            imgSrc: '../../../statics/images/menu3.png',
            title: '新闻资讯',
            routeUrl: '#'
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

    }
  }
</script>

<style scoped>
/* 轮播图 样式 */
.mint-swipe {
  height: 200px;
}
.mint-swipe-item {
  background-color: pink;
}
.mint-swipe-item > a {
  display: block;
  width: 100%;
  height: 100%;
}
.mint-swipe-item img {
  height: 200px;
  width: 100%;
}


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
