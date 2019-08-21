<template>
  <div id="app">
    <SearchExample />
  </div>
</template>

<script>
import SearchExample from './components/SearchExample'

export default {
  name: 'app',
  components: {
    SearchExample,
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
  width: 40%;
  margin: auto;
  margin-top: 60px;
}
</style>
