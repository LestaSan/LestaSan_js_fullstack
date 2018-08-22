<template>
    <div class="index container">
        <top-list :articles="articles"></top-list>
        <p class="load-tip" v-if="isLoading">加载中...</p>
        <p class="load-tip" v-if="noMore">没有更多了</p>
    </div>
</template>
<script>
    export default {
        head: {
            title: 'home page'
        },
        data () {
            return {
                isLoading: false,
                noMore: false,
                articles: [
                    {
                        id: 1,
                        content: '### 我来自火星，来自星星的你 我来自火星，来自星星的你，炸鸡汉堡冰阔落 我来自火星，来自星星的你，炸鸡汉堡冰阔落 我来自火星，来自星星的你，炸鸡汉堡冰阔落 我来自火星，来自星星的你，炸鸡汉堡冰阔落 ###'
                    }
                ]
            }
        }
    }
</script>
