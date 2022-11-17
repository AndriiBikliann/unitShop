<template>
    <div class="container-catalog">
        <ul>
            <li> <button @click="onClick"> Computers </button> </li>
            <li>  Phones </li>
            <li> TV </li>
            <li> Monitors </li>
            <li>Washing machines </li>
        </ul>

        <div v-if="comp">
           <computers/>
        </div>
    </div>
</template>

<script>
import Computers from './computers.vue'
    export default {
        name:'Catalog-page',
        components: {
            Computers
        },
        data() {
            return {
                comp: null
            }
        },
        methods: {
            onClick() {
                this.comp = true
            }
        },
    }
</script>

<style scoped>
.container-catalog {
    float: left;
    border-top: 1px solid black;
    text-transform: lowercase;
    width: 800px;
    height: 500px;
    text-align: left;
}
</style>