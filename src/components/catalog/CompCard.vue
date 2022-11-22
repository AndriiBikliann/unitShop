<template>
    <div class="cart-container">
        <div>
            <img :src="comp.imgSrc" alt="comp-image">
        </div>

        <div>
            {{ comp.title }}
        </div>

        <div>
            price {{ comp.price }} <br>
            <button @click="onAdd"> add to bucket </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        name:'CompCard',
        props: {
            comp: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            ...mapActions('computers', ['addComp']),
            onAdd() {
                this.addComp(this.comp.id)
            }
        },
    }
</script>

<style scoped>
.cart-container {
    width: 250px;
    height: 200px;
    float: left;
}
.cart-container img{
   width: 150px;
   height: 100px;
}
</style>