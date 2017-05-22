<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{totalPrice}}</p>
    <p>
      <button @click="addPrice">+</button>
      <button @click="reducePrice">-</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'this is a hello component',
      price:5
    }
  },
  computed:{
    totalPrice() {
        return this.$store.getters.getTotal
    }
  },
  methods:{
    addPrice (){
      //this.$store.commit('addPrice',this.price)
      this.$store.dispatch('add',this.price)
    },
    reducePrice (){
      this.$store.commit('reducePrice',this.price)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
