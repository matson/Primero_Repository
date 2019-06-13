//Problem:
/*You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example, if n = 10:

return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */

//Solution:

function monkeyCount(n) {
// your code here
var count = 0; //counter for numbers
var array = []; //empty array

  for(var i = 0; i<n; i++){
  count = count + 1; //increment count
  array[i] = count; //value is stored in new array
  }
return array;
}
