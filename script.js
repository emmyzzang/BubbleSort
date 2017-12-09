// Code from school; stored in this repo for personal reference 
// For leetcode answers I have written myself, see my cs repo. 

// Array that needs to be sorted
var unsortedArr = [
  10,
  5,
  25,
  1,
  33,
  90,
  17,
  20,
  7,
  9,
  22,
  37,
  99,
  1000,
  100,
  200,
  300
];

// Declare a variable that will act as a flag to let us know once the array has
// Finished sorting
var sorted;

function bubbleSort(arr) {
  // Every time we iterate over the array, we know at least the last value has
  // Been sorted, so we don't have to iterate to that index again
  var end = arr.length - 1;
  // Set flag to true, if we have to swap any values, the flag will be then set
  // to false
  sorted = true;
  for (var i = 0; i < end; i++) {
    // If the value of the current index is less than the next index, we know
    // the list is not properly sorted and swap their positions.
    if (arr[i] > arr[i + 1]) {
      // We have to create a temporary variable to hold a value, so we can swap
      // the values of the two positions
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      sorted = false;
    }
  }
  end--;
}

do {
  bubbleSort(unsortedArr);
} while (!sorted);

console.log(unsortedArr);
