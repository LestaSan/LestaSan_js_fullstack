<template>
    <div>msite</div>
</template>
<script>
import { cityGuess } from '@/api/getData'
export default {
    data () {
        return {
            geohash: ''
        }
    },
    async beforeMount () {
        if(this.$route.query.geohash) {
            this.geohash = this.$route.query.geohash
        } else {
            const data = await cityGuess();
            this.geohash = `${data.latitude},${data.longitude}`
        }
        // msite 是由一个独立的项目组做的 多个spa 组成
        console.log(this.$route.query.geohash);
    }
}
</script>
