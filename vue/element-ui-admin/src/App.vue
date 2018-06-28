<template>
  <div id="app">
    <login />
    <p v-html="content"></p>
  </div>
</template>

<script>
// @表示alias 地址短链接，在哪里都指向src 让地址引入更轻松
import Login from '@/views/Login'
export default {
  name: 'App',
  data () {
    return {
      content: '<span>美团挂了，还有UC</span>'
    }
  },
  components: {
    Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
