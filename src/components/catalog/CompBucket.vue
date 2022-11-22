<template>
    <div>
      <comp-row v-for="item in getCompBucket" :key="item.id" :compItem="item"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import CompRow from '../catalog/CompRow.vue'
    export default {
        name:'CompBucket',
        components: {
            CompRow
        },
        computed: {
        ...mapGetters('computers', ['getCompBucket'])
        }
    }
</script>

<style scoped>

</style>