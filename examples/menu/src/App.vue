<template>
  <div id="app">
    <MenuExample />
  </div>
</template>

<script>
import MenuExample from './components/MenuExample'

export default {
  name: 'app',
  components: {
    MenuExample
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
