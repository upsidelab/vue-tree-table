<template>
  <div id="app">
    <!--<HelloWorld />-->
    <SortingExample/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SortingExample from "./examples/sorting/SortingExample";

export default {
  name: 'App',
  components: {
    HelloWorld,
    SortingExample
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}
</style>
