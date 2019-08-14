---
title: Customization
---

# Customization

There are three things you can customize in vue tree table:
1) Columns **headers**
2) **Nodes** - which are rows with children 
3) **Leafs** - which are rows with no children

It can be done via vue slots. If you don't know how vue slots work you probably want to read [this](https://vuejs.org/v2/guide/components-slots.html)

### Column Header Customization
In order to customize the column header you need to provide the tree table component with headerTemplate slot

```
<tree-table
        class="table"
        :columns="columns"
        :table-data="tableData">
        
    <template #headerTemplate="headerProps">
        <custom-header v-bind="headerProps" />
    </template>
    
</tree-table>
```

In headerProps is going to contain columns props, which is basically a columns configuration you are going to specify 
as tree-table props 

### Node Customization
In order to customize nodes you need to provide the tree table component with nodeTemplate slot

```
<tree-table
        class="table"
        :columns="columns"
        :table-data="tableData">
        
    <template #nodeTemplate="nodeProps">
        <custom-node v-bind="nodeProps" />
    </template>
    
</tree-table>
```

NodeProps consists of following:
* **rowData** - the data that presumably is to be displayed in the row
* **defaultOrder** - the array of columns ids in order specified in columns tre--table props
* **depth** - the depth in table tree, for example if the node has two parents above its depth is 2
* **onToggle** - the function you should call if you want the node to toggle(close when open, open when closed)
* **onOpen** - the function you should call if you want to open the node or keep it open
* **onClose** - the function you should call if you want to close the node or keep it closed

### Leaf Customization
In order to customize nodes you need to provide the tree table component with leafTemplate slot

```
<tree-table
        class="table"
        :columns="columns"
        :table-data="tableData">

    <template #leafTemplate="leafProps">
        <custom-leaf v-bind="leafProps" />
    </template>
    
</tree-table>
```

LeafProps consists of following:
* **rowData** - the data that presumably is to be displayed in the row
* **defaultOrder** - the array of columns ids in order specified in columns tre--table props
* **depth** - the depth in table tree, for example if the node has two parents above its depth is 2















