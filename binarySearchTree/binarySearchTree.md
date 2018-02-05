# Binary Search Tree
Create a Binary Search Tree class with insert, contains, and remove methods. Every class should have a value (integer) and a left and right property which points to either null or another BST instance.

```
Sample Input:
          12
       /      \
      8        14
    /  \      /  \
   5   10   13    25
  /                 \
 1                   30
Sample Output:
contains(25) => true

insert(11) =>
          12
       /      \
      8        14
    /  \      /  \
   5   10   13    25
  /     \           \
 1       11          30

remove(14) =>
          12
       /      \
      8        13
    /  \         \
   5   10         25
  /                 \
 1                   30
```
