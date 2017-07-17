<template>
  <div class="tpl">
    <mt-header fixed title="新闻资讯列表">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="mui-content">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for='item in newsList'>
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left leftpic" :src="item.img_url">
            <div class="mui-media-body">
              <h3 class="title">{{ item.title }}</h3>
              <p class='mui-ellipsis detail'>
                <span class="start-time">发表时间：{{ item.add_time | filter_fmtdate("YYYY-MM-DD") }}</span>
                <span class="click-times">点击：{{ item.click }}</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Toast } from 'mint-ui'

  import config from '../../common/config.js'

 
  export default {
    data () {
      return {
        newsList : []
      }
    },
    methods: {
      getNewsList() {
        // this.$http.get( url ).then( success, fail )
        this
          .$http
          .get( `${config.baseUrl}/api/getnewslist` )
          .then( 
            res => {
              var message = res.body.message
              if ( message ) {
                this.newsList = message
                // console.log( this.newsList )
              }
            }, 
            res => Toast("当前网络忙，请稍后重试") 
          )
      }
    },
    mounted() {
      // 获取数据渲染页面
      this.getNewsList()
    }
  }
</script>

<style scoped>
.mui-content > .mui-table-view:first-child {
  margin-top: 5px;
}

.mui-table-view-cell .leftpic {
  margin-top: 8px;
}
.mui-table-view-cell .mui-media-body {
  height: 60px;
}
.mui-table-view-cell .mui-media-body h3{
  font-size: 14px;
  color: #777777;
  height: 30px;
  line-height: 15px;
  font-weight: normal;
  white-space: normal;
  
  /* 两行溢出 */
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.mui-table-view-cell .detail {
  display: flex;
  font-size: 12px;
  color: rgba(0,148,255,0.9);
}
.mui-table-view-cell .detail .start-time {
  flex: 3;
  overflow: hidden;
}
.mui-table-view-cell .detail .click-times {
  flex: 1;
  overflow: hidden;
}

</style>
