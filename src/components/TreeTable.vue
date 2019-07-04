<template>
    <TreeBody v-bind:data="data"/>
</template>

<script>
  import TreeBody from './TreeBody'
  export default {
    name: 'TreeTable',
    components: {TreeBody},
    props: {
      data: Array
    }
  }
</script>

<style scoped>

</style>