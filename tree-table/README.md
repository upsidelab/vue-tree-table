# vue-tree-table

**Vue-tree-table-component** is a customizable solution for fast creation of components containing tree structure - most of all tree tables!

## Installing vue-tree-table-component
### NPM

````
npm install vue-tree-table-component --save
````


### Yarn

````
yarn add vue-tree-table-component
````

## Getting started

In order to use the VueTreeTable component you just have to import it an pass two props:
* **table-data** - an array of objects that are to be presented in the tabe
* **columns** - an array which will specify the table's columns

Let's take a look at simple example: 

```html
<template>
  <tree-table
          class="table"
          :columns="columns"
          :table-data="tableData" />
</template>

<script>
  import TreeTable from 'vue-tree-table-component'

  export default {
    name: 'DefaultTableTree',
    components: {TreeTable},
    data: function(){
      return {
        tableData: [
          {name: 'Ziuta', surname: 'Kozak', children: [
              {name: 'Czerwony Kapturek', surname: 'Kozak'}
            ]},
          {name: 'Koziolek', surname: 'Matolek', children: [
              { name: 'Timon', surname: 'Matolek', children: [ {name: 'Timon Junior', surname: 'Matolek'} ]}
            ]},
          {name: 'Pumba', surname: 'unknown'}
        ],
        columns: [{label: 'Name', id: 'name'}, {label: 'Surname', id: 'surname'}]
      }
    }
  }
</script>

<style scoped>
  .table{
    width: 60%;
    margin: auto;
  }
</style>
```

## Full documentation

You can find whole documentation with examples [here](https://naughty-hugle-cca02d.netlify.com/)

## Contributing

We're always open for contributions. If you'd like to get involved, contact us at grzegorz.tluszcz@upsidelab.io.
If you've found any bugs or have ideas for new features you can create an issue on GitHub.

## Licence
VoiceCommerce is provided under the MIT license.

Please see [LICENSE](/LICENSE) for licensing details.
