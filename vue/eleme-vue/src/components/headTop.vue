<template>
    <header id="head_top">
        <slot name="logo"/>
        <slot name="search"></slot>
        <section v-if="goBack"
        class="head_goback" 
        @click="$router.go(-1)">
            <svg width="100%" heihgt="100%" 
            xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12, 18 4, 9 12, 0" 
                style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
        </section>
        <router-link class="head_login" 
        :to="userInfo? './profile':'/login'" 
        v-if="signinUP">
            <span class="login_span" v-if="!userInfo">登录|注册</span>
        </router-link>
        <section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
        <section>
            <slot name="changecity"></slot>
            <slot name="msite-title"></slot>
        </section>
    </header>

</template>
<script>
import { mapState } from 'vuex'
export default {
    // computed json
    computed: {
        // mapstate return state json 
        // ...将新的state json 展开到computed json里去
        ...mapState([
            'userInfo'
        ]),
    },
    props: ['signinUP', 'goBack', 'headTitle']
}
</script>
<style lang="stylus" scoped>
@import '../style/mixin'
.head_logo
    left 0.4rem
    font-weight 400
    sc(0.7rem, #fff)
    wh(2.3rem, 0.7rem)
    ct()
   
#head_top
    background-color $blue
    position fixed
    z-index 100
    left 0
    top 0
    wh(100%, 1.95rem)

.head_login
    right 0.55rem
    sc(0.65rem, #fff)
    ct()
    .login_span
        colr #ffffff

.head_goback 
    left 0.4em
    wh(.6rem, 1rem)
    line-height 15.2rem
    margin-left 0.4rem

.title_head 
    center()
    width 50%
    color #ffffff
    text-align center
    .title_text
        sc(0.8rem, #fff)
        text-align center
        font-weight bold
</style>
