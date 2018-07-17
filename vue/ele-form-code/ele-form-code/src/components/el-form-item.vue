<template>
    <div class="el-form-item">
        <label class="el-form-item__label" v-if="label||$slots.label">
            <slot name="label">{{label}}</slot>
        </label>
        <div class="el-form-item__content">
            <slot/>
        </div>
    </div>
</template>
<script>
import emitter from '@/mixins/emitter'
export default {
    props: {
        label: String,
        prop: String
    },
    mixins: [emitter],
    methods: {
        validate (trigger, callback) {
            // rules在app.vue里 ElForm的props上  form.
            // 当前item对应的rule是什么 [name] 先要得到所有的rules
            // el-input值是什么
            const rules = this.form.rules
            const item_rule = rules[this.prop];
            console.log(item_rule)
        }
    },
    mounted () {
        // fields生成一下

        // console.log(this)
        this.dispatch('ElForm', 'el.form.addField', [this]);
    },
    computed: {
        form () {
            let parent = this.$parent;
            let parentName = parent.$options.componentName;
            while(parentName !== 'ElForm' ) {
                parent = parent.$parent;
                parentName = parent.$options.componentName;
            }
            return parent;
        }
    }
}
</script>
<style>

</style>
