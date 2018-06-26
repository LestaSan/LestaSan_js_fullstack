<template>
    <button class="el-button" 
    :class = "[type? 'el-button--' + type : '', disabled? 'is-disabled': '', 
    {'is-disabled': buttonDisabled, 'is-loading': loading}]"
    :disabled="buttonDisabled">
        <i class="el-icon-loading" v-if="loading"></i>
        <i v-if="icon&&!loading" :class="icon"></i>
        <slot>
            <!-- 插槽占位 -->
            <!-- 此处是 默认按钮 位置 -->
        </slot>
    </button>
</template>
<script>
export default {
    name: 'ELButton',
    props: {
        disabled: Boolean,
        type: {
            type: String,
            default: 'default'
        },
        loading: Boolean,
        icon: {
            type: String,
            default: ''
        }
    },
    computed: {
        buttonDisabled () {
            console.log(this.disabled)
            return this.disabled
        }
    }
}
</script>
<style>

</style>