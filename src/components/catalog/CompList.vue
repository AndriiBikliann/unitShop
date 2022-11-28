<template>
    <div class="container-comp">
       <comp-card v-for="comp in getCompList" :key="comp.id" :comp="comp"/>
    </div>
</template>

<script>
import CompCard from './CompCard.vue';
import { mapGetters } from "vuex";
    export default {
       name:'Computers-page',
       components: {
           CompCard
       },
       computed: {
         ...mapGetters('computers', ['getCompList'])
       },
    }
</script>

<style lang="css" scoped>
.container-comp  {
    float: left;
    text-transform: lowercase;
    width: 800px;
    height: 400px;
    text-align: left;
    margin-left: 55px;
  }
</style>