<template>
  <div id="app">
    <!-- <router-link to="/login">login</router-link> | -->
    <!-- vue内置组件 -->
    <transition name="router-fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade">
      <router-view v-if="!$route.meta.keepalive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import './style/common'
// name + enter进入的那一瞬间
// router-fade-enter-active 会在进入的整个过程, 完全进入之后会移除这个类名

.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity 5s;
}
.router-fade-enter, .router-fade-leave {
  opacity: 0;
}
</style>
