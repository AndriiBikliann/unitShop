<template>
    <div class="home-container">
       <h4> Your products for order </h4>
       <comp-bucket/>
    </div>
</template>

<script>
import CompBucket from '../components/catalog/CompBucket.vue'
    export default {
        name:'Home-page',
        components: {
            CompBucket
        },
    }
</script>

<style scoped>
.home-container {
    float: left;
    border-top: 1px solid black;
    height: 500px;
    text-align: left;
}
h4 {
    padding: 20px 40px;
}
</style>