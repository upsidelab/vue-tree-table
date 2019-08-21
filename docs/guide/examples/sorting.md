---
title: Sorting
---

Here's an example how we added sorting to vue-tree-table-component:

<SortingExampleComponent />

We implemented sorting on two levels:
* table level: we implemented custom TableHeader, which on click of button sorted the **table-data**
* node level: we implemented custom TableNode, which on click of button sorted its children

You can find an implementation of that [here](https://github.com/upsidelab/vue-tree-table/tree/master/examples/sorting)

