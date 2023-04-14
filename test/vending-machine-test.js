const test = require('../lib/test-framework.js');
const vendingMachine = require('../src/vending-machine.js');
const assertListsEqual = test.assertListsEqual;
const assertObjectsEqual = test.assertObjectsEqual;
const assertEquality = test.assertEquality;
const headLine = test.headLine;
const coinsOfDenominations = vendingMachine.coinsOfDenominations;
const vendCoins = vendingMachine.vendCoins;

const testOrderedDenominations = function() {
  headLine('Testing vendCoins function for ordered denominations');

  let message = 'Zero denominations should give 0' 
  let expected = vendCoins(10, [])
  let actual = 0;
  assertEquality(expected, actual, message);

  message = 'Amount less than denominations should give 0' 
  expected = vendCoins(1, [5])
  actual = 0;
  assertEquality(expected, actual, message);

  message = 'Denomination value equal to amount should give 1 coin' 
  actual = 1;
  expected = vendCoins(10, [10])
  assertEquality(expected, actual, message);

  message = 'A set of denominations should give optimum coins' 
  actual = 12;
  expected = vendCoins(103, [1, 2, 5, 10]);
  assertEquality(expected, actual, message);
}

const testUnorderedDenominations = function() {
  headLine('Testing vendCoins function for unordered denominations');

  let message = 'Zero denominations should give 0';
  let expected = vendCoins(1, []);
  let actual = 0;
  assertEquality(expected, actual, message);

  message = 'Unordered set of denominations should give optimum coins';
  expected = vendCoins(13, [4, 1, 7]);
  actual = 4;
  assertEquality(expected, actual, message);
}

const testCoinsByDenominationsFn = function() {
  headLine('Testing CoinsByDenominations function');

  let message = 'Zero denominations should give 0';
  let expected = coinsOfDenominations(45, []);
  let actual = {};
  assertObjectsEqual(expected, actual, message);

  message = 'Only one denomination should give the coin count';
  expected = coinsOfDenominations(45, [5]);
  actual = {5:9};
  assertObjectsEqual(expected, actual, message);

  message = 'A set of denominations should give coin count of each denomination';
  expected = coinsOfDenominations(13, [4, 1, 7]);
  actual = {7:1, 1:2, 4:1};
  assertObjectsEqual(expected, actual, message);
}

const runTests = function() {
  testOrderedDenominations();
  testUnorderedDenominations();
  testCoinsByDenominationsFn();
  test.displaySummary();
}

runTests();
