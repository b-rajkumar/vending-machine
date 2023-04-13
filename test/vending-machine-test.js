const test = require('../lib/test-framework.js');
const vendingMachine = require('../src/vending-machine.js');
const assertListsEqual = test.assertListsEqual;
const assertObjectsEqual = test.assertObjectsEqual;
const assertEquality = test.assertEquality;
const headLine = test.headLine;
const maxSort = vendingMachine.maxSort;
const computeCountByDenominations = vendingMachine.computeCountByDenominations;
const computeCoinCount = vendingMachine.computeCoinCount;


const testMaxSort = function() {
  headLine('Testing maxSort function');

  assertListsEqual([5, 2, 1], maxSort([1, 5, 2]),'max sort should give 5, 2, 1 for 1, 5, 2 input');
  assertListsEqual([10, 5, 2, 1], maxSort([10, 1, 5, 2]),'max sort should give 10, 5, 2, 1 for 10, 1, 5, 2 input');
  assertListsEqual([5, 2, 1], maxSort([5, 2, 1]),'max sort should give 5, 2, 1 for 5, 2, 1 input');

  console.log();
}

const testVendingMachine = function() {
  headLine('Testing computeCoinCount function');

  assertEquality(0, computeCoinCount(10, []),'10 Rs and 0 denominations should give 0');
  assertEquality(0, computeCoinCount(1, [5]),'1 rupee and 5 as denominations should give 0');
  assertEquality(3, computeCoinCount(5, [1, 2]),'5 Rs and 1, 2 as denominations should give 3 coin');
  assertEquality(1, computeCoinCount(10, [10]),'10 Rs and 10 as denominations should give 1 coin');
  assertEquality(12, computeCoinCount(103, [1, 2, 5, 10]), '103 Rs and 1, 2, 5, 10 as denominations should give 12 coins');
  assertEquality(4, computeCoinCount(13, [1, 4, 7]),'13 Rs and 1, 4, 7 as denominations should give 4 coins');

  console.log();
}

const testForUnorderedDenominations = function() {
  headLine('Testing computeCoinCount function for unordered denominations');
  assertEquality(4, computeCoinCount(13, [4, 1, 7]),'13 Rs and 4, 1, 7 as denominations should give 4 coins');
  assertEquality(12, computeCoinCount(107, [2, 10, 5, 1]),'107 Rs and 2, 10, 5, 1 as denominations should give 12 coins');
  console.log();
}

const testCoinsByDenominations = function() {
  headLine('Testing Coins function');
  assertObjectsEqual({10:4, 1:5}, computeCountByDenominations(45, [1, 10]),'45 Rs and 1, 10 as denominations should give 10:4, 1:5 computeCountByDenominations');
  assertObjectsEqual({7:1, 1:2, 4:1}, computeCountByDenominations(13, [4, 1, 7]),'13 Rs and 4, 1, 7 as denominations should give 7:1, 4:1, 1:2 computeCountByDenominations');
  assertObjectsEqual({10:10, 2:1, 1:1}, computeCountByDenominations(103, [1, 2, 5, 10]),'103 Rs and 1, 2, 5, 10 as denominations should give 10:10, 5:0, 2:1, 1:1 computeCountByDenominations');
}

const runTests = function() {
  testMaxSort();
  testVendingMachine();
  testForUnorderedDenominations();
  testCoinsByDenominations();
  test.displaySummary();
}

runTests();
