<template>
  <div class="tpl">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for='item in list'>
        <a :href="item.url"><img :src="item.img" alt=""></a>
      </mt-swipe-item>
    </mt-swipe>
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
        }]
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
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

</style>
