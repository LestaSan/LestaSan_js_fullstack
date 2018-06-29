<template>
    <div>
        <comment-form @addComment="addComment"/>
        <comment-list :list="list"/>
        <pagination 
        :totalCount="totalCount"
        :currentPage="currentPage"
        :pagesize="pagesize"
        @turnPage="turnPage"/>
    </div>
</template>
<script>
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import Pagination from './Pagination'
export default {
    data () {
        return {
            // totalData 是所有的数据 => 取出当前页面的评论 list
            list: [],
            // Pagination这个组件无法独立 list
            pagesize: 3,
            totalData: [],
            totalCount: 0,
            currentPage: 1,

        }
    },
    methods: {
        addComment (msg) {
            console.log(msg)
            this.totalData.unshift(msg)
            this.totalCount = this.totalData.length;
            if (this.totalCount < this.pagesize) {
                this.list = this.totalData
            } else {
                this.list = this.totalData.slice(this.totalCount-this.pagesize)
            }
            this.currentPage = 1;
        },
        turnPage (curr) {
            console.log(curr)
        }
    },
    components: {
        CommentForm,
        CommentList,
        Pagination
    }
}
</script>
<style>

</style>
