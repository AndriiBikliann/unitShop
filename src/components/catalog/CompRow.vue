<template>
    <div class="comp-row-container">
      <div>
        <img :src="comp.imgSrc" alt="comp-row-img">
      </div>

      <div>
        {{ comp.title }}
      </div>

      <div>
        price 
        {{ comp.price }}
        <button @click="onDecrement"> - </button>
        <button @click="onIncrement"> + </button>
        <button @click="onDelete"> delete </button>
           <span> {{ compItem.count }} </span>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, /*mapActions*/ } from 'vuex'
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
        methods: {
          ...mapActions('computers', ['compAction']),

          onDecrement() {
             this.compAction({
                type:'decrement',
                value: this.compItem.id
             })
          },
          onIncrement() {
             this.compAction({
                type:'increment',
                value: this.compItem.id
             })
          },
          onDelete() {
             this.compAction({
                type:'delete',
                value: this.compItem.id
             })
          },
        },
    }
</script>

<style scoped>
.comp-row-container {
   display: flex;
   margin: 20px 0px 20px 40px;
}
img {
   width: 30px;
}
</style>