<template>
  <div class="row">
    <div
      class="open-button"
      @click="toggle"
    >
      <div
        v-if="!isOpen"
        class="closed"
      >
      </div>
      <div
        v-if="isOpen"
        class="open"
      >
      </div>
    </div>
    <div
      v-for="key in defaultOrder"
      :key="key"
      class="cell"
    >
      <div
        v-if="childrenColumns.includes(key) && isOpen"
        class="sorting-buttons"
      >
        <div class="sort-button" @click="sortChildrenBy({key, asc: true})">
          ▲
        </div>
        <div class="sort-button" @click="sortChildrenBy({key, asc: false})">
          ▼
        </div>
      </div>
      <div v-else>
        {{ rowData[key] }}
      </div>
    </div>
  </div>
</template>

<script>
    import sortData from "../utils/sortData";

    export default {
        name: 'SortingNode',
        props: {
            rowData: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            defaultOrder: {
                type: Array,
                default: () => {
                    return []
                }
            },
            depth: {
                type: Number,
                default: 0
            },
            onToggle: {
                type: Function,
                default: () => {
                }
            }
        },
        data: function () {
            return {
                isOpen: false
            }
        },
        computed: {
            columnWithOpenButton: function () {
                return this.defaultOrder[0]
            },
            childrenColumns: function () {
                return this.defaultOrder.slice(2)
            }
        },
        methods: {
            sortChildrenBy(params) {
                sortData(this.rowData.children, params)
            },
            toggle() {
                this.isOpen = !this.isOpen
                this.onToggle()
            }
        }
    }
</script>

<style scoped>
  @import "../../../../tree-table/src/components/common.css";

  .open-button {
    margin-right: 0.25rem;
    margin-left: -0.5rem;
    display: flex;
    align-items: center;
  }

  .open-button:hover{
    color: #cfcfcf;
  }

  .closed::before{
    content: "▸";
  }

  .open::before{
    content: "▾";
  }

  .sorting-buttons{
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
  }

  .sort-button{
    font-size: x-small;
    margin-left: 0.125rem;
    margin-right: 0.125rem;
  }

  .sort-button:hover{
    color: #cfcfcf;
  }

</style>
