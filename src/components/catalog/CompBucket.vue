<template>
    <div class="comp-bucket-container">
      <comp-row v-for="item in getCompBucket" :key="item.id" :compItem="item"/>
      <div class="total-price"> 
        Total price {{ getTotalPrice }} <br>
        Total count {{ getTotalCount }}
        </div>
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
        ...mapGetters('computers', ['getCompBucket', 'getTotalPrice', 'getTotalCount'])
        }
    }
</script>

<style scoped>
.comp-bucket-container {
    float: left;
    width: 800px;
    min-height: 500px;
}
.total-price {
    float: right;
    margin: 20px 40px;
}
</style>