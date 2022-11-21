<template>
    <div class="cart-container">
        <div>
            <img :src="comp.imgSrc" alt="comp-image">
        </div>

        <div>
            {{ comp.title }}
        </div>

        <div>
            {{ comp.price }}
            <button @click="onAdd"> add to bucket </button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'CompCard',
        props: {
            comp: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            //...mapActions(['addPizza']),
            onAdd() {
                this.addComp(this.comp.id)
            }
        },
    }
</script>

<style scoped>

</style>