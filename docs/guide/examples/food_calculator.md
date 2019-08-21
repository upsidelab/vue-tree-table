---
title: FoodCalculator
---
# Food Calculator
In this example the table serves as a diet calculator: for each day, each meal we keep track of the nutrition of 
ingredients used.

<FoodCalculator />

In this examples we added to Tree Table Component following enhancements:
* dynamically adding and removing rows
* dynamically calculating node's data from leaves
* definition columns-width
* editable content

Let's go briefly how the enhancements were implemented.

#### Dynamically adding and removing rows
We implemented custom Node into which we injected as props method for adding and removing data to **table-data**

#### Dynamically calculating node's data from leaves
In custom node we watched children data and triggered recalculation on change

#### Definition of columns width
In columns definition we added additional attribute width, which was then injected to cells as a flex-grow. 
The columns definition was then injected as a property to custom nodes and leaves, therefore we had access to that 
information on all levels 

#### Editable content
In custom nodes and leaves we render inputs for editable keys, which have rowData connected as a model.

Food calculator implementation is available [here](https://github.com/upsidelab/vue-tree-table/tree/master/examples/food_calculator)