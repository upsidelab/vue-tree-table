---
title: Search
---

# Search

In this example we implemented table with search. When a search query is typed, all paths in tree containing 
the query are expanded. For leafs only leafs containing the search query are displayed.

<br />

<SearchExampleComponent />

## Events communication

This example is implemented using events communication using EventHub. The communication looks as follows:

When user types in search query SerchInput component:
1) triggers **search-reset-event**: which makes table return to its initial state (no nodes open)
2) triggers **search-hide-all**: makes all rows in table to hide
3) searches for all paths in tree containing *search query* and triggers **search-display-event** for those paths

If *search query* is blank only **1** happens.

Let's take a look how the events are consumed by SearchNode & SearchLeaf

## Search Node

In the implementation the SearchNode is divided into two components: SearchNode & SearchNodeBase. 
SearchNodeBase is responsible for presentation layer, SearchNode orchestrates everything.
In here we will treat those two as a whole. 

#### search-display-event 
Search display event as a payload carries path to the node containing search query. 

Each node checks if it is a first node in the path.

If no, it ignores the event.

If yes it:
1. opens itself
2. emits **search-hide-event** for all its children. 

#### search-reset 
The node closes itself

#### search-hide-all
The node hides its content

## SearchLeaf

#### search-display-event
Search display event as a payload carries path to the node containing search query. 

Leaf checks if it is a first node in the path.

If no, it ignores the event.

If yes it shows its content

#### search-reset 
The leaf returns to its initial state and shows its content.

#### search-hide-all
The leaf hides its content

#### search-hide-event
Search display event as a payload carries an uuid of a node to be hidden. 

The checks if the uuid matches.

If no, it ignores the event.

If yes it hides its content

<br /><br />
You can find the implementation [here](https://github.com/upsidelab/vue-tree-table/tree/master/examples/search)






