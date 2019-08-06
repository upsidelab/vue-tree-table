<template>
  <input v-model="searchQuery" @input="debouncedSearch" />
</template>

<script>
  import search from '../utils/search'
  import debounce from 'debounce'

  export default {
    name: 'SearchInput',
    props: {
      eventHub: { type: Object, default: () => { return {} } },
      tableData: { type: Array, default: () => {return []} }
    },
    data: function(){
      return {
        searchQuery: ''
      }
    },
    created: function(){
      this.debouncedSearch = debounce(this.search, 500)
    },
    methods: {
      search: function(){
        this.closeAll()
        if( this.isPerformingSearch() ){
          this.hideAll()
        }
        const paths = search(this.tableData, this.searchQuery)
        paths.forEach((path) => {
          this.eventHub.$emit('search-display-event', path)
        })
      },
      closeAll: function(){
        this.eventHub.$emit('search-reset')
      },
      hideAll: function () {
        this.eventHub.$emit('search-hide-all')
      },
      isPerformingSearch(){
        return this.searchQuery
      }
    }
  }
</script>

<style scoped>

</style>