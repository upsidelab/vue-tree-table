---
title: Quick Start
---

# Quick start

In order to use the VueTreeTable component you just have to import it an pass two props:
* **table-data** - an array of objects that are to be presented in the tabe
* **columns** - an array which will specify the table's columns

Let's take a look at simple example: 

```
<template>
  <tree-table
          class="table"
          :columns="columns"
          :table-data="tableData" />
</template>

<script>
  import TreeTable from '../../../tree-table/src/components/TreeTable'

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

<br/>

The result table will look like this:

<br />

<DefaultTableTree />

#### table-data
As you can see the table data is just an array of objects. For those objects you can specify their **children**, 
which are going to be displayed as its parent collapsible content. 

#### columns
In columns property you are to define the table structure. It should take a form of an array, containing definitions 
of columns in wanted order. Column definition should have to attributes: 
* **label**: The label displayed in tables header. If not specified, the columns header is not going to be displayed
* **id**: The indicator of an value that should be displayed in given column. For example if the id is name, for each 
row the name attribute of the row object is going to be displayed.

If you want to customize the table take a look at [customization section](/guide/customization)




