<template>
  <div id="app">
    <mt-header fixed title="Vue CMS 管理系统"></mt-header>
    <div>
      <input type='button' value='test' @click="toastSomething"/>
    </div>
    <mt-button type="primary" @click="toastSomething">你好，朋友</mt-button>
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
      toastSomething() {
        Toast( 'Hello Dj' )
      }
    }
  }
</script>

<style>


</style>
