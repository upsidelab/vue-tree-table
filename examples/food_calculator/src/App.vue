<template>
  <div id="app">
    <food-calculator-example/>
  </div>
</template>

<script>

import FoodCalculatorExample from "./components/FoodCalculatorExample";

export default {
  name: 'app',
  components: {
      FoodCalculatorExample
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
