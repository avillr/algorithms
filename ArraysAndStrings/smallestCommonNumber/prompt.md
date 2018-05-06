# Find Smallest Common Number

## [Solution (JS)](./solution.js)

Given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays.

### Example

Given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays.
For example, let's look at the below three arrays. Here 6 is the smallest number that's common in all the arrays.

```
const a = [6, 7, 10, 25, 30, 63, 64]
const b = [-1, 4, 5, 6, 7, 8, 50]
const c = [1, 6, 10, 14]
```

### Hints

* Take advantage of sorted array to reduce complexity
* Use three pointers
