<template>
  <div class="count">
    <h1>{{msg}}</h1>
    <p>{{count}}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'Count',
    data() {
      return {
        msg: 'this is a count component'
      }
    },
    computed: {
      count (){
        return this.$store.state.count
      }
    },
    methods: {
      increment () {
        this.$store.commit('increment')
      },
      decrement () {
        this.$store.commit('decrement')
      }
    }
  }
</script>

<style>

</style>
