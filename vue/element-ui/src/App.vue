<template>
  <div id="app">
    <el-button loading type="success">默认按钮</el-button>
    <el-button :loading="isLoading" icon="el-icon-edit" type="primary" @click="doLoading"></el-button>
    <el-button :disabled="disabled" type="info">默认按钮</el-button>
    <el-button :disabled="disabled" type="warning">默认按钮</el-button>
    <el-button :disabled="disabled" type="danger">默认按钮</el-button>
  </div>
</template>

<script>
import ELButton from '@/components/ElButton'
export default {
  name: 'App',
  data() {
    return {
        disabled: false,
        isLoading: false
    } 
  },
  mounted () {
    setTimeout(() => {
        this.disabled = true;
    },2000)
  },
  components: {
    'el-button': ELButton
  },
  methods: {
    doLoading: function () {
      console.log('aa')
      this.isLoading = !this.isLoading
    }
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
