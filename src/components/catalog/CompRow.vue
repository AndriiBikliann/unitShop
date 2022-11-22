<template>
    <div class="comp-row-container">
      <div>
        <img :src="comp.imgSrc" alt="comp-row-img">
      </div>

      <div>
        {{ comp.title }}
      </div>

      <div>
        {{ comp.price }}
        <button @click="onDecrement"> take away </button>
        <button @click="onIncrement"> add next one </button>
        <button @click="onDelete"> delete </button>
           <span> {{ compItem.count }} </span>
      </div>
    </div>
</template>

<script>
import { mapGetters, /*mapActions*/ } from 'vuex'
    export default {
        name:'CompRow',
        props: {
            compItem: {
                type: Object,
                default: null
            }
        },
        computed: {
            ...mapGetters('computers', ['getCompById']),
            comp() {
                return this.getCompById(this.compItem.compId)
            }
        },
    }
</script>

<style scoped>
.comp-row-container {
   display: flex
}
img {
   width: 30px;
}
</style>