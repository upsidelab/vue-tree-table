<template>
  <div id="app">
    <SortingExample/>
  </div>
</template>

<script>
import SortingExample from './components/SortingExample'

export default {
  name: 'app',
  components: {
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
}
</style>
