const sort = require('../lib/sort-utility');
const test = require ('../lib/test-framework');
const bubbleSort = sort.bubbleSort;
const selectionSort = sort.selectionSort;
const assertListsEqual = test.assertListsEqual;
const displaySummary = test.displaySummary;
const headLine = test.headLine;

const testSelectionSort = function() {
  headLine('Testing selectionSort function');

  assertListsEqual([], selectionSort([]),'Testing for empty list');
  assertListsEqual([10], selectionSort([10]),'Testing for single element');
  assertListsEqual([5, 13, 25], selectionSort([5, 25, 13]),'Testing for positive elements in the list');
  assertListsEqual([-9, 0, 1, 2, 5, 123], selectionSort([5, 2, 1, -9, 123, 0]),'Testing for integers');

  console.log();
}

const testBubbleSort = function() {
  headLine('Testing bubbleSort function');

  assertListsEqual([], bubbleSort([]),'Testing for empty list');
  assertListsEqual([10], bubbleSort([10]),'Testing for single element');
  assertListsEqual([5, 13, 25], bubbleSort([5, 25, 13]),'Testing for positive elements in the list');
  assertListsEqual([-9, 0, 1, 2, 5, 123], bubbleSort([5, 2, 1, -9, 123, 0]),'Testing for integers');

  console.log();
}

testSelectionSort();
testBubbleSort();
