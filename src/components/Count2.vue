<template>
  <div class="hello">
    <h1>{{count}}</h1>
    <button @click="changeCount">+10</button>
  </div>
</template>

<script>
import store from '../store/store.js'
export default {
  name: 'HelloWorld',
  computed: {
      count() {
        return this.$store.state.count
      }
  },
  methods: {
      changeCount() {
         console.log('+++')
         store.commit('changeCount',10)
      }
  },
  store
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
