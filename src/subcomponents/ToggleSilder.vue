<template>
  <div class="tpl">
    <!-- mint-UI 实现轮播图效果 -->
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for='item in sliderlist'>
        <a :href="item.url"><img :src="item.img" alt=""></a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {

    },
    props: [ 'sliderlist' ]
  }
</script>

<style scoped>
/* 轮播图 样式 */
.mint-swipe {
  height: 200px;
}
.mint-swipe-item {
  background-color: #efeff4;
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
</style>
