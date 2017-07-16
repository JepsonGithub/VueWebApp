<template>
  <div id="app">
    <!-- 整个系统的头部 -->
    <mt-header fixed title="Vue CMS 管理系统"></mt-header>
    
    <!-- 路由占位 -->
    <router-view></router-view>

    <nav class="mui-bar mui-bar-tab">
      <router-link to="home" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="member" class="mui-tab-item">
        <span class="mui-icon mui-icon-person"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="shopping" class="mui-tab-item">
        <span class="mui-icon mui-icon-star"></span>
        <span class="mui-tab-label">购物</span>
      </router-link>
      <router-link to="search" class="mui-tab-item">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>

  </div>
</template>

<script>
  // 使用 toast
  import { Toast } from 'mint-ui'

  export default {
    name : 'app',
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style>
html,body {
  height: 100%;
  width: 100%;
}

#app {
  height: 100%;
  width: 100%;
  padding-top: 40px;
}

</style>
