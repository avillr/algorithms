# Quick Sort

## [Solution (JS)](./solution.js)

Given an integer array, sort it in ascending order using quicksort.

### Example

```
Input:  [55, 23, 26, 2, 5]
Output: [2, 23, 25, 26, 55]
```

Here is an overview of how the quicksort algorithm works.

* Select a pivot element from the array. We can pick the first element as the pivot (following Hoare's algorithm). Another common approach is to select a random element as the pivot.
* Reorder the array by comparing with the pivot element such that smaller values end up at the left side, and the larger values end up at the right side of the pivot.
* Now, the pivot element is in its correct sorted position.

Applying the above steps, we can recursively sort the sublists on the right and left sides of the pivot.
