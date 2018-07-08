<template>
    <div class="loginContainer">
        <head-top head-title="登录" goBack="true">
            <slot name="button"></slot>
        </head-top>
        <img :src="captchCodeImg" v-if="captchCodeImg"
        style="margin-top:50%">
    </div>
</template>
<script>
import headTop from '@/components/headTop'
import { getCaptchas } from '@/api/getData'
// 业务经验一：navigationBar封装
// history title 居中 右边的buttons
export default {
    data () {
        return {
            captchCodeImg: '',
            codeNumber: null
        }
    },
    components: {
        headTop
    },
    methods: {
        async getCaptchaCode() {
            const res = await getCaptchas();
            console.log(res.code)
            this.captchCodeImg = res.code
        }
    },
    mounted () {
        this.getCaptchaCode()
    }
}
</script>
<style>

</style>
