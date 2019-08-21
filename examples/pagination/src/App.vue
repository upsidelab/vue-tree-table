<template>
  <div id="app">
    <PaginationExample />
  </div>
</template>

<script>
import PaginationExample from './components/PaginationExample'

export default {
  name: 'app',
  components: {
    PaginationExample
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
  width: 65%;
  margin: auto;
  margin-top: 60px;
}
</style>
